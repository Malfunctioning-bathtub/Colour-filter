let img;

function preload() {
  img = loadImage("https://picsum.photos/200/300");
}

function setup() {
  createCanvas(img.width, img.height);
  noStroke();

  img.loadPixels(); // Load the image pixels for direct manipulation

  // Loop through each pixel
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let colour = color(img.get(x, y));
      colorMode(HSB);
      let h = hue(colour)
      let s = saturation(colour);
      let b = brightness(colour)
      fill(225, 255, b);
      rect(x,y,1,1)
      colorMode(RGB);
    }
  }
}

function draw() {
  // No need to do anything here
}
