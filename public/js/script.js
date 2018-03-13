/*
global $
*/

$(".upload-btn").click(()=>{
    $(".progress-bar").width("0%");
    $("#upload-input").click();
});

$("#upload-input").on("change", ()=>{
    $(".progress-bar").width("100%");
});