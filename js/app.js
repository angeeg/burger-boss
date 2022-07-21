// ========== IMPORTED VARIABLES FROM HTML ========== //

// chef characters
const elphyChef = document.querySelector(".elphy-chef-choice");
const piggyChef = document.querySelector(".piggy-chef-choice");
const chickyChef = document.querySelector(".chicky-chef-choice");

// game timer
const timerHTML = document.getElementById("countdown-timer")

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
    this.topBun = true;
    this.patty = true;
    this.lettuce = false;
    this.cheese = false;
    this.tomato = false;
    this.onion = false;
    this.bottomBun = true;
  }

  //   removeIngredient() {
  //     // erase ingredient from working order if clicked on
  //     image.addEventListener("click", () => {
  //       image.style.display = "none";
  //       console.log("lettuce taken off!");
  //     });
  //   }

  addTopBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/top-bun.png";
    burgerBuilder.appendChild(image);
    console.log("top bun added!");
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      image.style.display = "none";
      console.log("burger patty taken off!");
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
const burgerOrder = new Burger();
console.log(burgerOrder);

// event listeners for ingredients while building burger
topBun.addEventListener("click", burgerOrder.addTopBun);
burgerPatty.addEventListener("click", burgerOrder.addBurgerPatty);
wholeCheese.addEventListener("click", burgerOrder.addCheese);
wholeLettuce.addEventListener("click", burgerOrder.addLettuce);
wholeTomato.addEventListener("click", burgerOrder.addTomato);
wholeOnion.addEventListener("click", burgerOrder.addOnion);
wholePickles.addEventListener("click", burgerOrder.addPickles);
bottomBun.addEventListener("click", burgerOrder.addBottomBun);

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

  createOrder() {

  }

  startGame() {
    // begin 2 minute timer 

    
    // create a div that will contain burger order (eventually will be blank notepad picture)

    // setInterval for when orders will be sent in 
        // if orders waiting for 8 seconds start flashing red 
        // if orders waiting for 15 seconds remove order and deduct points  

    
    console.log("Burger boss has begun");
  }

  sendInCustomers() {}
}

 // create a timer that will countdown from 1 minute .. maybe 2 min
 let totalMin = 2 // this will be 2 minutes 
 let time = totalMin * 60 // multiplying by 60 seconds to get total seconds

// function to run the timer
 const startCountdownTimer = () => {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    timerHTML.innerHTML = `TIMER : ${minutes}:${seconds}`
    time--
 }
 
 setInterval(startCountdownTimer, 1000)