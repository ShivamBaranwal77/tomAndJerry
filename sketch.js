var tom, jerry, tomAnimation1, tomAnimation2;
var jerry, jerryAnimation1, jerryAnimation2;
var backdrop;

function preload() {
    tomAnimation1 = loadAnimation("tomOne.png");
    tomAnimation2 = loadAnimation("tomTwo.png","tomThree.png");
    tomAnimation3 = loadAnimation("tomFour.png");

    jerryAnimation1 = loadAnimation("jerryOne.png");
    jerryAnimation2 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryAnimation3 = loadAnimation("jerryFour.png");
    
    backdrop = loadImage("garden.png");
}

function setup(){
    createCanvas(800,700);
    tom = createSprite(650,600,20,20);
    tom.addAnimation("tomImg",tomAnimation1);
    tom.addAnimation("hii",tomAnimation2);
    tom.addAnimation("hiii",tomAnimation3);
    tom.scale = 0.1;

    jerry = createSprite(50,600,20,20);
    jerry.addAnimation("jerryImg",jerryAnimation1);
    jerry.addAnimation("jerryAni",jerryAnimation2);
    jerry.addAnimation("je",jerryAnimation3);
    jerry.scale=0.06;
}

function draw() {

    background(backdrop);
    keyPressed();

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        text(mouseX+','+mouseY,10,45);
        tom.addAnimation("tomImg",tomAnimation1);
        tom.changeAnimation("hiii",tomAnimation3)
        jerry.addAnimation("jerryImg",jerryAnimation1);
        jerry.changeAnimation("je",jerryAnimation3);
        tom.velocityX = 0;
    }
    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomImg",tomAnimation1);
        tom.changeAnimation("hii",tomAnimation2);
        jerry.addAnimation("jerryImg",jerryAnimation1);
        jerry.changeAnimation("jerryAni",jerryAnimation2);
    }
}