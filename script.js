Telegram.WebApp.expand();



function hidePages(){

document.querySelectorAll(".page").forEach(page=>{

page.style.display="none";

});

}





function goCases(){

hidePages();

document.querySelector(".cases-page").style.display="block";

}




function goUpgrade(){

hidePages();

document.querySelector(".upgrade-page").style.display="block";

}




function goProfile(){

hidePages();

document.querySelector(".profile-page").style.display="block";

}





function openCasePage(name,image,price){


hidePages();


document.querySelector(".open-page").style.display="block";


document.querySelector(".case-title").innerText=name;


document.querySelector(".open-image").src=image;


document.querySelector(".open-price").innerHTML=

"🪙 Цена открытия: " + price;


}





function openReward(){


let rewards=[

"🪙 100 монет",

"💎 Редкий предмет",

"🔥 Легендарный скин",

"⚡ Бустер",

"🎁 Новый кейс"

];


let win =
rewards[Math.floor(Math.random()*rewards.length)];



document.querySelector(".result").innerHTML=

`
<h2>🎉 Выпало:</h2>
<h2>${win}</h2>
`;



}
function hideAllPages(){

document.querySelector(".cases-page").style.display="none";

document.querySelector(".open-page").style.display="none";

document.querySelector(".upgrade-page").style.display="none";

document.querySelector(".profile-page").style.display="none";

}





function goCases(){

hideAllPages();

document.querySelector(".cases-page").style.display="block";

}





function goUpgrade(){

hideAllPages();

document.querySelector(".upgrade-page").style.display="block";

}





function goProfile(){

hideAllPages();

document.querySelector(".profile-page").style.display="block";

}
