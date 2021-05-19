class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smokeImage=loadImage("smoke.png");
    this.trajectary=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y];
    this.trajectary.push(position);
    }
     for(var i=0;i<this.trajectary.length;i++)
{
  image (this.smokeImage,this.trajectary[i][0],this.trajectary[i][1]);
}

  }
}
