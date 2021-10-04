
var BezierScreenSizeX=1400;
var BezierScreenSizeY=800;

var Points = [[]];


function fact( sayi){
  let fakt=1,i;
  for(i=1;i<=sayi;i++){
      fakt*=i;
  }
  return fakt;
}



function kombinasyon( sayi1, sayi2){
  sayi1=sayi1-1;
  let komb=fact(sayi1)/(fact(sayi1-sayi2)*fact(sayi2));

if(sayi2==0)
  return 1;

  return komb;

}


function karealma( t, n, i){
n=n-1;
let a=pow(t,i);

let b=pow((1-t),n-i);


return a*b;

}



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
yeniX=[]
yeniY=[]
function SolveBezier(){
    for(var i=1;i<Points.length-3;i=i+2){
          for(var t=0;t<1;t=t+0.01){

      yeniX.push(Points[i] * t  + Points[i+2] * (1-t ));
      yeniY.push(Points[i+1] * t  + Points[i+3] * (1-t ));

          }
      
    }
}



