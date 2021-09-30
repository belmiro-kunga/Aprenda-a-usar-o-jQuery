//efeitos jQuery - Fading
//Método jQuery fadeToggle() 
//Método jQuery fadeTo()

//jQuery fadeIn()
//Demonstra o método jQuery fadeIn().

//jQuery fadeOut()
//Demonstra o método jQuery fadeOut().

//jQuery fadeToggle()
//Demonstra o método jQuery fadeToggle().

//jQuery fadeTo()
//Demonstra o método jQuery fadeTo().

$(document).ready(()=>{
  $("button").click(()=>{
    $("div1").fadeOut();
    $("div2").fadeOut("slow");
    $("div3").fadeOut(3000);


    $("div1").fadeToggle();
    $("div2").fadeToggle("slow");
    $("div3").fadeToggle(3000);
    
    
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
});

