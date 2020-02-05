
// let hickerBtn =document.getElementById("hicker");





$("#hickerBtn").click(function(event){
    event.preventDefault();
    $("#hicker-body").show();
    $("#weather-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#weatherBtn").attr("class","nav-link")    
    $("#calenderBtn").attr("class","nav-link")
    $("#quizBtn").attr("class","nav-link")
    $(this).attr("class","nav-link btnBcolor")
   
   
    
    
})
$("#weatherBtn").click(function(event){
    event.preventDefault();
    $("#weather-body").show();
    $("#hicker-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#hickerBtn").attr("class","nav-link")
    $("#calenderBtn").attr("class","nav-link")
    $("#quizBtn").attr("class","nav-link")
    $(this).attr("class","nav-link btnBcolor")
    
    
    
})
$("#calenderBtn").click(function(event){
    event.preventDefault();
    $("#calender-body").show();
    $("#weather-body").hide();
    $("#hicker-body").hide();
    $("#quiz-body").hide();
    $("#weatherBtn").attr("class","nav-link")    
    $("#hickerBtn").attr("class","nav-link")
    $("#quizBtn").attr("class","nav-link")
    $(this).attr("class","nav-link btnBcolor")
    
    
    
})
$("#quizBtn").click(function(event){
    event.preventDefault();
    $("#quiz-body").show();
    $("#weather-body").hide();
    $("#hicker-body").hide();
    $("#calender-body").hide();
    $("#weatherBtn").attr("class","nav-link")    
    $("#calenderBtn").attr("class","nav-link")
    $("#hickerBtn").attr("class","nav-link")
    $(this).attr("class","nav-link btnBcolor")
    
    
    
});

    

