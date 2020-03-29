
$("#shopBtn").click(function(event){
    event.preventDefault();
    $("#stop-shop-body").show();
    $("#temPl-body").hide();
    $("#burger-body").hide();
    $("#hicker-body").hide();
    $("#weather-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#tempEnBtn").attr("class","nav-link");
    $("#burgerBtn").attr("class","nav-link");
    $("#hickerBtn").attr("class","nav-link");
    $("#weatherBtn").attr("class","nav-link");    
    $("#calenderBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");    
    
    
});
$("#tempEnBtn").click(function(event){
    event.preventDefault();
    $("#temPl-body").show();
    $("#stop-shop-body").hide();
    $("#burger-body").hide();
    $("#hicker-body").hide();
    $("#weather-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#shopBtn").attr("class","nav-link");
    $("#burgerBtn").attr("class","nav-link");
    $("#hickerBtn").attr("class","nav-link");
    $("#weatherBtn").attr("class","nav-link");    
    $("#calenderBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");    
    
    
});
$("#burgerBtn").click(function(event){
    event.preventDefault();
    
    $("#burger-body").show();
    $("#temPl-body").hide();
    $("#hicker-body").hide();
    $("#weather-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#tempEnBtn").attr("class","nav-link");
    $("#hickerBtn").attr("class","nav-link");
    $("#weatherBtn").attr("class","nav-link");    
    $("#calenderBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");  
   
    
    
});

$("#hickerBtn").click(function(event){
    event.preventDefault();
    $("#hicker-body").show();
    $("#burger-body").hide();
    $("#temPl-body").hide();
    $("#weather-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#burgerBtn").attr("class","nav-link");
    $("#tempEnBtn").attr("class","nav-link"); 
    $("#weatherBtn").attr("class","nav-link");    
    $("#calenderBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");  
    
    
    
})
$("#weatherBtn").click(function(event){
    event.preventDefault();
    $("#weather-body").show();
    $("#burger-body").hide();
    $("#temPl-body").hide();
    $("#hicker-body").hide();
    $("#calender-body").hide();
    $("#quiz-body").hide();
    $("#burgerBtn").attr("class","nav-link");
    $("#tempEnBtn").attr("class","nav-link");
    $("#hickerBtn").attr("class","nav-link");
    $("#calenderBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");   
    
    
})
$("#calenderBtn").click(function(event){
    event.preventDefault();
    $("#calender-body").show();
    $("#burger-body").hide();
    $("#temPl-body").hide();
    $("#weather-body").hide();
    $("#hicker-body").hide();
    $("#quiz-body").hide();
    $("#burgerBtn").attr("class","nav-link");
    $("#tempEnBtn").attr("class","nav-link");
    $("#weatherBtn").attr("class","nav-link");    
    $("#hickerBtn").attr("class","nav-link");
    $("#quizBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");  
    
    
})
$("#quizBtn").click(function(event){
    event.preventDefault();
    $("#quiz-body").show();
    $("#burger-body").hide();
    $("#temPl-body").hide();
    $("#weather-body").hide();
    $("#hicker-body").hide();
    $("#calender-body").hide();
    $("#burgerBtn").attr("class","nav-link");
    $("#tempEnBtn").attr("class","nav-link");
    $("#weatherBtn").attr("class","nav-link");    
    $("#calenderBtn").attr("class","nav-link");
    $("#hickerBtn").attr("class","nav-link");
    $(this).attr("class","nav-link btnBcolor");
    
    
});

    

