var PlutoRover = function () {
  this.x=0;
  this.y=0;
  this.heading='N';
  this.directions = ['N','E','S','W']
}

PlutoRover.prototype.tellPosition = function() {
  return('The rover\'s position is now (' + this.x + ',' + this.y + '), with ' + this.heading + ' heading');
};

PlutoRover.prototype.increaseY = function() {
  this.y++;
};

PlutoRover.prototype.decreaseY = function() {
  this.y--;
};

PlutoRover.prototype.increaseX = function() {
  this.x++;
};

PlutoRover.prototype.decreaseX = function() {
  this.x--;
};

PlutoRover.prototype.moveRover = function(commands) {
  for (i=0; i<commands.length; i++)
    if (commands[i] === 'F' ) {
      this.increaseY();
    } else if (commands[i] === 'B') {
      this.decreaseY();
    } else {
      console.log('Wrong input');
    }
};

PlutoRover.prototype.turn = function(command) {
  var currentHeading = this.directions.indexOf(this.heading);

  if (command === 'R') {
    this.heading = this.directions[(currentHeading + 1) % 4];
  } else if (command === 'L') {
    this.heading = this.directions[(currentHeading + 4 - 1) % 4];
  } else {
    console.log('Wrong turn input');
  }

};




