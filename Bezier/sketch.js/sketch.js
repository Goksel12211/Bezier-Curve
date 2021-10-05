
var BezierScreenSizeX=1400;
var BezierScreenSizeY=800;

var PointX = [];
var PointY = [];

let sonucx=[];
let sonucy=[];


function setup() {
  createCanvas(BezierScreenSizeX,BezierScreenSizeY);
}


function draw() {
  drawPoints();
  processBezier();
 
for(let i =0;i<sonucx.length;i++){
  noStroke();
  fill(255);
ellipse(sonucx[i],sonucy[i],20);
}
fill(0);

}


function mouseClicked(){
PointX.push(mouseX);
PointY.push(mouseY  );
}


function drawPoints(){
    background(0);
  fill(120,120,255);
  for(var i=0;i<PointX.length;i++){
  ellipse(PointX[i],PointY[i],20);
  }
}



function processBezier(){

var n = PointX.length

for(let i=0;i<1001;i++){
    sonucx[i]=0;
    sonucy[i]=0;
}

  let a=0;
  for(let t=0;t<1001;t=t+1){
        a=t/1000.0;

 for(let i=0;i<n;i++){
        c=kombinasyon(n,i)  * PointX[i] ;
        c=karealma(a,n,i)  * c ;
                sonucx[t]=sonucx[t]+c;


                b=kombinasyon(n,i)  * PointY[i] ;
     b*=karealma(a,n,i);
                sonucy[t]=sonucy[t]+b;

  }

}

}

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




