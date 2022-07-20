// ========== IMPORTED VARIABLES FROM HTML ========== //

// chef characters
const elphyChef = document.querySelector(".elphy-chef-choice");
const piggyChef = document.querySelector(".piggy-chef-choice");
const chickyChef = document.querySelector(".chicky-chef-choice");

// whole-ingredients
const topBun = document.querySelector(".top-bun");
const burgerPatty = document.querySelector(".burger-patty");
const wholeCheese = document.querySelector(".whole-cheese");
const wholeLettuce = document.querySelector(".whole-lettuce");
const wholeTomato = document.querySelector(".whole-tomato");
const wholeOnion = document.querySelector(".whole-onion");
const wholePickles = document.querySelector(".whole-pickles");
const bottomBun = document.querySelector(".bottom-bun");

// ======================= CLASSES ======================= //

// build a class for the hamburgers
class Burger {
  constructor() {
      this.topBun = true
      this.patty = true
      this.lettuce = false
      this.cheese = false
      this.tomato = false
      this.onion = false
      this.bottomBun = true
  }

  addTopBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/top-bun.png";
    let burgerBuilder = document.querySelector(".burger-builder");
    burgerBuilder.appendChild(image);
    console.log("top bun added!");
   
  }
}
// instantiate new burger object 
const burgerOrder = new Burger();
console.log(burgerOrder)

topBun.addEventListener("click", burgerOrder.addTopBun);

// build a class for players
class Player {
  constructor() {
    this.player = "";
    this.avatar = "";
  }
  // playerChefs = []

  addElphyChefToSessionStorage() {
    let chefName = document.querySelector(".elphy-chef-name");
    // when players choose their chef save it to local storage
    sessionStorage.setItem("player1Chef", `${chefName}`);
    // when player 2's turn comes pull their avatar from local storage
    // if player 1 ends up winning, pull their avatar out for the winner page
  }

  addPiggyChefToSessionStorage() {
    let chefName = document.querySelector(".piggy-chef-name");
    sessionStorage.setItem("player1Chef", `${chefName}`);
  }

  addChickyChefToSessionStorage() {
    let chefName = document.querySelector(".chicky-chef-name");
    sessionStorage.setItem("player1Chef", `${chefName}`);
  }

  addScoreToSessionStorage() {
    // after the player's round save their score to local storage
    // at the end of the game compare both players' scores to determine winner
  }
}

// build a class for customer
class Customer {
  constructor() {
    this.order = "";
    this.timeLimit = ""; // 30 seconds  - customer will wait this long until leaving, if customer leaves without order player loses points
  }

  createOrder() {
    // randomly select how many and which ingredients to have on burger
    // return the order
  }

  leaveWithBurger() {
    // make customer disappear from UI
    // add points to current player's score
  }

  leaveWithoutBurger() {}
}

// build a class for the game
// game functionality goes in here
class Game {
  constructor() {
    this.name = "Burger Boss";
    this.score = "";
    this.timeLimit = ""; // 2 min round
  }

  savePlayerInfo() {
    elphyChef.addEventListener("click", Player.addElphyChefToSessionStorage);
    piggyChef.addEventListener("click", Player.addPiggyChefToSessionStorage);
    chickyChef.addEventListener("click", Player.addChickyChefToSessionStorage);
  }

  startGame() {
    console.log("Burger boss has begun");
  }

  sendInCustomers() {}
}
