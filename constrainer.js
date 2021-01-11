class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 300
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }



    display(){    
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        stroke(255,255,255);
        //strokeWeight(7);
        line(pointA.x-25, pointA.y, pointB.x, pointB.y);   
    }   
}
