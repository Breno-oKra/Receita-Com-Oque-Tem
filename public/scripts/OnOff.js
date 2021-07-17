const receitasDisponiveis = document.getElementById("receitasDisponiveis");
const myReceitas = document.getElementById("myReceitas")
const receitasLoja = document.getElementById("receitasLoja")

OnOff("receitasDisponiveis")
function OnOff(camp){
    
    if(camp == 'receitasDisponiveis'){      
        $(receitasDisponiveis).show()
        $("#btn-disponivel").css("background-color","rgb(243, 243, 243)").css("color","#000")
        $(receitasLoja).hide()
        $("#btn-loja").css("background-color","").css("color","#fff")
        $(myReceitas).hide()
        $("#btn-mine").css("background-color","").css("color","#fff")
    }
    if (camp == 'myReceitas'){
        $(receitasDisponiveis).hide()
        $("#btn-disponivel").css("background-color","").css("color","#fff")
        $(receitasLoja).hide()
        $("#btn-loja").css("background-color","").css("color","#fff")
        $(myReceitas).show()
        $("#btn-mine").css("background-color","rgb(243, 243, 243)").css("color","#000")
    }
    if (camp == 'myReceitasModal'){
        $(receitasDisponiveis).hide()
        $("#btn-disponivel").css("background-color","").css("color","#fff")
        $(receitasLoja).hide()
        $("#btn-loja").css("background-color","").css("color","#fff")
        $(myReceitas).show()
        $("#btn-mine").css("background-color","rgb(243, 243, 243)").css("color","#000")
        $(".modal-user").animate({width: 'toggle'});
    }
    if(camp == 'receitasLoja'){
        $(receitasDisponiveis).hide()
        $("#btn-disponivel").css("background-color","").css("color","#fff")
        $(receitasLoja).show()
        $("#btn-loja").css("background-color","rgb(243, 243, 243)").css("color","#000")
        $(myReceitas).hide()
        $("#btn-mine").css("background-color","").css("color","#fff")
        
    }
}
function containerUser(){
    $(".modal-user").animate({width: 'toggle'});
}