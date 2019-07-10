  var likeButtonDisplayStatus = 0;

  function authenticate(e) {
    console.log(e.parentNode.parentNode.children[8])
    var id = e.id;
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(

              function() {
                likeButtonDisplayStatus = 1; 
                e.parentNode.children[1].style.display = "";
                e.parentNode.parentNode.children[8].children[1].style.display = "";
                console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyD5N1UyGE-C3yp6CMcuBhDITpFuUxEZ96A");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute(e) {
    
    
    console.log(res2)
    var id = e.id.slice(4,e.id.length);
    return gapi.client.youtube.videos.rate({
      "id": id,
      "rating": "like"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "360652545912-3cktb29diiqaql0ls9rfqum6c0cg88cg.apps.googleusercontent.com"});
  });