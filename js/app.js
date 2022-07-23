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

const burgerOrders = document.querySelector(".orders");
// working order section
const burgerBuilder = document.querySelector(".burger");
const workingBurger = document.querySelector(".burger-builder");
// empty arr to hold ingredients added to working order
let workingOrder = [];

// serve button
const serveBtn = document.querySelector(".serve-btn");

// ======================= CLASSES ======================= //

// build a class for the hamburgers
class Burger {
  constructor() {
    this.ingredients = [topBun, burgerPatty, bottomBun];
    this.addOnIngredients = [
      wholeCheese,
      wholeLettuce,
      wholeTomato,
      wholeOnion,
      wholePickles,
    ];
  }

  //   METHODS FOR BUILDING BURGER IN WORKING ORDER SECTION
  addTopBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/top-bun.png";
    image.className = "builder-img top-bun-builder bun";
    // workingBurger.appendChild(burgerBuilder)
    burgerBuilder.appendChild(image);
    console.log("top bun added!");
    workingOrder.push("bun");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("top bun removed!");
    });
  }

  addBurgerPatty() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/burger.png";
    image.className = "builder-img burger-patty-builder patty";
    burgerBuilder.appendChild(image);
    console.log("burger added!");
    workingOrder.push("patty");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("burger patty removed!");
    });
  }

  addCheese() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/yellow-cheese.png";
    image.className = "builder-img cheese-builder cheese";
    burgerBuilder.appendChild(image);
    console.log("cheese added!");
    workingOrder.push("cheese");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("cheese removed!");
    });
  }

  addLettuce() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/lettuce.png";
    image.className = "builder-img lettuce-builder lettuce";
    burgerBuilder.appendChild(image);
    console.log("lettuce added!");
    workingOrder.push("lettuce");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("lettuce removed!");
    });
  }

  addTomato() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/tomato.png";
    image.className = "builder-img tomato-builder tomato";
    burgerBuilder.appendChild(image);
    console.log("tomato added!");
    workingOrder.push("tomato");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("tomato removed!");
    });
  }

  addOnion() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/onion.png";
    image.className = "builder-img onion-builder onion";
    burgerBuilder.appendChild(image);
    console.log("onion added!");
    workingOrder.push("onion");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("onion removed!");
    });
  }

  addPickles() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/pickles.png";
    image.className = "builder-img pickles-builder pickles";
    burgerBuilder.appendChild(image);
    console.log("pickles added!");
    workingOrder.push("pickles");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("pickles removed");
    });
  }

  addBottomBun() {
    let image = document.createElement("img");
    image.src = "css/assets/images/ingredients/bottom-bun.png";
    image.className = "builder-img bottom-bun-builder bun";
    burgerBuilder.appendChild(image);
    console.log("bottom-bun added!");
    workingOrder.push("bun");
    console.log(workingOrder);
    // erase ingredient from working order if clicked on
    image.addEventListener("click", () => {
      burgerBuilder.removeChild(image);
      console.log("bottom-bun removed!");
    });
  }
}
// instantiate new burger object
const burger = new Burger();
console.log(burger);

// build a class for players
class Player {
  constructor() {
    this.name = "";
    this.score = "";
  }

  addScoreToSessionStorage() {
    // after the player's round save their score to local storage
    // at the end of the game compare both players' scores to determine winner
  }
  // playerChefs = []

  //   addElphyChefToLocalStorage() {
  //     let chefName = document.querySelector(".elphy-chef-name");
  //     // when players choose their chef save it to local storage
  //     localStorage.setItem("player1Chef", `${elphyChef}`);
  //     // when player 2's turn comes pull their avatar from local storage
  //     // if player 1 ends up winning, pull their avatar out for the winner page
  //   }

  //   addPiggyChefToLocalStorage() {
  //     let chefName = document.querySelector(".piggy-chef-name");
  //     localStorage.setItem("player1Chef", `${chefName}`);
  //   }

  //   addChickyChefToLocalStorage() {
  //     let chefName = document.querySelector(".chicky-chef-name");
  //     localStorage.setItem("player1Chef", `${chefName}`);
  //   }
}

// instantiating a new player
const player = new Player();
console.log(player);

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
    let order = [];
    let burgerIngredients = burger.ingredients;
    // loop through ingredients and add them to the order
    for (let i = 0; i < burgerIngredients.length; i++) {
      order.push(burgerIngredients[i]);
    }
    let addOns = getRandomIngredients();
    // loop through add on ingredients and add them to order
    for (let i = 0; i < addOns.length; i++) {
      order.push(addOns[i]);
    }
    // return randomized order
    return order;
  }

  sendInOrder() {
    let newOrder = game.createOrder();
    // console.log(newOrder)
    console.log(newOrder);

    // create a div that will contain burger order
    let order = document.createElement("div");
    // create a list to display ingredients
    let list = document.createElement("ul");

    // loop through order to create list item for each ingredient
    for (let i = 0; i < newOrder.length; i++) {
      let listItem = document.createElement("li");
      listItem.style.listStyle = "none";
      listItem.style.fontSize = "12px";
      let ingredient = newOrder[i];
      listItem.innerHTML = ingredient.className;
      list.appendChild(listItem);
    }

    order.appendChild(list);
    order.className = "order";
    order.style.padding = "20px";
    burgerOrders.appendChild(order);
    console.log("sendInOrder()", `${order}`);
    // if orders waiting for 8 seconds start flashing red
    // if orders waiting for 15 seconds remove order and deduct points
    // console.log(workingOrder)
  }

  serveOrder() {
    console.log("servebtn", "ORDER BEING SERVED");
    //   arr of ingredients in order
    let orderArr = game.createOrder();
    let image = document.querySelector(".builder-img")
    

    if(orderArr.length === workingOrder.length){
        player.score += 10
    } else {
        player.score -= 5
    }
    console.log(orderArr.length, workingOrder.length)
    console.log(player.score)

    burgerOrders.removeChild(burgerOrders.firstElementChild);
    // workingBurger.remove(burgerBuilder);

    while(burgerBuilder.firstChild){
        burgerBuilder.removeChild(burgerBuilder.firstChild)
    }

    workingOrder = [];

    // console.log(workingOrder)
  }

  // for(let i = 0; i < orderArr.length; i++){
  //     for(let j = 0; j < workingOrder.length; j++){
  //         if(orderArr[i] === workingOrder[j]){
  //             let order = document.getElementsById("order")
  //             burgerOrders.removeChild(order)
  //         }
  //     }
  // }

  startGame() {
    console.log("Burger boss has begun");
    // begin 2 minute timer
    setInterval(startCountdown, 1000);
    // setInterval for when orders to be sent in every 10 seconds
    setInterval(this.sendInOrder, 10000);
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
    clearInterval(game.createOrder);
  }
};

// ====================FUNCTIONS TO SELECT RANDOM INGREDIENTS FOR ORDER==================== //

// generate a random number for the amount of add on ingredients to put on burger
const randomNum = () => {
  let nums = [0, 1, 2, 3, 4, 5];
  let randomNum = Math.floor(Math.random() * nums.length);
  randomNum = nums[randomNum];
  return randomNum;
};
// function to randomize burger ingredients
const getRandomIngredients = () => {
  let ingredients = burger.addOnIngredients;
  // shuffle ingredients array
  const shuffledIngredients = ingredients.sort(() => 0.5 - Math.random());
  // console.log(shuffledIngredients)
  let num = randomNum();
  // get a new array of first randomNum() of ingredients
  let randomIngredients = shuffledIngredients.slice(0, num);
  return randomIngredients;
};

// ===============INITIATE GAME=============== //
console.log(game.createOrder());
game.startGame();

// =================EVENT LISTENERS===================== //

// event listeners for whole ingredients while building burger
topBun.addEventListener("click", burger.addTopBun);
burgerPatty.addEventListener("click", burger.addBurgerPatty);
wholeCheese.addEventListener("click", burger.addCheese);
wholeLettuce.addEventListener("click", burger.addLettuce);
wholeTomato.addEventListener("click", burger.addTomato);
wholeOnion.addEventListener("click", burger.addOnion);
wholePickles.addEventListener("click", burger.addPickles);
bottomBun.addEventListener("click", burger.addBottomBun);

// serve btn listener
serveBtn.addEventListener("click", game.serveOrder);
