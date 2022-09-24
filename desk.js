img="";
status="";
object=[];

function preload(){
    img= loadImage("desk.jpeg");
}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(550,200);
    ObjectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="detecting";
}

function modelLoaded(){
    console.log("loaded")
    status="true";
    ObjectDetector.detect(img,gotResult);
}

function draw(){
if(status!==""){
    document.getElementById("status").innerHTML="detected";
    for(i=0;i<object.length;i++){
        fill("red");
        noFill();
        stroke("red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        text(object[i].label,object[i].x,object[i].y);
     }
    }
}
function gotResult(error,result){
if (error){
    console.log(error);

}
else{
    console.log(result);
    object=result;
}
}