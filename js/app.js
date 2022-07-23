// ========== VARIABLES IMPORTED FROM HTML ========== //

// chef characters
const elphyChef = document.querySelector(".elphy-chef-choice");
const piggyChef = document.querySelector(".piggy-chef-choice");
const chickyChef = document.querySelector(".chicky-chef-choice");

// game timer in top right corner 
const timerHTML = document.getElementById("countdown-timer");

// whole-ingredients
const topBun = document.querySelector(".top-bun");
const burgerPatty = document.querySelector(".burger-patty");
const wholeCheese = document.querySelector(".whole-cheese");
const wholeLettuce = document.querySelector(".whole-lettuce");
const wholeTomato = document.querySelector(".whole-tomato");
const wholeOnion = document.querySelector(".whole-onion");
const wholePickles = document.querySelector(".whole-pickles");
const bottomBun = document.querySelector(".bottom-bun");

// working order section
const burgerBuilder = document.querySelector(".burger-builder");

// ======================= CLASSES ======================= //

// build a class for the hamburgers
class Burger {
  constructor() {
    this.ingredients = [topBun, burgerPatty, bottomBun]
    this.addOnIngredients = [wholeCheese, wholeLettuce, wholeTomato, wholeOnion, wholePickles]
  }


//   METHODS FOR BUILDING BURGER IN WORKING ORDER SECTION 
  addTopBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/top-bun.png";
    burgerBuilder.appendChild(image);
    console.log("top bun added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("top bun taken off!");
    });
  }

  addBurgerPatty() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/burger.png";
    burgerBuilder.appendChild(image);
    console.log("burger added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("burger patty taken off!");
    });
  }

  addCheese() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/yellow-cheese.png";
    burgerBuilder.appendChild(image);
    console.log("cheese added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("cheese taken off!");
    });
  }

  addLettuce() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/lettuce.png";
    burgerBuilder.appendChild(image);
    console.log("lettuce added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("lettuce taken off!");
    });
  }

  addTomato() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/tomato.png";
    burgerBuilder.appendChild(image);
    console.log("tomato added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("tomato taken off!");
    });
  }

  addOnion() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/onion.png";
    burgerBuilder.appendChild(image);
    console.log("onion added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("onion taken off!");
    });
  }

  addPickles() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/pickles.png";
    burgerBuilder.appendChild(image);
    console.log("pickles added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("pickles taken off!");
    });
  }

  addBottomBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/bottom-bun.png";
    burgerBuilder.appendChild(image);
    console.log("bottom-bun added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("bottom-bun taken off!");
    });
  }
}
// instantiate new burger object
const burger = new Burger();
console.log(burger);

// event listeners for whole ingredients while building burger
topBun.addEventListener("click", burger.addTopBun);
burgerPatty.addEventListener("click", burger.addBurgerPatty);
wholeCheese.addEventListener("click", burger.addCheese);
wholeLettuce.addEventListener("click", burger.addLettuce);
wholeTomato.addEventListener("click", burger.addTomato);
wholeOnion.addEventListener("click", burger.addOnion);
wholePickles.addEventListener("click", burger.addPickles);
bottomBun.addEventListener("click", burger.addBottomBun);

// build a class for players
class Player {
  constructor() {
    this.player = "";
    this.avatar = "";
  }
  // playerChefs = []

  addElphyChefToLocalStorage() {
    let chefName = document.querySelector(".elphy-chef-name");
    // when players choose their chef save it to local storage
    localStorage.setItem("player1Chef", `${elphyChef}`);
    // when player 2's turn comes pull their avatar from local storage
    // if player 1 ends up winning, pull their avatar out for the winner page
  }

  addPiggyChefToLocalStorage() {
    let chefName = document.querySelector(".piggy-chef-name");
    localStorage.setItem("player1Chef", `${chefName}`);
  }

  addChickyChefToLocalStorage() {
    let chefName = document.querySelector(".chicky-chef-name");
    localStorage.setItem("player1Chef", `${chefName}`);
  }

  addScoreToSessionStorage() {
    // after the player's round save their score to local storage
    // at the end of the game compare both players' scores to determine winner
  }
}

// instantiating a new player 
const player = new Player();
console.log(player)

// build a class for the game
// game functionality goes in here
class Game {
  constructor() {
    this.name = "Burger Boss";
    this.score = "";
    this.timeLimit = ""; // 2 min round
  }

//   NOT WORKING 
  savePlayerInfo() {
    elphyChef.addEventListener("click", player.addElphyChefToLocalStorage);
    piggyChef.addEventListener("click", player.addPiggyChefToLocalStorage);
    chickyChef.addEventListener("click", player.addChickyChefToLocalStorage);
  }

  createOrder() {
    const burgerOrders = document.querySelector(".orders");
    // create a div that will contain burger order (eventually will be blank notepad picture)
    let newOrder = document.createElement("div");
    newOrder.innerText = "This will be the burger order";
    newOrder.style.padding = "20px"
    burgerOrders.appendChild(newOrder);
    console.log("createOrder()", "new order had been created")
  }

  startGame() {
    console.log("Burger boss has begun");
    // begin 2 minute timer
    setInterval(startCountdown, 1000);
    // setInterval for when orders to be sent in every 10 seconds 
    setInterval(this.createOrder, 10000);
  }

  sendInOrders() {
    // if orders waiting for 8 seconds start flashing red
    // if orders waiting for 15 seconds remove order and deduct points
  }
}
// instantiating new game
const game = new Game();
console.log(game);

// ===========TIMER LOGIC============ //

// create a timer that will countdown from 1 minute .. maybe 2 min
let totalMin = 1; // 2 min - how long we want the timer to run
let time = totalMin * 60; // multiplying by 60 seconds to get total seconds

// function to run the timer
const startCountdown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  // display timer in game html page
  timerHTML.innerHTML = `TIMER ${minutes}:${seconds}`;
  time--;

  if (minutes < 0 && seconds < 0) {
    timerHTML.innerHTML = "GAME OVER";
    clearInterval(game.createOrder)
  }
};

// function to randomize burger ingredients 
const randomNum = () => {
    let nums = [0, 1, 2, 3, 4]
    let randomNum = Math.floor(Math.random() * nums.length)
    randomNum = nums[randomNum]
    return randomNum
}
console.log(randomNum())
const getRandomIngredients = () => {

}
// ===============INITIATE GAME=============== //
game.startGame();


// ================CODE TO COME BACK TO WHEN REFACTORING================= //

// build a class for customer
// class Customer {
//   constructor() {
//     this.order = "";
//     this.timeLimit = ""; // 30 seconds  - customer will wait this long until leaving, if customer leaves without order player loses points
//   }

//   createOrder() {
//     // randomly select how many and which ingredients to have on burger
//     // return the order
//   }

//   leaveWithBurger() {
//     // make customer disappear from UI
//     // add points to current player's score
//   }

//   leaveWithoutBurger() {}
// }