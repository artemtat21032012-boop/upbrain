console.log("BrainUp запущен");


const caseData = {

"Lucky Case":{
img:"images/cases/lucky.png",
price:49
},

"Crazy Case":{
img:"images/cases/crazy.png",
price:79
},

"Mystery Case":{
img:"images/cases/mystery.png",
price:99
},

"Rich Case":{
img:"images/cases/rich.png",
price:149
},

"Legend Case":{
img:"images/cases/legend.png",
price:249
},

"Guest Case":{
img:"images/cases/guest.png",
price:666
},

"God Case":{
img:"images/cases/god.png",
price:1000
}

};



function openCasePage(name){

console.log("Открываем:", name);


let data = caseData[name];


document.querySelector(".cases-page").style.display="none";

document.querySelector(".open-page").style.display="block";


document.querySelector(".case-title").innerText=name;


document.querySelector(".case-image").src=data.img;


document.querySelector(".case-price").innerText=
"🪙 Цена открытия: "+data.price;



}



function backCases(){

document.querySelector(".open-page").style.display="none";

document.querySelector(".cases-page").style.display="block";

}




function openReward(){


let rewards=[
"🔪 Нож",
"💎 Алмаз",
"🪙 500 монет",
"⭐ Редкий предмет"
];


let random =
rewards[Math.floor(Math.random()*rewards.length)];


document.querySelector(".result").innerHTML=
`
🎉 Выпало:

${random}
`;

}
