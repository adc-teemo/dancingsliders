var slider = [];

var angle = 0;

function setup() {
  createCanvas(200,200);
  textSize(15);
  
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  for (var i = 0; i<10; i++){
  slider[i] = createSlider(0,255,50);
  }
}
function draw() {
  var chuga = 0;

  
  for (var i = 0; i<10; i++){
  var x = map(sin(angle+chuga),-1,1,0,255);
  slider[i].value(x);
  chuga += 0.1;
  }
  angle += 0.1;
  
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
}