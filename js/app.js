'use strict';
// Enemies our player must avoid
// This is a class definition, which is assigning a function object to var Enemy
// On the right side of the equation is a constructor function
// Once the function is invoked the code will run, thereby encapsulating the properties via dot notation
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 8 ) + 1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks, multiply any movements by this
Enemy.prototype.update = function(dt) {
    this.move();
    this.checkCollisions();
};

// Array "y_positions" is so that the bugs get placed in random rows after each loop
Enemy.prototype.move = function(dt){
    this.x += this.speed;
    if (this.x == 500) {
        this.x = -100;
        var y_positions = [60, 145, 230];
            y_positions.sort(function(){return 0.5 - Math.random();});
        this.y = parseInt(y_positions.pop());
\    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Checks for collisions and if one is detected, resetPlayer & resetBug are run
Enemy.prototype.checkCollisions = function() {
    var bugBoundingBox = {width: 70, height: 60};
    var playerBoundingBox = {width: 60, height: 70};

    if (this.x < player.x + playerBoundingBox.width &&
        this.x + bugBoundingBox.width > player.x &&
        this.y < player.y + playerBoundingBox.height &&
        bugBoundingBox.height + this.y > player.y) {
            console.log('collision detected!');
                 player.resetPlayer();
                 alert("You lose. Click 'OK' to play again.");

    }
};

// Player class with image file path & location for when the game 1st opens
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.width = 101;
    this.height = 171;
    this.x = 200;
    this.y = 400;
};

// If the player reaches the water, reset back to grass
Player.prototype.update = function(dt) {
    if (this.y == -10){
        this.y = 400
        alert("You win! Click 'OK' to play again.");
    }
};

// Resets the player location. Called when the player & enemy collide.
Player.prototype.resetPlayer = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width,this.height);
};

Player.prototype.handleInput = function(keyPressed) {
switch(keyPressed) {
    case 'left':
    if(this.x<=0){
        } else {
            this.x += -100;
        }
    break;

    case 'up':
    if (this.y<=-10){
        } else {
            this.y += -82;
        }
    break;

    case 'right':
    if (this.x>=400){
        } else {
            this.x += 100;
    }
    break;

    case 'down':
    if (this.y>=400){
    } else {
        this.y += 82;
    }
    break;

    default:
    break;
    }
};

// Instantiated objects
var player = new Player();
var enemy1 = new Enemy(0, 60);
var enemy2 = new Enemy(0, 145);
var enemy3 = new Enemy(200, 230);
var enemy4 = new Enemy(0, 230);
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// This listens for key presses and sends the keys to your Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
