var img,
    particules = [],
    w = 640,
    h = 400;

function preload() {
  img = loadImage(`https://picsum.photos/${w}/${h}`);
}

function setup() {
  createCanvas(w, h);
  for(let i = 0; i < 500; i++) {
    particules.push(new Particule(random(0, width), random(0, height)));
  }
}

function draw() {
  // var imgPix = image.pixels;
  // for(let i = 0; i < imgPix.lenth; i += 4) {
    
  // }
  for(let i = 0; i < particules.length; i++) {
    var particuleColor = img.get(particules[i].x, particules[i].y);
    particules[i].updateColor(particuleColor);
    particules[i].show();
    particules[i].move();
  }
}

class Particule {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(0);
  }
  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    if(this.x < 0) {
      this.x += 1;
    } else if(this.x > width) {
      this.x -= 1;
    }
    if(this.y < 0) {
      this.y += 1;
    } else if(this.y > height) {
      this.y -= 1;
    }
  }
  show() {
    noStroke();
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 4);
  }
  updateColor(clr) {
    this.color = clr;
    this.color[3] = 10;
  }
}