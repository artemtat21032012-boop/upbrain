Telegram.WebApp.expand();


// ================= ДАННЫЕ ИГРОКА =================


let player = JSON.parse(localStorage.getItem("brainup")) || {

    coins: 500,

    casesOpened: 0,

    inventory: []

};



// исправление сломанных данных

if(typeof player.coins !== "number" || isNaN(player.coins)){

    player.coins = 500;

}


if(typeof player.casesOpened !== "number" || isNaN(player.casesOpened)){

    player.casesOpened = 0;

}


if(!Array.isArray(player.inventory)){

    player.inventory = [];

}



savePlayer();



let currentPrice = 0;





// ================= СОХРАНЕНИЕ =================


function savePlayer(){

    localStorage.setItem(
        "brainup",
        JSON.stringify(player)
    );

}







// ================= ОБНОВЛЕНИЕ ИНТЕРФЕЙСА =================


function updatePlayer(){



    let coins = document.getElementById("coins");


    if(coins){

        coins.innerText = player.coins;

    }





    let profileCoins = document.getElementById("profileCoins");


    if(profileCoins){

        profileCoins.innerText = player.coins;

    }





    let casesOpened = document.getElementById("casesOpened");


    if(casesOpened){

        casesOpened.innerText = player.casesOpened;

    }







    let inventory = document.getElementById("inventory");



    if(inventory){



        if(player.inventory.length === 0){


            inventory.innerHTML = "Пусто";


        }

        else{


            inventory.innerHTML = "";



            player.inventory.forEach((item,index)=>{


                inventory.innerHTML += `


                <div class="item">


                <h3>
                ${item.name}
                </h3>



                <p>
                💰 Цена: ${item.price}
                </p>



                <button onclick="sellItem(${index})">

                💰 Продать

                </button>


                </div>


                `;



            });



        }



    }



}





updatePlayer();









// ================= СТРАНИЦЫ =================




function hideAll(){


    document.querySelector(".cases-page").style.display="none";


    document.querySelector(".open-page").style.display="none";


    document.querySelector(".upgrade-page").style.display="none";


    document.querySelector(".profile-page").style.display="none";


}







function goCases(){


    hideAll();


    document.querySelector(".cases-page").style.display="block";


}







function goUpgrade(){


    hideAll();


    document.querySelector(".upgrade-page").style.display="block";


}







function goProfile(){


    hideAll();


    document.querySelector(".profile-page").style.display="block";


    updatePlayer();


}









// ================= ОТКРЫТИЕ КЕЙСА =================




function openCasePage(name,image,price){



    hideAll();



    document.querySelector(".open-page").style.display="block";



    document.querySelector(".case-title").innerText = name;



    document.querySelector(".open-image").src = image;



    document.querySelector(".open-price").innerHTML =

    "🪙 Цена открытия: " + price;



    currentPrice = price;



}









// ================= НАГРАДЫ =================




function openReward(){



    if(player.coins < currentPrice){



        document.querySelector(".result").innerHTML =

        `

        <h2>❌ Недостаточно монет</h2>

        `;


        return;


    }







    // списание монет


    player.coins -= currentPrice;



    player.casesOpened++;








    let rewards = [


        {

        name:"💎 Редкий предмет",

        price:250

        },


        {

        name:"🔥 Легендарный скин",

        price:1000

        },


        {

        name:"⚡ Бустер",

        price:150

        },


        {

        name:"🎁 Новый кейс",

        price:500

        },


        {

        name:"🪙 +100 монет",

        price:100

        }


    ];







    let win = rewards[

        Math.floor(Math.random()*rewards.length)

    ];








    player.inventory.push(win);







    savePlayer();


    updatePlayer();







    document.querySelector(".result").innerHTML =


    `

    <h2>🎉 Выпало:</h2>


    <h2>${win.name}</h2>


    <p>

    💰 Цена продажи: ${win.price}

    </p>


    `;



}









// ================= ПРОДАЖА =================




function sellItem(index){



    let item = player.inventory[index];



    if(!item || typeof item.price !== "number"){


        return;


    }





    player.coins += item.price;





    player.inventory.splice(index,1);






    savePlayer();



    updatePlayer();



}
