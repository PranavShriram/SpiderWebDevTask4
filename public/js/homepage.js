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





var resString = ""
var res2 = [  {
  "Title": "Batman Begins",
  "Year": "2005",
  "Rated": "PG-13",
  "Released": "15 Jun 2005",
  "Runtime": "140 min",
  "Genre": "Action, Adventure",
  "Director": "Christopher Nolan",
  "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
  "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
  "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  "Language": "English, Urdu, Mandarin",
  "Country": "USA, UK",
  "Awards": "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
      },
      {
          "Source": "Metacritic",
          "Value": "70/100"
      }
  ],
  "Metascore": "70",
  "imdbRating": "8.2",
  "imdbVotes": "1,194,010",
  "imdbID": "tt0372784",
  "Type": "movie",
  "DVD": "18 Oct 2005",
  "BoxOffice": "$204,100,000",
  "Production": "Warner Bros. Pictures",
  "Website": "https://www.warnerbros.com/batman-begins",
  "Response": "True"
},   {
  "Title": "The Dark Knight",
  "Year": "2008",
  "Rated": "PG-13",
  "Released": "18 Jul 2008",
  "Runtime": "152 min",
  "Genre": "Action, Crime, Drama, Thriller",
  "Director": "Christopher Nolan",
  "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
  "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
  "Plot": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Language": "English, Mandarin",
  "Country": "USA, UK",
  "Awards": "Won 2 Oscars. Another 152 wins & 155 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "9.0/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
      },
      {
          "Source": "Metacritic",
          "Value": "84/100"
      }
  ],
  "Metascore": "84",
  "imdbRating": "9.0",
  "imdbVotes": "2,070,977",
  "imdbID": "tt0468569",
  "Type": "movie",
  "DVD": "09 Dec 2008",
  "BoxOffice": "$533,316,061",
  "Production": "Warner Bros. Pictures/Legendary",
  "Website": "http://thedarkknight.warnerbros.com/",
  "Response": "True"
},
{
  "Title": "The Dark Knight Rises",
  "Year": "2012",
  "Rated": "PG-13",
  "Released": "20 Jul 2012",
  "Runtime": "164 min",
  "Genre": "Action, Thriller",
  "Director": "Christopher Nolan",
  "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
  "Actors": "Christian Bale, Gary Oldman, Tom Hardy, Joseph Gordon-Levitt",
  "Plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
  "Language": "English, Arabic",
  "Country": "UK, USA",
  "Awards": "Nominated for 1 BAFTA Film Award. Another 38 wins & 102 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
      },
      {
          "Source": "Metacritic",
          "Value": "78/100"
      }
  ],
  "Metascore": "78",
  "imdbRating": "8.4",
  "imdbVotes": "1,389,960",
  "imdbID": "tt1345836",
  "Type": "movie",
  "DVD": "03 Dec 2012",
  "BoxOffice": "$448,130,642",
  "Production": "Warner Bros. Pictures",
  "Website": "http://www.thedarkknightrises.com/",
  "Response": "True"
},
{
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Adventure, Sci-Fi, Thriller",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
  "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "Language": "English, Japanese, French",
  "Country": "USA, UK",
  "Awards": "Won 4 Oscars. Another 152 wins & 204 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
      },
      {
          "Source": "Metacritic",
          "Value": "74/100"
      }
  ],
  "Metascore": "74",
  "imdbRating": "8.8",
  "imdbVotes": "1,840,057",
  "imdbID": "tt1375666",
  "Type": "movie",
  "DVD": "07 Dec 2010",
  "BoxOffice": "$292,568,851",
  "Production": "Warner Bros. Pictures",
  "Website": "http://inceptionmovie.warnerbros.com/",
  "Response": "True"
}, {
  "Title": "Dunkirk",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "21 Jul 2017",
  "Runtime": "106 min",
  "Genre": "Action, Drama, History, Thriller, War",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong",
  "Plot": "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.",
  "Language": "English, French, German",
  "Country": "UK, Netherlands, France, USA",
  "Awards": "Won 3 Oscars. Another 51 wins & 197 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.9/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "92%"
      },
      {
          "Source": "Metacritic",
          "Value": "94/100"
      }
  ],
  "Metascore": "94",
  "imdbRating": "7.9",
  "imdbVotes": "469,792",
  "imdbID": "tt5013056",
  "Type": "movie",
  "DVD": "19 Dec 2017",
  "BoxOffice": "$188,042,171",
  "Production": "Warner Bros. Pictures",
  "Website": "http://www.dunkirkmovie.com",
  "Response": "True"
}, {
  "Title": "Interstellar",
  "Year": "2014",
  "Rated": "PG-13",
  "Released": "07 Nov 2014",
  "Runtime": "169 min",
  "Genre": "Adventure, Drama, Sci-Fi",
  "Director": "Christopher Nolan",
  "Writer": "Jonathan Nolan, Christopher Nolan",
  "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
  "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  "Language": "English",
  "Country": "USA, UK, Canada",
  "Awards": "Won 1 Oscar. Another 43 wins & 143 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.6/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "72%"
      },
      {
          "Source": "Metacritic",
          "Value": "74/100"
      }
  ],
  "Metascore": "74",
  "imdbRating": "8.6",
  "imdbVotes": "1,304,706",
  "imdbID": "tt0816692",
  "Type": "movie",
  "DVD": "31 Mar 2015",
  "BoxOffice": "$158,737,441",
  "Production": "Paramount Pictures",
  "Website": "http://www.InterstellarMovie.com/",
  "Response": "True"
}];
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
    var currVideoId = e.parentNode.parentNode.parentNode.parentNode.parentNode.children[3].id;

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
     gapi.client.youtube.commentThreads.insert({
        "part": "snippet",
        "resource": {
          "snippet": {
            "videoId": `${currVideoId}`,
            "topLevelComment": {
              "snippet": {
                "textOriginal": returned.value
              }
            }
          }
        }
      })
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
       
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
    console.log("Added");

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
  var resString1 = `<iframe id = "${id}" width="1000" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  var favouriteString = flagFavourite == 0?`<button data-toggle="tooltip" data-placement="top" title="Add to favourites" style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i  class="fa fa-star-o"  aria-hidden="true"></i></button>`:`<button data-toggle="tooltip" data-placement="top" title="Add to favourites" style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i style = "color:gold;font-size:20px" class="fa fa-star-o" aria-hidden="true"></i></button>`;
  var commentsString = likeButtonDisplayStatus?` 
 <form  class = " mt-2 mb-3">
  <div class = "row">
   <div class = "col">
    <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
   </div>
   <div class = "col">  
   <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
   </div>           
  </div> 
 </form>`:` <form style = "display:none" class = " mt-2 mb-3">
 <div class = "row">
  <div class = "col">
   <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
  </div>
  <div class = "col">  
  <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
  </div>           
 </div> 
</form>`; 
var likeString = likeButtonDisplayStatus?`<button style = "background-color:white;border:none"  data-toggle="tooltip" data-placement="top" title="Like on youtube" id = "like${id}" onclick="execute(this)"  ><i class = "fa fa-thumbs-up" ></i></button>`:`<button style = "display:none;background-color:white;border:none"  data-toggle="tooltip" data-placement="top" title="Like on youtube" id = "like${id}" onclick="execute(this)"  ><i class = "fa fa-thumbs-up" ></i></button>`;
  var resString = `
        <div class = "card-header"><b>${res2[index].Title}</b>
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
           <button id ="${id}" style = "margin-left:70%" onclick="authenticate(this).then(loadClient)" class = "btn btn-primary">Sign in to Google</button>
             ${likeString}
           </div>
           <hr class="my-4">

           <div  style = "margin-left:30%" class = "mt-4 mb-4">
             ${favouriteString}

            <button id = "watched${index}" onclick = "watched(this)" class = "btn btn-primary">Watched</button>
            <button id = "watchLater${index}" onclick = "watchLater(this)" class = "btn btn-primary">Watch Later</button>
           </div>
           <hr class="my-4">
          
          <div class = "comments-head"> 
           <h3 class = "mb-4">Comments</h3>
           ${commentsString}
          </div> 
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

function keyUpListener(e)
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
  var resString1 = `<iframe id = "${id}" width="1000" height="720" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  console.log(res2);
  var favouriteString = flagFavourite == 0?`<button data-toggle="tooltip" data-placement="top" title="Add to favourites" style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i  class="fa fa-star-o"  aria-hidden="true"></i></button>`:`<button data-toggle="tooltip" data-placement="top" title="Add to favourites" style = "background-color:white;border:none" id = "favourite${index}" onclick = "addToFavourite(this)" class = ""><i style = "color:gold;font-size:20px" class="fa fa-star-o" aria-hidden="true"></i></button>`;
  var commentsString = likeButtonDisplayStatus?` 
 <form  class = " mt-2 mb-3">
  <div class = "row">
   <div class = "col">
    <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
   </div>
   <div class = "col">  
   <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
   </div>           
  </div> 
 </form>`:` <form style = "display:none" class = " mt-2 mb-3">
 <div class = "row">
  <div class = "col">
   <input  id = "input${index}" placeholder = "Add a comment" class = "form-control mr-4">
  </div>
  <div class = "col">  
  <button type = "button" onclick = "addComment(this)" class = "btn btn-primary">Submit</button>
  </div>           
 </div> 
</form>`; 
var likeString = likeButtonDisplayStatus?`<button style = "background-color:white;border:none"  data-toggle="tooltip" data-placement="top" title="Like on youtube" id = "like${id}" onclick="execute(this)"  ><i class = "fa fa-thumbs-up" ></i></button>`:`<button style = "display:none;background-color:white;border:none"  data-toggle="tooltip" data-placement="top" title="Like on youtube" id = "like${id}" onclick="execute(this)"  ><i class = "fa fa-thumbs-up" ></i></button>`;
  var resString = `
        <div class = "card-header"><b>${res2[index].Title}</b>
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
           <button id ="${id}" style = "margin-left:70%" onclick="authenticate(this).then(loadClient)" class = "btn btn-primary">Sign in to Google</button>
             ${likeString}
           </div>
           <hr class="my-4">

           <div  style = "margin-left:30%" class = "mt-4 mb-4">
             ${favouriteString}

            <button id = "watched${index}" onclick = "watched(this)" class = "btn btn-primary">Watched</button>
            <button id = "watchLater${index}" onclick = "watchLater(this)" class = "btn btn-primary">Watch Later</button>
           </div>
           <hr class="my-4">
          
          <div class = "comments-head"> 
           <h3 class = "mb-4">Comments</h3>
           ${commentsString}
          </div> 
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