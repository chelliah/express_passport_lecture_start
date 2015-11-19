$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data);
            $("#welcome").text("Welcome, " +  data.username);
            $('.container').append("<div>" +
                                        "<p>First name: " + data.firstName +"</p>" +
                                        "<p>Last Name: " + data.lastName +"</p>" +
                                        "<p>email: " + data.email +"</p>" +
                                    "</div>");
        }
    });
});