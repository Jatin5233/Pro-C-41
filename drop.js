class Drop{
    constructor(x,y){
        var options = {
         isStatic:false,
            friction:0.1,
            restitution:0.5
        }
        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        this.Visiblity=255;
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    var angle = this.body.angle;
      
        fill(0,0,255);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,30);
       
    }
      update(){
          if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-10,0)});
          }
          
      }
  
    
}