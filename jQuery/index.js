$("button").css("color","green")
$('h1').addClass("big-title");
$("button").html("<strong><em>CLick me NOW</em></strong>");
// $("h1").removeClass("big-title");
// $("button").text("Click me for some $$$");

// event listeners
$("button").click(function (){
    $("h1").slideToggle().animate({margin: 20});
    // $("h1").slideToggle();
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // setTimeout(function (){
    //     $("h1").css("color","goldenrod");
    // },50); 
});

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })
$("input").on("keypress",function(event){
    $("h1").text(event.key);
})

