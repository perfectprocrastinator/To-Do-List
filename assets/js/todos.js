$("ul").on("click","li",function (){
    console.log($(this).css("color"))
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration:"none"
    //     })
    // }
    // else{
    //     $(this).css({
    //         color:"gray",
    //        textDecoration:"line-through"
    //     })
    // }
    $(this).toggleClass("select")


})
//click on X to delete
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(function () {
        $(this).parent().remove;

    });
    event.stopPropagation();

})
$("input[type='text']").keypress(function (event) {

    if(event.which === 13){
        {
           let todoText = ($(this).val());
           $(this).val("");
            $("ul").append("<li><span> <i class=\"far fa-trash-alt\"></i> </span>"+todoText+"</li>")
        }
    }

})
$(".fas fa-plus").click(function () {
    $("input[type='text']").fadeToggle;

})