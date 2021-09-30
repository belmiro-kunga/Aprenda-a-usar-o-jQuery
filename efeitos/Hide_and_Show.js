//efeitos jQuery - Esconde-esconde
//toggle()



$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });

    $("#show").click(function(){
      $("p").show();
    });

    $("button").click(()=>{
        $("p").toggle(1000);
    });
  });
