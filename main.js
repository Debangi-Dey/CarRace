var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=150;
car1_height=90;
car1_x=10;
car1_y=10;
car2_width=150;
car2_height=90;
car2_x=10;
car2_y=100;
background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_img="https://i.postimg.cc/9rqYz9HM/car1.png";
car2_img="https://i.postimg.cc/tnnW1Kff/car2.png"
function add(){
    backgroundimg=new Image();
    backgroundimg.onload=uploadbackground;
    backgroundimg.src=background_img;
    car1img=new Image();
    car1img.onload=uploadrover;
    car1img.src=car1_img;
    car2img=new Image();
    car2img.onload=uploadrover;
    car2img.src=car2_img;
}

function uploadbackground(){
    ctx.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(car1img, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }

    if(keyPressed=='87'){
        up1();
    }
    if(keyPressed=='83'){
        down1();
    }
    if(keyPressed=='65'){
        left1();
    }
    if(keyPressed=='68'){
        right1();
    }
    if (car1_x>700){
        document.getElementById("winner").innerHTML="White car is winner";
    }
    else if (car2_x>700){
        document.getElementById("winner").innerHTML="Green car is winner";
    }
}

function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        uploadbackground();
        uploadrover();
    }
}


function up1(){
    if (car2_y>=0){
        car2_y=car2_y-10;
        uploadbackground();
        uploadrover();
    }
}

function down1(){
    if (car2_y<=500){
        car2_y=car2_y+10;
        uploadbackground();
        uploadrover();
    }
}

function left1(){
    if (car2_x>=0){
        car2_x=car2_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right1(){
    if (car2_x<=700){
        car2_x=car2_x+10;
        uploadbackground();
        uploadrover();
    }
}