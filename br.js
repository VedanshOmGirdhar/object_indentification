img = "";
status = "";

function setup(){
canvas = createCanvas(640, 420 );
canvas.center();
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload(){
    img = loadImage("dog_cat.jpg");

}