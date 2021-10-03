//jQuery css() Método

$(document).ready(()=>{


    $("button").click(()=>{
       alert("esté é o backgroud Color  = " + $("p").css("background-color"));
       $("p").css("background-color", "red");

      $("p").css({"background-color": "yellow", "font-size": "200%"})
    });
});


