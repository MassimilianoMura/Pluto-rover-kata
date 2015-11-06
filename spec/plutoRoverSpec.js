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


});