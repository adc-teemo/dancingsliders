var slider = [];

var angle = 0;

function setup() {
  createCanvas(200,200);
  textSize(15);
 
  for (var i = 0; i<100; i++){
  slider[i] = createSlider(0,255,50);
  

 
}
}

function draw() {
  var chuga = 0;
  for(var i =0; i<slider.length; i++){
    var x=map(sin(angle+chuga),-1,1,0,255);
    slider[i].value(x);
    chuga +=1
  }
  angle+=0.1;
  
  const r = slider[0].value();
  const g = slider[1].value();
  const b = slider[2].value();
  
  background(r, g, b);
  
  text('red', slider[0].x * 2 + slider[0].width, 35);
  text('green', slider[1].x * 2 + slider[1].width, 65);
  text('blue', slider[2].x * 2 + slider[2].width, 95);
}