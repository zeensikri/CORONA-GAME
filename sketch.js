var sanitizer, sanitizer_img, santizer_ani;
var coronavirus, coronavirus_img;
var background1;
var spraying_sound;

function preload() {
    sanitizer_img = loadImage("ssi.png");
    santizer_ani = loadImage("ss.png")
    coronavirus_img = loadImage("virus.png");
    background1 = loadImage("bk.jpg");
    spraying_sound = loadSound("spraying.mp3")
}


function setup(){
    createCanvas(596,338);
    sanitizer = createSprite(50,50);
    sanitizer.addImage(sanitizer_img);
    sanitizer.scale = 0.2;
}

function draw(){
   background(background1);
    sanitizer.x = mouseX;
    sanitizer.y = mouseY;
    sanitizer.setCollider("circle",0,0,150);
    respawn();

    

    if (mouseWentDown("leftButton") && sanitizer.isTouching(coronavirus)){
        sanitizer.addImage(santizer_ani);
        spraying_sound.play();
    }

    if (mouseWentUp("leftButton") ){
        sanitizer.addImage(sanitizer_img);
    }

    if (mousePressedOver(coronavirus)){
        coronavirus.destroy();
        
    }
    




    //sanitizer.debug = true;
    drawSprites();
}

function respawn(){
    if (frameCount % 100 === 0){
        coronavirus = createSprite(100,150);
        coronavirus.x = random(20,550);
        coronavirus.y = random(20,320);
        coronavirus.addImage(coronavirus_img);
        coronavirus.scale = 0.04;
        coronavirus.lifetime = 200;
    }
}









