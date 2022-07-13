// ======================= CLASSES ======================= //

// build a class for the hamburgers 
class Burger {
    constructor(){
        this.topBun = ""
        this.patty = ""
        this.lettuce = ""
        this.tomato = ""
        this.cheese = ""
        this.bottomBun = ""
    }
}

// build a class for players
class Player {
    constructor(){
        this.player = ""
        this.avatar = ""
    }
    playerAvatars = []

    addAvatarToLocalStorage() {
        // when players choose their avatar save it to local storage  
            // when player 2's turn comes pull their avatar from local storage
            // if player 1 ends up winning, pull their avatar out for the winner page
    }

    addScoreToLocalStorage() {
        // after the player's round save their score to local storage 
            // at the end of the game compare both players' scores to determine winner

    }
}

// build a class for customer 
class Customer {
    constructor (){
        this.order = ""
        this.timeLimit = "" // 30 seconds  - customer will wait this long until leaving, if customer leaves without order player loses points 
    }

    createOrder() {
        // randomly select how many and which ingredients to have on burger 

        // return the order 
    }

    leaveWithBurger() {
        // make customer disappear from UI

        // add points to current player's score 
        

    }

    leaveWithoutBurger() {

    }
}

// build a class for the game 
    // game functionality goes in here 
class Game {
    constructor(){
        this.name = "Burger Boss"
        this.score = ""
        this.timeLimit = "" // 2 min round 
    }

    startGame() {
        console.log("Burger boss has begun")
    }

    sendInCustomers() {

    }
}
    


