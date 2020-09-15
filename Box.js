class Box {
    
    constructor(x,y){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,y,0.001,100,options);
        this.width = 0.001;
        this.height = 100;

        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,170,30);
        fill("red");
        pop();
    }

};