//funções de callback jQuery

$(document).ready(()=>{
    $("button").click(function(){
       // $("p").hide("slow", ()=>{
        $("p").hide(1000)
        alert("O parágrafo agora está oculto");
    });
});