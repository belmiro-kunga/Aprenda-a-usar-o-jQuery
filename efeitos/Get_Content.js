$(document).ready(()=>{

    ("#btn1").click(()=>{
       alert("Text:" + $("#test").text());
    });

$("#btn2").click(()=>{
        lert("HTML:" + $("#test").html());
    });


   $("button").click(()=>{
        alert("valor: " + $("#test").val() );
   });


   $("button").click(()=>{
       alert($("#pro").attr("href"));
   });

});