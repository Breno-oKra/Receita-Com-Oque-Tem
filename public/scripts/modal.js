const modal = document.querySelector(".modal")
const btn = document.querySelector(".btn-add-ingredients")
function onModal(){
    $(modal).animate({width: 'toggle'});
}
function onModalSection(){
    $(modal).animate({width: 'toggle'});
    $(".modal-user").animate({width: 'toggle'});   
}