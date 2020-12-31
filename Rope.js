class Rope{
    constructor(body1, body2,offsetx){
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:offsetx,y:0}
        }
        this.offsetx=offsetx
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
      fly(){
        this.rope.bodyA=null; 
      }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push()
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x+this.offsetx, pointB.y);
        pop()
    }
    
}