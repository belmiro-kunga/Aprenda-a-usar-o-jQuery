//jQuery - Adicionar Elementos
//Adicionar novo conteúdo HTML

//append() - Insere conteúdo no final dos elementos selecionados
//prepend() - Insere conteúdo no início dos elementos selecionados
//after() - Insere conteúdo após os elementos selecionados
//before() - Insere o conteúdo antes dos elementos selecionados


$(document).ready(()=>{
    $("#btn1").click(()=>{
        $("p").append("<b>Texto anexado.</b>")
    })

    $("#btn2").click(()=>{
        $("ol").append("<li>Listar o item</li>")
    })

    $("#btn1").click(()=>{
       $("p").prepend("<b>Texto anexado.</b>")
    })

    $("#btn2").click(()=>{
        $("ol").prepend("<li>Listar o item</li>")
    })

})


//Adicionar vários novos elementos com append() e prepend()

function appendText(){
    var txt1 = "<p>Text.</p>"; //Crie texto com HTML
    var txt2 = $("<p></p>").text("Text")//Crie texto com jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text."; //Crie texto com DOM

    $("body").append(txt1, txt2, txt3);  //Anexar novos elementos
}



jQuery depois () e antes () Métodos

$(document).ready(()=>{
    $("#btn1").click(()=>{
        $("img").before("<b>Antes</>");
    });

    $("#btn2").click(()=>{
        $("img").after("<b>depois</>");
    });
});



