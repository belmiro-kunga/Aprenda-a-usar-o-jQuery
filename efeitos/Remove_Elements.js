//jQuery - Remover elementos

//remove() - Remove o elemento selecionado (e seus filho)
//empty() - Remove os elementos filhos do elemento selecionado


$(document).ready(()=>{
    
    $("button").click(()=>{
        $("#div1").remove();
    });
        
    $("button").click(()=>{
        $("p").remove();
    });

});