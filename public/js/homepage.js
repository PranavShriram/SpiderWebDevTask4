var searchInput = document.querySelector('.searchInput');
var searchContainer = document.querySelector('#search');
var detailsContainer = document.querySelector('#details');
var movieContainer = document.querySelector('.movieContainer1');
var moreDetailsContainer = document.querySelector('#moreDetails');
var messageContainer = document.querySelector('#message');
var titleButton = document.querySelector('.byTitle');
var IDButton = document.querySelector('.byID');
var searchMethod = "title";

moreDetailsContainer.style.display = "none";


//========================
const CLIENT_ID = '360652545912-m7upatrca898t9kk4cd9i1mar7chbbtb.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');


const defaultChannel = 'techguyweb';

// Form submit and change channel
channelForm.addEventListener('submit', e => {
  e.preventDefault();

  const channel = channelInput.value;

  getChannel(channel);
});

// Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    content.style.display = 'block';
    videoContainer.style.display = 'block';
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    content.style.display = 'none';
    videoContainer.style.display = 'none';
  }
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}
//=========================

var res2 = [];
async function like()
{
  var url = "https://www.googleapis.com/youtube/v3/videos/rate?key=AIzaSyD5N1UyGE-C3yp6CMcuBhDITpFuUxEZ96A&id=jEDaVHmw7r4&rating=like";
  var res = await fetch(url,
    {
      method:"POST"
    });
  var res1 = await res.json();
  console.log(res1);  
}
function searchMethodTitle()
{ 
  searchMethod = "title";
  moreDetails.style.display = "none";
  IDButton.classList.remove('active');
  titleButton.classList.add('active');
}
function searchMethodID()
{
  searchMethod = "ID";
  IDButton.classList.add('active');
  titleButton.classList.remove('active');

}
async function addComment(e)
{
   try {
    
    console.log(e.parentNode.parentNode);
    var value = e.parentNode.parentNode.children[0].children[0].value;
    var index = e.parentNode.parentNode.children[0].children[0].id.slice(5);
    
    var reqBody = {
      Title:res2[index].Title,
      value:value,
    }
    var url = "/comments"
    var res = await fetch(url, {  
      headers: {'Content-Type': 'application/json'},
      method: "POST",
      body: JSON.stringify(reqBody),
  
    })
    if(res.ok)
    {
      var returned = await res.json();
      var inserted = `
         <div class = "comment">
            <div><b>${returned.user}</b></div>
            <div class = "mb-3">${returned.value}</div>
         </div>   
      `
       
      var reqDiv = document.querySelector('.comments'+index);

      reqDiv.insertAdjacentHTML("beforeend",inserted)
  
    }
  


   } catch (error) {
     console.log(error);
   }
}


async function addToFavourite(e)
{
  e.children[0].style.color = "gold";
  var index = e.id.slice(9);
  var url = "/favourite";
  let reqBody = {
    Title: res2[index].Title

  };

  var res = await fetch(url, {  
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(reqBody),

  })
  if(res.ok)
  {
    
    messageContainer.innerHTML = `
    <div class = "alert alert-success">
      Added to favourites
    </div>
   `
   setTimeout(function(){
     messageContainer.innerHTML = "";
   },2000)

  }
  
 
  
 
}
async function watched(e)
{ 
 
  var index = e.id.slice(7);
  var url = "/watched";
  let reqBody = {
    Title: res2[index].Title

  };

  var res = await fetch(url, {  
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(reqBody),

  })
  if(res.ok)
  {
    messageContainer.innerHTML = `
    <div class = "alert alert-success">
      Added to watched
    </div>
   `
   setTimeout(function(){
     messageContainer.innerHTML = "";
   },2000)


  }

  
   
 
}
async function watchLater(e)
{
  var index = e.id.slice(10);
  var url = "/watchLater";
  let reqBody = {
    Title: res2[index].Title

  };

  var res = await fetch(url, {  
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify(reqBody),

  })
  if(res.ok)
  {
    var returned = await res.json();
    console.log(returned);

  }

  


}

async function findIDMatch(string)
{
  var url = "http://www.omdbapi.com/?apikey=e7225b1e&i="+string+"&plot=full";
  try
  {    
       res2 = []
       var res = await fetch(url, {
           method: 'POST',
       });
       var index = 0;

       var obj = await res.json();
       console.log(obj)
       var url = "/comments/get";
       var reqBody = {
         Title:obj.Title
       }
       var res4 =  await fetch(url, {
        method: 'POST',
        body:JSON.stringify(reqBody)
       });
       var res = await res4.json();
       var flagFavourite = 0,flagWatched = 0,flagWatchLater = 0;
       console.log(res);
       var resString2 = `<div class = 'comments${index}'></div>`;
     
       for(var i  = 0;i < res.comments.length;i++)
       {
         resString2 += `
          <div class = "comment">
            <div><b>${res.comments[i].user}</b></div>
            <div class = "mb-3">${res.comments[i].value}</div>
          </div>
         ` 
       }
       for(var i  = 0;i < res.favourites.length;i++)
       { 
           if(res.favourites[i] == obj.Title)
           {
             flagFavourite = 1;
             break;
           }
       }
       for(var i  = 0;i < res.watched.length;i++)
       { 
           if(res.watched[i] == obj.Title)
           {
             flagWatched = 1;
             break;
           }
       }
       for(var i  = 0;i < res.watchLater.length;i++)
       { 
           if(res.watchLater[i] == obj.Title)
           {
             flagWatchLater = 1;
             break;
           }
       }
       resString2 += "</div>";
       res2 = [];
       res2.push(obj);
       var sParameter = encodeURIComponent(obj.Title.trim()) //"Test%20-%20Text"
       sParameter += "%20official%20trailer"
       var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${sParameter}&key=AIzaSyD5N1UyGE-C3yp6CMcuBhDITpFuUxEZ96A`;
       var retObj = await fetch(url, {
         method: 'GET',
       });
       var res1 = await retObj.json(); 
       console.log(res1);
       var id = res1.items[0].id.videoId; 
  var resString1 = `<iframe width="1000" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  var favouriteString = flagFavourite == 0?`<button style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i  class="fa fa-star-o" aria-hidden="true"></i></button>`:`<button style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i style = "color:gold" class="fa fa-star-o" aria-hidden="true"></i></button>`;
   
  var resString = `
        <div class = "card-header">${res2[index].Title}
            <button onclick = "closeCard(this)" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class = "card-body">
           <div><b>Year:</b> ${res2[index].Year}</div>
           <div><b>Genre:</b> ${res2[index].Genre}</div>
           <div class = "mb-4"><b>Plot:</b> ${res2[index].Plot}</div>
           ${resString1}

           <div class = "mt-4 mb-4">
             ${favouriteString}

            <button id = "watched${index}" onclick = "watched(this)" class = "btn btn-primary">Watched</button>
            <button id = "watchLater${index}" onclick = "watchLater(this)" class = "btn btn-primary">Watch Later</button>
           </div>
           <hr class="my-4">

           <h3 class = "mb-4">Comments</h3>
           <form class = " mt-2 mb-3">
            <div class = "row">
             <div class = "col">
              <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
             </div>
             <div class = "col">  
             <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
             </div>           
            </div> 
           </form>
           ${resString2}
        </div>
  `;
  moreDetails.children[0].innerHTML = resString;
  moreDetails.style.display = "";
  }
  catch(error)
  {
    console.log(error);
  }    
}

function keyUpListener()
{  
   res2 = []
   var searchString = searchInput.value;
   movieContainer.innerHTML = ""
   if(searchMethod == "title")
   findMatch(searchString);
   else if(searchMethod == "ID")
   {
     findIDMatch(searchString);
   }
   
} 
function closeCard(e)
{
  searchContainer.style.display = "";
  detailsContainer.style.display = "";
  moreDetailsContainer.style.display = "none";

}
async function onClickEvent(e)
{ 
  var index = e.id.slice(6);

  searchContainer.style.display = "none";
  detailsContainer.style.display = "none";
  moreDetailsContainer.style.display = "";


  var sParameter = encodeURIComponent(res2[index].Title.trim()) //"Test%20-%20Text"
  console.log(sParameter);
  sParameter += "%20official%20trailer"
  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${sParameter}&key=AIzaSyD5N1UyGE-C3yp6CMcuBhDITpFuUxEZ96A`;
  var res = await fetch(url, {
    method: 'GET',
  })

  var res1 = await res.json();

  var reqBody = {
    Title:res2[index].Title
  }
  var url = "/comments/get";
  var res4 =  await fetch(url, {
   method: 'POST',
   body:JSON.stringify(reqBody)
  });
  var res = await res4.json();
  var flagFavourite = 0,flagWatched = 0,flagWatchLater = 0;
  console.log(res);
  var resString2 = `<div class = 'comments${index}'></div>`;

  for(var i  = 0;i < res.comments.length;i++)
  {
    resString2 += `
     <div class = "comment">
       <div><b>${res.comments[i].user}</b></div>
       <div class = "mb-3">${res.comments[i].value}</div>
     </div>
    ` 
  }
  for(var i  = 0;i < res.favourites.length;i++)
  { 
      if(res.favourites[i] == res2[index].Title)
      {
        flagFavourite = 1;
        break;
      }
  }
  for(var i  = 0;i < res.watched.length;i++)
  { 
      if(res.watched[i] == res2[index].Title)
      {
        flagWatched = 1;
        break;
      }
  }
  for(var i  = 0;i < res.watchLater.length;i++)
  { 
      if(res.watchLater[i] == res2[index].Title)
      {
        flagWatchLater = 1;
        break;
      }
  }
  resString2 += "</div>";
 
  var id = res1.items[0].id.videoId; 
  var resString1 = `<iframe width="1000" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  console.log(res2);
  var favouriteString = flagFavourite == 0?`<button style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i  class="fa fa-star-o" aria-hidden="true"></i></button>`:`<button style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i style = "color:gold" class="fa fa-star-o" aria-hidden="true"></i></button>`;
   
  var resString = `
        <div class = "card-header">${res2[index].Title}
            <button onclick = "closeCard(this)" type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class = "card-body">
           <div><b>Year:</b> ${res2[index].Year}</div>
           <div><b>Genre:</b> ${res2[index].Genre}</div>
           <div class = "mb-4"><b>Plot:</b> ${res2[index].Plot}</div>
           ${resString1}

           <div class = "mt-4 mb-4">
             ${favouriteString}

            <button id = "watched${index}" onclick = "watched(this)" class = "btn btn-primary">Watched</button>
            <button id = "watchLater${index}" onclick = "watchLater(this)" class = "btn btn-primary">Watch Later</button>
           </div>
           <hr class="my-4">

           <h3 class = "mb-4">Comments</h3>
           <form class = " mt-2 mb-3">
            <div class = "row">
             <div class = "col">
              <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
             </div>
             <div class = "col">  
             <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
             </div>           
            </div> 
           </form>
           ${resString2}
        </div>
  `;
  moreDetails.children[0].innerHTML = resString;
  
}
function mouseOverEvent(e)
{
   e.children[1].style.display = "";
   e.children[0].style.opacity = "0.3"
}
function mouseOutEvent(e)
{
   e.children[1].style.display = "none";
   e.children[0].style.opacity = "1"

}
async function findMatch(string)
{   
  if(string != "")
  {  
    var url = "http://www.omdbapi.com/?apikey=e7225b1e&s="+string+"&page=1&plot=short";
   try
   {    
        res2 = []
        var res = await fetch(url, {
            method: 'POST',
        })
        var res1 = await res.json();
        console.log(res1);
        var resString = "";
        console.log(res1.Search)
        if(res1.Response == "True")
        {    
             for(var i = 0;i < res1.Search.length;i++)
               { 
                var flag = 0;
                 var url = "http://www.omdbapi.com/?apikey=thewdb&t="+res1.Search[i].Title+"&plot=short";
                 var temp = await fetch(url, {
                  method: 'POST',
                 });
                 var temp1 = await temp.json();
                 for(var i = 0;i < res2.length;i++)
                 {
                   if(res2[i].Title == temp1.Title)
                    {
                      flag = 1;
                      break;
                    }
                 }
                 if(flag == 0 && temp1.Poster != "N/A")
                 res2.push(temp1); 
               }            

          
               for(var i = 0;i < res2.length;i++)
               {  
                   
                   resString += `
                     <div class = "col-lg-4">
                      <div class = "row">
                      <div class = "col-lg-1"></div>
                      <div onmouseover="mouseOverEvent(this)" onmouseout = "mouseOutEvent(this)" class = "col-lg-10 card">
                        <img class="card-img-top" src="${res2[i].Poster}" width = "210" height = "310" alt="Card image cap">
                         <div  style = "display:none" class = "card-img-overlay">
                           <h6 class = "card-title">${res2[i].Title} </h6>
                           <div class = "card-text">${res2[i].Plot}</div>
                           <button onclick = "onClickEvent(this)" id = "button${i}" class = "btn btn-success">View More</button>
                         </div>
                      </div>
                      <div class = "col-lg-1"></div>
                      </div>
                     </div>
                   
                   `;
                  
                 
               }
               console.log(resString);
               movieContainer.innerHTML = resString;
        }
   }
  catch(err)
   {
      console.log(err);
   }
  }  
}