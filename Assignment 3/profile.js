        //ajax file to fetch the results from the facebook JSON data
$( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBADkDUH5EHqJ47kqVjjmiki2HDBZCCn5ybONQrcsRRZAKZAZBLAVlpm57f0XMPLWtZB8ZBOKg5pxICDaoAuFdzsZB9dpE5PQHqUWedmldZAyJZBKd4ZBsCyt93qU0ZBbRrLhZB0tGt1rGpckFq1NrPaOZCZCoxYiqewj4h4kDmBCZB6YB1zO1isl51P704wZD';

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#username").text(response.name); 
                    $("#userName").text("Name: "+" "+response.name);   
                    $("#gender").text("Gender: "+" "+response.gender);   
                    $("#birthday").text("Birthday: "+"   "+response.birthday); 
                    for (var x = 0; x < response.education.length; x++) {
                    
                    $("#education").append(response.education[x].type+":- "+response.education[x].school.name+"</br>");
                    }      
                    $("#hometown").text("HomeTown:  "+"   "+response.hometown.name); 
                    for (var i = 0; i < response.languages.length; i++) {
                    $("#languages").append(response.languages[i].name+"</br>");
                    }  

                    $("#Relationship_status").text("RelationShip Status:  "+"   "+response.relationship_status);
                
                }
            }//end argument list 



        );// end ajax call 

  });