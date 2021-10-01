//jQuery Stop Animations
$(document).ready(()=>{
    $("#flip").click(()=>{
        $("#panel").slideDown(5000);
    });

    $("#stop").click(()=>{
        $("#panel").stop();
    });


});