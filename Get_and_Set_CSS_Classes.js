//jQuery - Obter e Definir Classes CSS

//addClass() - Adiciona uma ou mais classes aos elementos selecionados
//removeClass() - Remove uma ou mais classes dos elementos selecionados
//toggleClass() - Alternações entre adição/remoção de classes dos elementos selecionados
//css() - Define ou retorna o atributo de estilo


$(document).ready(()=>{

   $("button").click(()=>{
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    })

   $("button").click(()=>{
        $("h1, h2, p").removeClass("blue");
       $("div").removeClass("important");
    })

    $("button").click(()=>{
        $("h1, h2, p").toggleClass("blue");
        $("div").removeClass("important");
    })

})