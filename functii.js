$(document).ready(
  function() {
      var randomNumber = Math.random();
      if ( randomNumber == 1 )
        $("body").prepend("<img src=\"prieten-rau.JPG\" alt=\"Prostel prieten rau\"> <p> Prostel este prieten rau. Purifica-l! </p>");
      else
        $("body").prepend("<img src=\"prieten-bun.JPG\" alt=\"Prostel prieten bun\"> <p> Prostel este prieten bun. </p>");
  }
);

function purifica() {
    $("img").remove();
    $("body").prepend("<img src=\"prieten-bun.JPG\" alt=\"Prostel prieten bun\">");
    $("p").html("Prostel este prieten bun.");
}
