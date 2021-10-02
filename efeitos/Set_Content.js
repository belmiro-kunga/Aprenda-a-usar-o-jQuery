//jQuery - Definir Conteúdo e Atributos
//Definir conteúdo - texto(), html() e val()

$(document).ready(()=>{

$("#btn1").click(()=>{
    $("#test1").text("Olá Mundo!")
});

$("#btn2").click(()=>{
    $("#test2").html("<b>Olá Alunos!<b>")
});

$("#btn3").click(()=>{
    $("#test3").val("Bem-Vendo!")
});


});