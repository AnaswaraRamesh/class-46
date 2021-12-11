class Horizontalstick{
    constructor(x,y,w,h,angle){
        var options= {
            'friction':1,
            'density': 1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;

        if(this.width===200){
            this.image = loadImage("images/stick1.png");
        }
        
        Matter.Body.setAngle(this.body,angle)
    }
    display(){

        if(keyIsDown(RIGHT_ARROW)){
           
            Matter.Body.rotate(this.body,0.01);
            
          } 
          if(keyIsDown(LEFT_ARROW)){
        Matter.Body.rotate(this.body, -0.01);

          }
          console.log("bodyAngle"+this.body.angle);
         

        var angle = this.body.angle;
        console.log("angle"+angle);
        push();
       translate(this.body.position.x, this.body.position.y)
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0,this.width, this.height)
       pop(); 


       
    
    }
}