$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>woof</li>");
    $("ul#cat").prepend("<li>RRRIEEEENGGHHHH");
    $("#doggy-attack").fadeIn(0).delay(500).fadeOut(0);

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>*growl*</li>");
    $("ul#cat").prepend("<li>meow</li>");
    $("#kitty-attack").fadeIn(0).delay(500).fadeOut(0);

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });



  });
});
