//efeitos jQuery - Sliding

//jQuery slideDown()
//Demonstra o método jQuery slideDown().

//jQuery slideUp()
//Demonstra o método jQuery slideUp().

//jQuery slideToggle()
//Demonstra o método jQuery slideToggle().

$(document).ready(()=>{
    $("#cabecalho").click(()=>{
      $("painel").slideDown("slow");
      $("painel").slideUp("slow");
      $("#painel").slideToggle("slow");
    });
  });
  