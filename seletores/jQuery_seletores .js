//jQuery seletores
/**os seletores jQuery são usados para 
 * "encontrar" (ou selecionar) elementos
 *  HTML com base em seu nome, id, classes,
 *  tipos, atributos, valores de atributos e 
 * muito mais. É baseado nos seletores CSSexistentes, 
 * e além disso, tem alguns seletores personalizados próprios. **/

 //$(document).ready(function(){
 //   $("button").click(function(){
        //$('p').hide(); //Seletor de tag
        //$("#test").hide(); //Seletor de ID
       //$(".test").hide(); //Seletro de Class
       //$("*").hide(); // Seletor Coletivo
       //$(this).hide(); // Seleciona o elemento HTML atual
      // $("h2,p.int").hide();//Seleciona todos os elementos <p> com class = "int"
      //$("p:first").hide(); //Seleciona o primeiro elemento <p>
      //$("ul li:first").hide();//Seleciona o primeiro <li> elemento do primeiro <ul>
      //$("ul li:first-child").hide();//Seleciona o primeiro <li> elemento de cada <ul>
      //$("[href]").hide();//Seleciona todos os elementos com um atributo href
      //$("a[target='_blank']").hide(); //Seleciona todos os elementos <a> com um valor de atributo de destino igual a "_blank"
      //$("a[target!='_blank']").hide(); //Seleciona todos os elementos <a> com um valor de atributo de destino NÃO igual a "_blank"
      //$(":button").hide();//Seleciona todos os elementos <button> e elementos <input> de type = "button"
     
  //  })
// })

    $(document).ready(function(){
        $("tr:odd").css("background-color", "red")
    })
