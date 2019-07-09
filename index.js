var express = require('express'),
    app = express(),
    port_number = process.env.PORT || 3000,
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    crypto = require('crypto'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    User = require('./models/User'),
    Comment = require('./models/Comment');
    
 
//mongoose.connect('mongodb://localhost:27017/thinkMovie', {useNewUrlParser: true});
mongoose.connect("mongodb+srv://Pranav:password12345@cluster0-veuo1.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(() => {
    console.log("Connected");
}).catch(
    err => {
        console.log(err);
    }
)

app.set("view engine","ejs");    
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use(flash());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.json({
    type: ['application/json', 'text/plain']
  }))

//=========================================================
//USER DEFINED FUNCTIONS
//=========================================================    

function generateSalt(length)
{
return crypto.randomBytes(Math.ceil(length/2))
.toString('hex') 
.slice(0,length);   
}

function hashSaltPassword(password)
{

var salt = generateSalt(16);
const cipher = crypto.createCipher('aes192', salt);  
var encrypted = cipher.update(password, 'utf8', 'hex');  
encrypted += cipher.final('hex');
 return {
     salt:salt,
     passwordHash:encrypted
 };
}

function decryptHash(salt,hash)
{
const decipher = crypto.createDecipher('aes192', salt);  
var decrypted = decipher.update(hash, 'hex', 'utf8');  
decrypted += decipher.final('utf8');   
return decrypted;   
}
async function addComment(req,res)
{
    try {
        var foundUser = await User.findOne({username:req.session.user});
        foundUser.activity.push({
            Date:Date.now(),
            name:"comment",
            object:req.body.Title
        })
        var savedFoundUser = await foundUser.save();
        var newComment = await Comment.create({Title:req.body.Title,value:req.body.value,user:req.session.user});
        res.send(newComment);

    } catch (error) {
        console.log(error);
    }
}
async function getComments(req,res)
{
    try {
        var resComments = [] 
        var comments = await Comment.find({});
        var foundUser = await User.findOne({username:req.session.user});

        for(var i = 0;i < comments.length;i++)
        {
            if(comments[i].Title == req.body.Title)
             resComments.push(comments[i]);
        }

         console.log(resComments); 
        res.send({comments:resComments,favourites:foundUser.favourites,watched:foundUser.watched,watchLater:foundUser.watchLater});
    } catch (error) {
        console.log(error);
    }
}
async function renderProfile(req,res)
{
    try {
        
        var foundUser = await User.findOne({username:req.session.user});
        res.render("profile",{sessionUser:req.session.user,user:foundUser.username,favourites:foundUser.favourites,watched:foundUser.watched,watchLater:foundUser.watchLater,activity:foundUser.activity,state:foundUser.state});

    } catch (error) {
        console.log(error);
    }
}
async function renderProfileUser(req,res)
{
    try {
        
        var foundUser = await User.findOne({username:req.body.user});
        console.log(req.body.user,foundUser)
        if(foundUser)
          res.render("profile",{sessionUser:req.session.user,user:foundUser.username,favourites:foundUser.favourites,watched:foundUser.watched,watchLater:foundUser.watchLater,activity:foundUser.activity,state:foundUser.state});
        else
          res.redirect("/profile")
    } catch (error) {
        console.log(error);
    }
}
async function makePrivate(req,res)
{
    try {
        
      var foundUser = await User.findOne({username:req.session.user});
      foundUser.state = "Private";
      var savedFoundUser = await foundUser.save();
      res.redirect("/profile")


    } catch (error) {
        console.log(error);
    }
}
async function makePublic(req,res)
{
    try {
        
        var foundUser = await User.findOne({username:req.session.user});
        foundUser.state = "Public";
        var savedFoundUser = await foundUser.save();
  
        res.redirect("/profile")
      } catch (error) {
          console.log(error);
      }
}
async function renderRegister(req,res)
{
    try
    {
        var allUsers = await User.find({});
        var username = [];

        for(var i = 0;i < allUsers.length;i++)
        {
            username.push(allUsers[i].username);
        }
        if(req.session.user && req.session.user != "")
        {
            res.redirect("/homepage");
        }
        else
        {  

           res.render("register",{message:req.flash('danger'),username:username});
        }   
    }
    catch(err)
    {
        console.log(err);
    }
}
async function addToFavourite(req,res)
{
    try {
        console.log(req.body)
        var flag = 0; 
        var foundUser = await User.findOne({username:req.session.user});
        console.log(foundUser)
        for(var i = 0;i <  foundUser.favourites.length;i++)
        {
            if(foundUser.favourites[i] == req.body.Title)
             {
                 flag = 1;
                 break;
             }    
        }
        if(flag == 0)
        {
             foundUser.favourites.push(req.body.Title);
             foundUser.activity.push({
                 Date:Date.now(),
                 name:"favourite",
                 object:req.body.Title
             })
        }     
        var savedFoundUser = await foundUser.save();
        res.send("success");

    } catch (error) {
        console.log(error);
    }
}
async function watched(req,res)
{
    try {
        var flag = 0; 
        console.log(req.method); 
        console.log(req.body)
        var foundUser = await User.findOne({username:req.session.user});
        var flag = 0;
        console.log(foundUser);

        for(var i = 0;i <  foundUser.watched.length;i++)
        {
            if(foundUser.watched[i] == req.body.Title)
             {
                 flag = 1;
                 break;
             }    
        }
        for(var i =0;i < foundUser.watchLater.length;i++)
        {
            if(foundUser.watchLater[i] == req.body.Title)
             foundUser.watchLater.splice(i,1);
        }
        if(flag == 0)
        {
             foundUser.watched.push(req.body.Title);
             foundUser.activity.push({
                Date:Date.now(),
                name:"watched",
                object:req.body.Title
            });
        }   
        var savedFoundUser = await foundUser.save();

        res.json({greeting: "hello"}); 

    } catch (error) {
        console.log(error);
    }
}
async function watchLater(req,res)
{
    try {
        var flag = 0; 

        var foundUser = await User.findOne({username:req.session.user});
        console.log(foundUser);
        var flag = 0;
         
        for(var i = 0;i <  foundUser.watchLater.length;i++)
        {
            if(foundUser.watchLater[i] == req.body.Title)
             {
                 flag = 1;
                 break;
             }    
        }
        if(flag == 0)
         {
             foundUser.watchLater.push(req.body.Title);
             foundUser.activity.push({
                Date:Date.now(),
                name:"watchLater",
                object:req.body.Title
            });
        }    
        var savedFoundUser = await foundUser.save();
        res.send("success");


    } catch (error) {
        console.log(error);
    }
}
//=========================================================
//LOGIN AND REGISTER ROUTES
//=========================================================
    app.get("/test",(req,res) => {
        res.render("test")
    }) 

    app.get("/",(req,res) => {
        res.redirect("/login");
    })
    
    app.get("/register",(req,res)=>{
       
        renderRegister(req,res); 
       
    });   
    
    app.post("/register",(req,res)=>{
          
       
                var generatedSaltAndHash = hashSaltPassword(req.body.password);
                
                var user = {username:req.body.username,salt:generatedSaltAndHash.salt,hash:generatedSaltAndHash.passwordHash};
            
                User.find({username:req.body.username},(err,foundUsers) => {
            
                    if(foundUsers.length > 0)
                    {
                        req.flash("danger","Username already taken");
                        res.redirect("/register");
                    }
                    else
                    {
                        User.create(user,(err,userCreated)=>{
                            if(err)
                            console.log(err);
                            else
                            {  
                                req.session.user = userCreated.username;
                                res.redirect("/homepage")
                            } 
                    });
                    }
                })
       
        
    })
    
    app.get("/login",(req,res)=>{
        if(req.session.user && req.session.user != "")
        {
            res.redirect("/homepage");
        }
        else
        {
          res.render("login",{message:req.flash('danger')});
        }  
    });  
    app.get("/logout",(req,res) => 
    {
        req.session.user = "";
        res.redirect("/login");
    
    });
    app.post("/login",(req,res)=>{
        
        User.find({username:req.body.username}).then((user)=>{
         if(user.length == 0)
         {   
    
              req.flash('danger', 'Incorrect username')
    
              res.redirect("/login");
         }   
         else
         {
          var passwordOfUser = decryptHash(user[0].salt,user[0].hash);
            if(req.body.password === passwordOfUser)
            {   
    
                req.session.user = user[0].username;
    
                res.redirect('/homepage');
            }
            else
            {
                req.flash('info', 'Incorrect credentials')
                res.redirect("/login");
            }
        }  
       }).catch((err)=>{
           console.log(err)
       });
    });
        
app.get("/homepage",checkAuthenticity,(req,res) => {
   res.render("homepage");
});

app.get("/profile",checkAuthenticity,(req,res) => {
   
    renderProfile(req,res);
});

app.post("/private",checkAuthenticity,(req,res) => {
    makePrivate(req,res);
});
app.post("/public",checkAuthenticity,(req,res) => {
    makePublic(req,res);
});

app.post("/profile/anonymus",(req,res) => {
    console.log(req.body)
    renderProfileUser(req,res);
});

//=======================================
//Watch and like routes
//=======================================

app.post("/favourite",(req,res) =>{
    addToFavourite(req,res);
});
app.post("/watched",(req,res) =>{
    watched(req,res);
});
app.post("/watchLater",(req,res) =>{
    watchLater(req,res);
});


//=======================================
//Comments route
//=======================================
app.post("/comments",(req,res) =>{
    console.log(req.body);
    addComment(req,res);
});

app.post("/comments/get",(req,res) => {
     getComments(req,res);
});

//=======================================
//Middleware
//=======================================
function checkAuthenticity(req,res,next){
    if(req.session.user && req.session.user != "")
      next();
    else
     res.redirect("/login");  
}


app.listen(port_number,(req,res) => {
    console.log("Think Movie server has started");
})    