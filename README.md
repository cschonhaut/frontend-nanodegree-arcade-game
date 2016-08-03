frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

#How to run game
1. Navigate to GitHub repository to get the files
2. Open index.html in your browser of choice
3. No special installations are required, simply a browser and a text editor if interested in looking at code.

#How to play game
1. Use your up, down, left, & right keys to move your player around the board
2. Avoid the bugs; if you are hit by a bug you lose and will start over
3. The goal of the game is to get across the grass, to the water, without hitting any of the bugs
4. If you reach the water without hitting any bugs, you win!

#How the game is built

##Enemy Function
- This determines the image of the bugs, as well as the location & speed of the bugs. The bugs are objects that the player must avoid
- This is a class definition, which is assigning a function object to var Enemy. At this point in the code we have only defined enemy, we have not invoked it.
- On the right side of the equation is a constructor function
- Once the function is invoked the code will run, thereby encapsulating the properties via dot notation

###Math.floor
- Rounds to a whole number

###Math.random
- Generates a random number that then multiplies by 8
- This is what gives each bug its own speed
- The "+1" ensures that no negative speeds are generated

###Parameter: dt
- A time delta between ticks, all movements are multiplied by this
- This ensures that the speed is consistent across all devices/processors

###Enemy.prototype.update
- This function simply calls the move function

###Enemy.prototype.move
- Bugs start off the canvas so that it appears that they roll in smoothly
- Array "y_positions" ensures the bugs get placed in random rows after each loop
- Pop assists in this functionality, by searching the numbers in the array and then extracting the last one, after the list has been shuffled

###Enemy.prototype.render
- This is what actually draws each enemy in its new location

###Enemy.prototype.checkCollisions
- Credit to MDN (https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection) for base code, customized for my purposes
- This function sets bounding boxes around the player as well as all of the enemy objects. If those bounding boxes overlap at all, a collision is detected.
- Once the collision is detected, resetPlayer is called
- Simultaneously, an alert will appear

##Player function

###Player.prototype.update
- This has code that resets the player back to the grass if it reaches the water (wins)

###Player.prototype.resetPlayer
- This is called if the player & a bug collide.
- It resets the player back to the grass after the collision (loses)

###Player.prototype.render
- This is what actually draws the player in its new location

###Player.prototype.handleInput
- This function determines the functionality of each of the keys (left, right, up & down)
- There are console.logs to help the developer easily see coordinates and what is working and what is not. Console.logs can be removed if needed, they will not change the functionality of the keys
- At the end of the code, document.addEventListener function is used. This is what actually detects the key presses and sends the keys to the handleInput method.

##Additional functionality
- At this time no additional functionality has been added beyond the bare minimum of the project requirements. In the future, if time allows, additional functionality may be added. If this occurs, the ReadMe will be updated accordingly.


