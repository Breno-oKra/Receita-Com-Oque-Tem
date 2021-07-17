const ingredientsRender = document.getElementById("myingredients")
const deletados = document.getElementById("deletados")
const ingredientsSelect = document.getElementById("ingredients")
const campIngre = document.getElementById("camp-Select-Ingredients")
const data = []
let valueData = "";
const dataDelete = [];
let valueDeletes = "";
(function(){
    
    var spaceBetween = ingredientsRender.value.split(",");
      
     for (let i = 0; i < spaceBetween.length; i++) {
        data.push(spaceBetween[i])
        createCamp(spaceBetween[i])
     }
})();

function addIngredient(){
    let ingredient = ingredientsSelect.value
    console.log(valueData)
    if(data.indexOf(ingredient) == -1){
        data.push(ingredient)
        createCamp(ingredient)
    }
           
}
function createCamp(name){
    let nameSee = name.replace(/_/g," ") 
    var divs = document.createElement("div")
    divs.setAttribute("class","box-incrediets-select")
    divs.setAttribute("id",`${name}`)
    var p = document.createElement("p")
    p.innerText = nameSee
    p.setAttribute("class","text-ingredient")
    var icon = document.createElement("img")
    icon.setAttribute("src","/images/icones/close.png")
    icon.setAttribute("class","imgIcon-ingrediets")
    icon.setAttribute("onclick",`del(${name},"${name}")`)
    divs.appendChild(p)
    divs.appendChild(icon)
    campIngre.appendChild(divs)
}
function del(camp,name){
    
    let item = data.indexOf(name)
    campIngre.removeChild(camp)
    data.splice(item,1)
    dataDelete.push(name)
}
function saveIngredients(){
    data.forEach(item => {
        let finder = dataDelete.indexOf(item)
        console.log(finder)
        if(finder == 1){
            dataDelete.splice(item,1)
        }
        valueData = valueData + "," + item
    });
    dataDelete.forEach(item => {
        valueDeletes = valueDeletes + "," + item
    })
    ingredientsRender.value = valueData
    deletados.value = valueDeletes
    console.log(ingredientsRender.value)
}
