function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('pink');
    
    stroke('black');
    fill('black');
    
    if(mouseIsPressed){
    rect(mouseX,20,30,50);
  }
  }