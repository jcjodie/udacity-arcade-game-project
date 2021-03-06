 // Enemies our player must avoid
 var Enemy = function(x, y) {
     // Variables applied to each of our instances go here,
     // we've provided one for you to get started

     // The image/sprite for our enemies, this uses
     // a helper we've provided to easily load images
     this.sprite = 'images/enemy-bug.png';
     this.x = x;
     this.y = y;
     this.speed = Math.floor(Math.random() * 100);
 };

 // Update the enemy's position, required method for game
 // Parameter: dt, a time delta between ticks
 Enemy.prototype.update = function(dt) {
     // You should multiply any movement by the dt parameter
     // which will ensure the game runs at the same speed for
     // all computers.
     this.x = this.x + this.speed * dt;
     if (this.x > 505) {
         this.x = 0;
     }
 };

 // Draw the enemy on the screen, required method for game
 Enemy.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

 // Now write your own player class
 // This class requires an update(), render() and
 // a handleInput() method.
 var Player = function(x, y) {
     this.x = 200;
     this.y = 325;
     this.sprite = 'images/char-boy.png';
 };
 //Updates the player's position
 Player.prototype.update = function(dt) {
     this.x = this.x;
     this.y = this.y;
     if (this.x < 0) {
         this.x = 0;
     } else if (this.x > 400) {
         this.x = 400;
     } else if (this.y < -10) {
         this.y = -10;
         alert('You WON!!');
         player.reset();
     } else if (this.y > 420) {
         this.y = 420;
     }

 };
 //Draw the player on the screen
 Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //refer to player loc x and player loc y
 };
 //Defines input keys with movement
 Player.prototype.handleInput = function(key) {
     if (key === "left") {
         this.x = this.x - 101;
     } else if (key === "right") {
         this.x = this.x + 101;
     } else if (key === "up") {
         this.y = this.y - 83;
     } else if (key === "down") {
         this.y = this.y + 83;
     }
 };
 //Checks for collisions between player and enemies
 function checkCollisions() {
     for (var i = 0; i < allEnemies.length; i++) {
         if ((allEnemies[i].x) <= player.x + 75 &&
             (allEnemies[i].x + 75) >= (player.x) &&
             (allEnemies[i].y) <= player.y + 75 &&
             (allEnemies[i].y + 75) >= (player.y)) {
             alert('OUCH! Try Again');
             player.reset();
         }
     }
 }
 //Moves player back to starting position
 Player.prototype.reset = function() {
     this.x = 200;
     this.y = 325;
 };


 // Now instantiate your objects.
 // Place all enemy objects in an array called allEnemies
 // Place the player object in a variable called player

 var allEnemies = [
     new Enemy(0, 65, 100),
     new Enemy(0, 150, 100),
     new Enemy(0, 235, 100)
 ];

 var player = new Player();

 // This listens for key presses and sends the keys to your
 // Player.handleInput() method. You don't need to modify this.
 document.addEventListener('keyup', function(e) {
     var allowedKeys = {
         37: 'left',
         38: 'up',
         39: 'right',
         40: 'down'
     };

     player.handleInput(allowedKeys[e.keyCode]);
 });