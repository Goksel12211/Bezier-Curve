
var ScreenSizeX=1400;
var ScreenSizeY=800;

var selectedPointX = [];
var selectedPointY = [];

let bezierX=[];
let bezierY=[];


function setup() {
  createCanvas(ScreenSizeX,ScreenSizeY);
}


function draw() {
  drawClickedPoints();
  processBezier();
}



function mouseClicked(){
selectedPointX.push(mouseX);
selectedPointY.push(mouseY  );
}


function drawClickedPoints(){
    background(0);
  fill(120,120,255);
  for(var i=0;i<selectedPointX.length;i++){
  ellipse(selectedPointX[i],selectedPointY[i],20);
  }
}



function processBezier(){
  setNullBezierPoints();
  calculateAllBezierNodes();
  drawBezierPoints();
}
function setNullBezierPoints(){
  for(let i=0;i<1001;i++){
    bezierX[i]=0;
    bezierY[i]=0;
} 
}

function calculateAllBezierNodes(){
  var n = selectedPointX.length;
  for(let bezierPointIndex=0;bezierPointIndex<1001;bezierPointIndex=bezierPointIndex+1){
    a=bezierPointIndex/1000.0;
    calculateCurrentBezierNode(n,a,bezierPointIndex);
}
}

function calculateCurrentBezierNode(n,a,bezierPointIndex){
  for(let i=0;i<selectedPointX.length;i++){
    c=getCombination(n,i)  * selectedPointX[i] ;
    c=getSquare(a,n,i)  * c ;
    bezierX[bezierPointIndex]=bezierX[bezierPointIndex]+c;
    
    b=getCombination(n,i)  * selectedPointY[i] ;
    b*=getSquare(a,n,i);
    bezierY[bezierPointIndex]=bezierY[bezierPointIndex]+b;
}
}


function drawBezierPoints(){
  for(let i =0;i<bezierY.length;i++){
    noStroke();
    fill(255);
  ellipse(bezierX[i],bezierY[i],5);
  }
}


function getFactorial( sayi){
  let fakt=1,i;
  for(i=1;i<=sayi;i++){
      fakt*=i;
  }
  return fakt;
}

function getCombination( nunber1, nunber2){
  nunber1=nunber1-1;
  let comb=getFactorial(nunber1)/(getFactorial(nunber1-nunber2)*getFactorial(nunber2));
  if(nunber1==0)  return 1;
  return comb;
}

function getSquare( t, n, i){
n=n-1;
let a=pow(t,i);
let b=pow((1-t),n-i);
return a*b;
}




