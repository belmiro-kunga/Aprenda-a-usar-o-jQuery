//jQuery - Chaining
$(document).ready(()=>{

    $("button").click(()=>{
        $("#p1").css("color","red")
        .slideUp(2000)
        .slideDown(2000);
    });
});