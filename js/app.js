// Enemies our player must avoid
// CS - this is a class definition, which is assigning a function object to var Enemy
// CS - on the right side of the equation is a constructor function
// CS - we have only defined it here, defining won't do anything, it only creates the referenced Enemy
// CS - the properties haven't been encapsulated yet, b/c the statements haven't been executed
// CS - the constructor function *itself* must be INVOKED
// CS - only when the function is invoked does the code run, thereby encapsulating the properties via dot notation
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here, we've provided one for you to get started
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //var obj = Object.create(Enemy.prototype);
    //obj.loc = loc;
    //return obj;
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 8) + 1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks, multiply any movements by this
// New array "y_positions" is so that the bugs get random rows during each loop
Enemy.prototype.update = function(dt) {
    this.move();
};

// CS - this is creating location code that will be the same for all instances of Enemy
Enemy.prototype.move = function(dt){
    this.x += this.speed;
    if (this.x == 500) {
        this.x = -100;
        var y_positions = [60, 145, 230];
            y_positions.sort(function(){return 0.5 - Math.random();});
        this.y = parseInt(y_positions.pop());
        console.log(y_positions);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class with image file path & location for when the game 1st opens
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.width = 101;
    this.height = 171;
    // Remember we want to increment the position, by adding a tiny amount to its current position with each update. And the update function is called every animation frame. So we don't have to do much at all except describe this process of incrementing the x value.
    this.x = 200;
    this.y = 400;
};

// CS - If the player reaches the water, reset to grass
Player.prototype.update = function(dt) {
    if (this.y == -10){
        this.y = 400
    }
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
    console.log (this.x);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var enemy1 = new Enemy(0, 60);
var enemy2 = new Enemy(0, 145);
var enemy3 = new Enemy(200, 230);
var enemy4 = new Enemy(0, 230);
var allEnemies = [enemy1, enemy2, enemy3, enemy4];
//enemy1.move();
//enemy2.move();
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
