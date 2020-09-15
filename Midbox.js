class Midbox {
    
    constructor(x,y){
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x,y,100,0.001,options);
        this.width = 100;
        this.height = 0.001;

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