var PlutoRover = function () {
  this.x=0;
  this.y=0;
  this.heading='N';
}

PlutoRover.prototype.tellPosition = function() {
  return('The rover\'s position is now (' + this.x + ',' + this.y + '), with ' + this.heading + ' heading');
};
