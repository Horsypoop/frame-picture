function preload() {

}
function setup() {
  canvas = createCanvas(700, 500);
  canvas.position(420, 150);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";
}
  function draw() {
image(video, 72, 25, 555, 400);
  fill (0,0,255)
  stroke(0,0,255)
  rect(72,25,555,50)
  rect(72,425,555,50)
  rect(25,45,50,400)
  rect(625,45,50,400)
  fill (255,69,0)
  stroke(255,69,0)
  circle(50,50,80)
  circle(650,50,80)
  circle(50,450,80)
  circle(650,450,80)
}

  function take_snapshot(){
 save("mypicture.png")
} 