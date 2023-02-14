var img = ""
var noseX = 0
var noseY = 0
var marioX = 325
var marioY = 325

var mariodie , world_start , kick ,  jump , gameover , coin2

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mariodie = loadSound ("mariodie.wav")
	kick = loadSound ("kick.wav")
	jump = loadSound("jump.wav")
	gameover = loadSound("gameover.wav")
	coin2 = loadSound("coin.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);

	video = createCapture(VIDEO)
	video.parent("console")
	video.size(800, 400)

	posenet = ml5.poseNet(video, modelLoaded)
	posenet.on("pose",gotPoses)
}

function modelLoaded(){
	console.log("modelo carregado")
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	}
}

function draw() {
	game()
}






