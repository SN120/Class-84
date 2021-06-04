canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var NASA_mars_images = ["mars1.jpg", "mars2.jpg", "mars3.jfif", "mars4.jfif"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
var rover_width = 100;
var rover_height = 90;
var background_image = NASA_mars_images[random_number];
var rover_image = "rover.png"

rover_x = 10;
rover_y = 10;

function add() {
    image_tag = new Image();
    image_tag.onload=upload_background;
    image_tag.src=background_image;

    rover_tag = new Image();
    rover_tag.onload=upload_rover;
    rover_tag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(image_tag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_press=e.keyCode;
    if (key_press == '40'){
        down();
    }
    if (key_press == '38'){
        up();
    }
    if (key_press == '37'){
        left();
    }
    if (key_press == '39'){
        right();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y = rover_y+10;
        upload_background();
        upload_rover();
    }
}
function up(){
    if (rover_y > 0){
        rover_y = rover_y-10;
        upload_background();
        upload_rover();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x = rover_x+10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x = rover_x-10;
        upload_background();
        upload_rover();
    }
}