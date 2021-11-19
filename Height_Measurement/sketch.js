let video;
let poseNet;
let pose;
let eyeDist;
let ratio;
let wristDist;
let heightMeasured;
let soundClassifier;
let said;


function preload(){
  let options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w',options);
}


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
  soundClassifier.classify(gotResults);
}


//for soundClassifier
function gotResults(error,results){
  if (error){
    console.log('something went wrong');
    console.error(error);
  }
  
  said = results[0].label;
  console.log(said);
}


//for poseNet
function gotPoses(poses){
  //console.log(poses);
  if (poses.length>0){
    pose = poses[0].pose;
  }
}

function modelLoaded(){
  console.log("poseNet loaded");
}


//showing it on webpage
function draw() {
  //video setting
  background(220);
  translate(video.width,0);
  scale(-1,1); 
  image(video,0,0, video.width, video.height);
  //image(video,0,0);
  
  
  //draw body
  if(pose){
    fill(255,0,0);
    strokeWeight(10);
    ellipse(pose.leftWrist.x+20, pose.leftWrist.y,25);
    ellipse(pose.rightWrist.x-20, pose.rightWrist.y,25);
    line(pose.leftWrist.x+20, pose.leftWrist.y, pose.rightWrist.x-20, pose.rightWrist.y)
    
    //measurement
    eyeDist = dist(pose.leftEye.x, pose.leftEye.y, pose.rightEye.x, pose.rightEye.y);
    ratio = 6.3/eyeDist;
    wristDist= dist(pose.leftWrist.x, pose.leftWrist.y, pose.rightWrist.x, pose.rightWrist.y);
    heightMeasured= wristDist*ratio +40;
    //console.log(heightMeasured);   
   if(said){
     //console.log('ok');
     printHeight();    
   }   
  }  
}

function printHeight(){
  
  if (said == "stop"){
        //print out height
      select('#testHeight').html(heightMeasured+"cm");
      noLoop();
     }  
}