//Metodo Animação
$(document).ready(()=>{
    //$("button").click(()=>{
       // $("div").animate({left:'50%'});
    //});

/**********anima() - Manipular múltiplas propriedades****** */
    //$("button").click(()=>{
       //$("div").animate({
           //left:'250px',
          // opacity: '0.5',
           //width:'200px'

      // });
  // });

   /**anima() - Usando Valores Relativos */

  // $("button").click(()=>{
   //$("div").animate({
           // left:'250px',
            //height:'+=150px',
            //width:'150px'

          //  height:'toggle',
   // })
  // })



/**anima() - Usa funcionalidade de fila */

  $("button").click(()=>{
      var div = $("div");
      //div.animate({height: '300px', opacity: '0.4'}, "slow");
      //div.animate({width: '300px', opacity: '0.8'}, "slow");
      //div.animate({height: '100px', opacity: '0.4'}, "slow");
      //div.animate({width: '100px', opacity: '0.8'}, "slow")

       div.animate({left:'100px'}, 'slow');
       div.animate({fontSize:'3em'}, 'slow');
  });

});