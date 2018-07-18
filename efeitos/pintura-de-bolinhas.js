function setup() {
    createCanvas(500,500)
    background(0);
    
  }
  
  function draw() {
   var spot = {
     x:random(0,width),
     y:random(0,height)       
   }
  
   var color = {
     r: random(100,255),
     g:0,
     b: random(100,190)
   }
   var size = random(25,50);
   
   
    fill(color.r,color.g,color.b);
    noStroke();
    ellipse(spot.x,spot.y,size,size)
  }