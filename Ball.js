class Ball {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
           'density':1.0
      }
      this.body = Bodies.circle(x,y,25,options);
      World.add(world, this.body);
    }
    display(){
      fill("white");
      ellipse(this.body.position.x, this.body.position.y, 50, 50);
    }
  };