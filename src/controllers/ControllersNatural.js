
module.exports = {
    dataLoja:[
        {id:1,title:"pão de alho",capa:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvwgk3FMlrg0sB1K17Sqy1GY9E_oon3AZFw&usqp=CAU",ingredients:["farinha_de_trigo","leite","fermento_em_pó","alho","sal"],modo:"2 chicaras de chá"},
        {id:2,title:"bolo de cenoura com calda",capa:"https://imagem.band.com.br/novahome/055caa6d-7528-44bc-ac32-3add84bdc0b0.jpg",ingredients:["farinha_de_trigo","fermento_em_pó","ovo","açucar","cenoura","leite","oleo","leite_condensado","creme_de_leite","chocolate_em_pó","manteiga"],modo:"2 chicaras de chá"},
        {id:3,title:"bolo de cenoura",capa:"https://www.bolodecenoura.com/wp-content/uploads/2020/01/Bolo-de-Cenoura-com-Farinha-de-Arroz.jpg",ingredients:["farinha_de_trigo","fermento_em_pó","ovo","açucar","cenoura","leite","oleo"]},
        {id:4,title:"bololinho de chuva",capa:"https://s2.glbimg.com/th3CDxD2CpWV3-1HHYazdYR20BGvfc59JgqpgGvOphNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/23/cc24receberfaz_118-2.jpg",ingredients:["farinha_de_trigo","fermento_em_pó","ovo","açucar","leite","oleo"],modo:"2 chicaras de chá"},
        {id:5,title:"ovo frito",capa:"https://www.cozinhatecnica.com/wp-content/uploads/2017/09/Fritar-um-ovo-1.jpg",ingredients:["sal","ovo","oleo"],modo:"1. so fritar e ser felizzz"},
    ],
    lastReceita:{
        title:"Nenhuma vista no Momento", 
        capa:"https://img2.gratispng.com/20180331/atw/kisspng-cupcake-drawing-line-art-watercolor-painting-clip-cupcake-line-drawing-5abf3fbc857105.1036362315224831325466.jpg"
    },
    disponivel(dataMain,DataMine,data){ 
        let temp = []
        dataMain.forEach((item) => {
            let control = true
            item.ingredients.forEach(items =>{
                let i  = data.indexOf(items)
                if(i == -1){
                    control = false
                }
            })
            if(control){
                const achar = temp.find(items => items.id == item.id)
                if(achar == undefined){
                    temp.push(item)
                }     
            }
        });
        DataMine.forEach((item) => {
            let control = true
            item.ingredients.forEach(items =>{
                let i  = data.indexOf(items)
                if(i == -1){
                    control = false
                }
            })
            if(control){
                const achar = temp.find(items => items.id == item.id)
                if(achar == undefined){
                    temp.push(item)
                }     
            }
        });
        return temp
    },
}