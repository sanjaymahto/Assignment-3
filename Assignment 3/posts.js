        //ajax file to fetch the results from the facebook JSON data
$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBADkDUH5EHqJ47kqVjjmiki2HDBZCCn5ybONQrcsRRZAKZAZBLAVlpm57f0XMPLWtZB8ZBOKg5pxICDaoAuFdzsZB9dpE5PQHqUWedmldZAyJZBKd4ZBsCyt93qU0ZBbRrLhZB0tGt1rGpckFq1NrPaOZCZCoxYiqewj4h4kDmBCZB6YB1zO1isl51P704wZD';

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

             success: function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#username").text(response.name); 
                     for (var y = 0; y < response.posts.data.length; y++) {
                    $("#myposts").append(response.posts.data[y].story+" "+"Create time: "+response.posts.data[y].created_time+"</br>");
                    }  

                },
                error: function(request,errorType,errorMessage) {
                alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

                console.log(request);
                    console.log(errorType);
                    console.log(errorMessage);
                    alert(response.errorMessage);
            }
        }
                );// end ajax call 

        //facebook API to retrive posts...
  /*      FB.api(
  '/me',
  'GET',
  {"fields":"id,name,birthday,education,gender,hometown,posts"},
  function(response) {
      console.log(response);
                    console.log(response);
                    $("#username").text(response.name); 
                     for (var y = 0; y < response.posts.data.length; y++) {
                    $("#myposts").append(response.posts.data[y].story+"</br>");
                    }                  
                }
  }
);*/

  });