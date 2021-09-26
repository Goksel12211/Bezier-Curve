
var BezierScreenSizeX=1400;
var BezierScreenSizeY=800;

var Points = [[]];


function setup() {
  createCanvas(BezierScreenSizeX,BezierScreenSizeY);
}

function draw() {
  drawPoints();
  SolveBezier();
}


function mouseClicked(){
Points.push(mouseX,mouseY);
}


function drawPoints(){
    background(0);
  fill(120,120,255);
  for(var i=1;i<Points.length-1;i++){
  ellipse(Points[i],Points[i+1],20);
  i++;
  }
}

function SolveBezier(){
    for(var i=1;i<Points.length-3;i=i+2){
          for(var t=0;t<1;t=t+0.01){

      yeniX=Points[i] * t  + Points[i+2] * (1-t );
      yeniY=Points[i+1] * t  + Points[i+3] * (1-t );
       ellipse(yeniX,yeniY,5);

          }
      
    }
}



