var img = "";

function setup(){
    canvas= createCanvas(600, 400);
    canvas.position(360, 190);

}

function preload(){
    img = loadImage("bnd.jpg");
}

function draw(){
    image(img, 0, 0, 600, 400);

    fill("black");
    text ("Leehan", 65, 175);
    noFill();
    stroke ("white");
    rect(40, 10, 75, 350);

    fill("pink");
    text ("Riwoo", 125, 210);
    noFill();
    stroke ("pink");
    rect(115, 10, 100, 350 );

    fill("yellow");
    text ("Jaehyun", 240, 200);
    noFill();
    stroke ("yellow");
    rect(215, 10, 100 , 350);

    fill("purple");
    text ("Sungho", 325, 200);
    noFill();
    stroke ("purple");
    rect(315, 10, 65, 350);

    fill("white");
    text ("Taesan", 415, 200);
    noFill();
    stroke ("white");
    rect(380, 10, 100 , 350);

    fill("white");
    text ("Woonhak", 480, 175);
    noFill();
    stroke ("white");
    rect(480, 10, 100 , 350);
}