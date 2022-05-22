const game = document.querySelector("#game");
let ctx = game.getContext("2d");
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);
olyImg = document.querySelector(".oly");

//console.log(olyImg)
let stoop;
let oly;
let bunny1;
let bunny2;
let bunny3;
let coyote;

class Character {
  constructor(x, y, color, width, height, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.alive = true;
    this.hunting = false;
    // this.drawImage = ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  //   renders images onto canvas
  //   image, destination x, destination y, destination width, destination height
  //   drawImage() {
  //       ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  //   }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  //   //very basic move function for non Oly Characters
  //   move() {
  //     x += Math.floor(Math.random() * game.width);
  //     y += Math.floor(Math.random() * game.height);
  //   }

  //   //The hunt mechanic for Coyote, and David.
  //   hunt(oly,predator){
  //     predator.x = oly.x;
  //     predator.y = oly.y;
  //   }

  //   //die/hitTest
  //   die(p1,p2){
  //     if(hitTest){

  //     }
  // }
}

class Oly extends Character {
  constructor(x, y, color, width, height, speed) {
    super(x, y, color, width, height, speed);
    this.bite = false;
    this.hasBunny = false;
    // this.drawImage = ctx.drawImage(olyImg, this.x, this.y, this.width, this.height)
  }

  //   drawImage(img) {
  //     ctx.drawImage(img)
  //     }

  //Oly's move mechanics. Follows arrow keystrokes
  // sayHi(){
  //     return "hi"
  // }

  // move(e) {
  //   console.log(`the movement was ${e.key}`);

  //   switch (e.key){
  //     case "ArrowUp":
  //     oly.y >=0 ? oly.y -= 5 * oly.speed : null
  //         break

  //     case "ArrowDown":
  //     oly.y += 5 * oly.speed;
  //         break

  //     case "ArrowLeft":
  //         oly.x -= 5 * oly.speed;
  //         break

  //     case "ArrowRight":
  //         oly.x += 5 * oly.speed;
  //         break

  // }
  //   console.log(oly);
  // }
  //Oly bite mechanic. Space bar click bites. If collision with deadBunny and bite ==> hasBunny.
  //   bite(e){
  //     if(e.key === " "){
  //         console.log(`it is ${this.bite} about oly's bite`)
  //         return this.bite = true;
  //         // killBunny(oly.aliveBunny)
  //         // append(oly.deadBunny)
  //     }
  //   }
}

class Bunny extends Character {
  constructor(x, y, img, width, height, speed) {
    super(x, y, img, width, height, speed);
    this.pickedUp = false;
    this.scored = false;
  }
  //Add score once dead bunny is dropped on stoop.
  scoreCount(bunny) {
    if (!bunny.alive && x === 73 && y === 76) {
      addScore();
    }
  }
}

// class David extends Character {
//     constructor(x, y, img, width, height, speed) {
//         super(x, y, img, width, height, speed);
// }
//     //Activates David hunt. Switches his img to Angry David.
//     getAngry(){
//         if(hunting){
//             img.src = "Angry David"
//             this.hunt(oly,david)
//         } else {
//             img.src = "nice David"
//         }
//     }
// }

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    //const floor = document.querySelector(".floor")
    //floor.style.backgroundImage = "url('../img/betterGrass.png')"; // Oly was rendering under the floor. Tried to get it so he would redner after floor img loaded. Didn't work. Will revist later.

    //create my game characters
    oly = new Oly(900, 620, "grey", 40, 40, 3);
    bunny1 = new Bunny(
      Math.floor(Math.random() * 900),
      Math.floor(Math.random() * 600),
      "white",
      20,
      20,
      0.3
    );
    bunny2 = new Bunny(
      Math.floor(Math.random() * 900),
      Math.floor(Math.random() * 600),
      "white",
      20,
      20,
      0.3
    );
    bunny3 = new Bunny(
      Math.floor(Math.random() * 900),
      Math.floor(Math.random() * 600),
      "white",
      20,
      20,
      0.3
    );
    coyote = new Character(
      Math.floor(Math.random() * 900),
      Math.floor(Math.random() * 600),
      "brown",
      55,
      55,
      0.7
    );
    stoop = new Character(920, 620, "black", 40, 80, 0);

    console.log(bunny1.constructor.name);
    // floor.onload = function(){
    // }

    //Render my Game Characters
    stoop.render();
    oly.render();
    bunny1.render();
    bunny2.render();
    bunny3.render();
    coyote.render();
    //console.log(oly, 1);
    //console.log(bunny1, 2);
    //run the game
    const runGame = setInterval(gameLoop, 120);
  })();
  document.addEventListener("keydown", movementHandler);
  document.addEventListener("keyup", moveHandler2);
});

//Oly Move Function Key Down
function movementHandler(e) {
  //console.log(`the movement was ${e.key}`, 3)
  //console.log(`OlyBite is ${oly.bite}`, 4);
  switch (e.key) {
    case "ArrowUp":
      oly.y >= 0 ? (oly.y -= 5 * oly.speed) : null;
      break;

    case "ArrowDown":
      oly.y += 5 * oly.speed;
      break;

    case "ArrowLeft":
      oly.x -= 5 * oly.speed;
      break;

    case "ArrowRight":
      oly.x += 5 * oly.speed;
      break;
    case " ":
      oly.bite = true;
  }
  //console.log(oly)
}

//Oly Seconday Move Function Key Up
function moveHandler2(e) {
  //console.log(`OlyBite is ${oly.bite}`, 5);
  switch (e.key) {
    case " ":
      oly.bite = false;
      oly.hasBunny = false;
      bunny1.pickedUp = false;
      bunny2.pickedUp = false;
      bunny3.pickedUp = false;
  }
}

//coyote will hunt you!
function coyoteHunt() {
  if (coyote.x < oly.x) {
    coyote.x += 5 * coyote.speed;
  } else {
    coyote.x -= 5 * coyote.speed;
  }

  if (coyote.y < oly.y) {
    coyote.y += 5 * coyote.speed;
  } else {
    coyote.y -= 5 * coyote.speed;
  }
}

//Bunny Move!
function bunnyMove(b) {
  if (b.alive) {
    if (
      b.x - oly.x <= 200 &&
      b.x - oly.x >= 0 &&
      b.y - oly.y <= 200 &&
      b.y - oly.y >= 0
    ) {
      b.x += 5 * b.speed;
      b.y += 5 * b.speed;
    } else if (
      oly.x - b.x <= 200 &&
      oly.x - b.x >= 0 &&
      oly.y - b.y <= 200 &&
      oly.y - b.y >= 0
    ) {
      b.x - 5 * b.speed;
      b.y -= 5 * b.speed;
    } else if (
      b.x - oly.x <= 200 &&
      b.x - oly.x >= 0 &&
      oly.y - b.y <= 200 &&
      oly.y - b.y >= 0
    ) {
      b.x += 5 * b.speed;
      b.y -= 5 * b.speed;
    } else if (
      oly.x - b.x <= 200 &&
      oly.x - b.x >= 0 &&
      b.y - oly.y <= 200 &&
      b.y - oly.y >= 0
    ) {
      b.x -= 5 * b.speed;
      b.y += 5 * b.speed;
    }
  }
}

//Game Loop
function gameLoop() {
  //clear baord every loop
  ctx.clearRect(0, 0, game.width, game.height);
  //render my characters every loop
  stoop.render();
  oly.render();
  bunny1.render();
  bunny2.render();
  bunny3.render();
  coyote.render();
  detectHit(oly, bunny1);
  detectHit(oly, bunny2);
  detectHit(oly, bunny3);
  detectHit(oly, coyote);
  detectHit(bunny1, stoop);
  detectHit(bunny2, stoop);
  detectHit(bunny3, stoop);
  coyoteHunt();
  bunnyMove(bunny1);
  bunnyMove(bunny2);
  bunnyMove(bunny3);
//   console.log(`bunny1x: ${bunny1.x} bunny1y: ${bunny1.y}`);
//   console.log(`Olyx: ${oly.x} olyy: ${oly.y}`);
}
//detect hit function
function detectHit(p1, p2) {
  let hitTest =
    p1.y + p1.height > p2.y &&
    p1.y < p2.y + p2.height &&
    p1.x + p1.width > p2.x &&
    p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

  if (hitTest) {
    console.log("Hit", 6);
    //check for bite
    if (oly.bite && p2.constructor.name === "Bunny" && oly.hasBunny === false) {
      console.log("Hit and Bit", 7);
      p2.color = "red";
      p2.alive = false;
      oly.hasBunny = true;
      p2.pickedUp = true;
      //attach bunnies to Oly
    } else if (p2.pickedUp === true) {
      p2.x = oly.x;
      p2.y = oly.y;
    } else if (p2 === coyote) {
      //stand in place for end game message
      console.log("The Coyote Got you!");
      oly.color = "red";
    } else if (p1.constructor.name === "Bunny" && p2 === stoop) {
      this.scored = true;
      console.log(this.scored);
    }
  } else {
  }
}

function addScore() {}

//random generate bunnies after scored
// function replaceBunny{
//     if()
// }
