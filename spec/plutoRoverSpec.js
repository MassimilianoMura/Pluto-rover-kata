describe('PlutoRover', function () {

  var rover;
  beforeEach(function() {
    rover = new PlutoRover();
  });

  describe('When you initialize a Pluto Rover', function() {

    it('has a X position equal to 0', function() {
      expect(rover.x).toEqual(0);
    });

    it('has a Y position equal to 0', function() {
      expect(rover.y).toEqual(0);
    });

    it('has a North heading', function() {
      expect(rover.heading).toEqual('N');
    });

    it('can communicate its position and heading', function() {
      expect(rover.tellPosition()).toEqual('The rover\'s position is now (0,0), with N heading');
    });

    it('has a list of direction available', function() {
      expect(rover.directions.length).toEqual(4);
    });

  });


  describe('Pluto Rover can move', function() {

    it('can increase its Y position', function() {
      rover.increaseY();
      expect(rover.y).toEqual(1);
    });

    it('can decrease its Y position', function() {
      rover.increaseY();
      rover.increaseY();
      rover.decreaseY();
      expect(rover.y).toEqual(1);
    });

    it('can increase its X position', function() {
      rover.increaseX();
      expect(rover.x).toEqual(1);
    });

    it('can increase its Y position', function() {
      rover.increaseX();
      rover.decreaseX();
      expect(rover.x).toEqual(0);
    });

  });

  describe('Pluto Rover can move after received command to move forward and backward', function() {

    it('can move forward', function() {
      rover.moveRover('F');
      expect(rover.y).toEqual(1);
    });

    it('can move backward', function() {
      rover.moveRover('F');
      rover.moveRover('B');
      expect(rover.y).toEqual(0);
    });

    it('can take a list of command', function() {
      rover.moveRover('FFFFB');
      expect(rover.y).toEqual(3);
    });

    it('can skip a wrong command', function() {
      rover.moveRover('FFFrFBF');
      expect(rover.y).toEqual(4);
    });

    it('can move and turn with the same list of commands', function() {
      rover.moveRover('FFFFFRFFFLFFBRR');
      expect(rover.y).toEqual(6);
      expect(rover.x).toEqual(3);
      expect(rover.heading).toEqual('S');
    });

  });


  describe('Pluto Rover turn and change its heading', function() {

    it('can turn right', function() {
      rover.turn('R');
      expect(rover.heading).toEqual('E');
    });

    it('can turn left', function() {
      rover.turn('L');
      expect(rover.heading).toEqual('W');
    });

  });


});

