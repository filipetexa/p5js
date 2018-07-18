var s;
var scl = 20;
var food;
var vertical = true;
var horizontal = true;

function setup() {
  createCanvas(400,400);
  s = new Snake();

  // gera o delay que da o efeito robotico a snake
  frameRate(5);

  food = pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  return food
}


function draw() {
  background(51);
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    food = pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {

  if (keyCode === UP_ARROW && vertical) {
    s.dir(0, -1);
    [vertical, horizontal] = [false, true]
  } else if (keyCode === DOWN_ARROW && vertical) {
    s.dir(0, 1);
    [vertical, horizontal] = [false, true]
  } else if (keyCode === RIGHT_ARROW && horizontal) {
    s.dir(1, 0);
    [vertical, horizontal] = [true, false]
  } else if (keyCode === LEFT_ARROW && horizontal) {
    s.dir(-1, 0);
    [vertical, horizontal] = [true, false]
  }
}

