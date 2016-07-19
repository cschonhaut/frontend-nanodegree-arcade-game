// Enemies our player must avoid
var Enemy = function(loc) {
    // Variables applied to each of our instances go here, we've provided one for you to get started
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //var obj = Object.create(Enemy.prototype);
    //obj.loc = loc;
    //return obj;
    this.x = 202;
    this.y = 230;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
};

// CS - this is creating location code that will be the same for all instances of Enemy
Enemy.prototype.move = function(){
    this.loc++;
    //this.x++; this is what James wrote - why
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// CS - i think i need to use this somewhere but idk where
//     this.x = x;
//     this.y = y;

// Player class with image file path & location for when the game 1st opens
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.width = 101;
    this.height = 171;
    this.x = 200;
    this.y = 400;
};

// This class requires an update(), render() and a handleInput() method.
Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width,this.height);
};

Player.prototype.handleInput = function(keyPressed) {
switch(keyPressed) {
    case 'left':
    console.log('left pressed!');
    if(this.x<=0){
        console.log("boundary reached");
        } else {
            this.x += -100;
        }
    break;

    case 'up':
    console.log('up pressed!');
    if (this.y<=-10){
        console.log("boundary reached");
        } else {
            this.y += -82;
        }
    break;

    case 'right':
    console.log('right pressed!');
    if (this.x>=400){
        console.log("boundary reached");
        } else {
            this.x += 100;
    }
    break;

    case 'down':
    console.log('down pressed!');
    if (this.y>=400){
        console.log("boundary reached");
    } else {
        this.y += 82;
    }
    break;

    default:
    console.log('no key pressed!');
    break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// This listens for key presses and sends the keys to your Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
