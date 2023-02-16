function preload(){

}

function setup(){
canvas = createCanvas(640,640);
canvas.position(200,200);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video, 200, 200, 300, 300);
fill(150,128,259)
stroke(0,128,0)
circle(50,50,100,100);
circle(50,590,100,100);
circle(590,50,100,100);
circle(590,590,100,100);
rect(95,35,450,30);
rect(95,580,450,30);
rect(30,100,40,440);
rect(570,100,40,440);
}