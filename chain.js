class chain {
    constructor(bodyA, bodyB) {
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        //this.stiffness=stiffness;
        //this.length=length;
        //this.bodyA=bodyA;
        //this.bodyB=bodyB;

        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }


}