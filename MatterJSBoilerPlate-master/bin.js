class Bin{
    constructor(x,y,width,height){
        var options
        {
            isStatic  = true
        }
        this.bodyy = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyy);

        this.bodyyl = Bodies.rectangle((x-(width/2)),(y-(height*2)),height,width,options);
        World.add(world,this.bodyyl);

        this.bodyyr = Bodies.rectangle((x+(width/2)),(y-(height*2)),height,width,options);
        World.add(world,this.bodyyr);

       
    }
    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.height,this.width,this.options);
        rect((this.body.position.x-(width/2)),(this.body.position.y-(height*2)),(this.height),(this.width),(this.options));
        rect((this.body.position.x+(width/2)),(this.body.position.y-(height*2)),(this.height),(this.width),(this.options));



    }






}