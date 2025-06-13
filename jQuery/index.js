$("h1").css("color","red");
$("h1").css("font-size","5rem");
$("button").html("<em>Hi</em>")
$("button").css("padding","2rem")
$("button").css("font-size","2rem")

$("a").attr("href","https://youtube.com")
$("a").attr("target","_blank")

$("h1").click(function() {
    $("h1").css("color","green");
})

$("button").click(function() {
    $("h1").css("color","blue");
})

// $(document).keypress(function(event) {
//     $("h1").text(event.key)
// })

$("h1").on("mouseover",function() {
    $("h1").css("color","grey")
})

$("button").click(function() {
    // $("h1").fadeToggle()
    // $("h1").slideToggle()
    $("h1").animate({opacity: 0.5}).slideToggle()

})
