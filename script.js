//clique() evento de um click
/**$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  }); */

  //dblclick() evento de duplo click
  /**
   * $(document).ready(function(){
      $("p").dblclick(function(){
          $(this).hide();
      });
  });
   */

  //mouseenter() Evento de moude sobre elemento html

 /**
 $(document).ready(function(){
    $("#p1").mouseenter(function(){
        alert("O mause está sobre o parágrafo");
    });
});
  */

 //mouseleave() Evento quando o muose deixa o elemento html

/** $(document).ready(function(){
     $("#p1").mouseleave(function(){
         alert("Adeus! meu paragrafo");
     });
 }); */

 //mousedown()pressionado para baixo, enquanto o mouse está sobre o elemento HTML

/** $(document).ready(function(){
     $("#p1").mousedown(function(){
         alert("mouse down e mouse over")
     })
 }) 
*/
//mouseup() liberado, enquanto o mouse está sobre o elemento HTML

/** $(document).ready(function(){
     $("#p1").mouseup(function(){
         alert("Mouse");
     });
 }); */

 //hover()elemento HTML, e a segunda função é executada quando o mouse deixa o elemento HTML

/**
 $(document).ready(function(){
    $("#p1").hover(function(){
        alert("O mause entrou")
    },
    
    function(){
        alert("Adeus! O mause saio")
    });
 }); */

 //focus()A função é executada quando o campo de formulários recebe foco

 
/** $(document).ready(function(){
     $("input").focus(function(){
         $(this).css("background-color", "yellow");
     });
     $("input").blur(function(){
        $(this).css("background-color", "green");
     })
 }) */

 //Conecte vários manipuladores de eventos a um elemento:<p>)


$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "red");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }

    });
});
