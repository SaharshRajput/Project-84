canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 car1_width=120;
 car1_height=70;
 car1_image="car1.jpg";
 car1_x=10;
 car1_y=10;

 car2_width=120;
 car2_height=70;
 car2_image="car2.jpg";
 car2_x=10;
 car2_y=100;

 background_image="background.jpg";

 function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;
    
    car2_imgTag= new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
    
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
      up();
      console.log("up arrow key ");

    }
    if(keyPressed=="40")
{
   down();
   console.log("down arrow key");
}

    if(keyPressed=="37")
     {
      left();
      console.log("left arrow key");

     }
     if(keyPressed=="39")
     {
         right();
         console.log("right arrow key ");
     }
     if(keyPressed=="87")
    {
      up_car2();
      console.log("w");

    }
    if(keyPressed=="83")
{
   down_car2();
   console.log("s");
}

    if(keyPressed=="65")
     {
      left_car2();
      console.log("a");

     }
     if(keyPressed=="68")
     {
         right_car2();
         console.log("d");
     }
     if(car1_x>700)
{
console.log("Car 1 Won");
document.getElementById("game_status").innerHTML="Car 1 Won !!!"
}
if(car2_x>700)
{
console.log("Car 2 Won");
document.getElementById("game_status").innerHTML="Car 2 Won !!!"
}
    
}
function up()
{
    if (car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("When up arrow key is pressed X="+car1_x+"Y ="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function down()
{
    if (car1_y<=500)
    {
        car1_y=car1_y+10;
        console.log("When down arrow key is pressed X="+car1_x+"Y ="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function left()
{
    if (car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("When left arrow key is pressed X="+car1_x+"Y ="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function right()
{
    if (car1_x<=700)
    {
        car1_x=car1_x+10;
        console.log("When right arrow key is pressed X="+car1_x+"Y ="+car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function up_car2()
{
    if (car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("When up arrow key is pressed X="+car2_x+"Y ="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function down_car2()
{
    if (car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("When down arrow key is pressed X="+car2_x+"Y ="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function left_car2()
{
    if (car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("When left arrow key is pressed X="+car2_x+"Y ="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
function right_car2()
{
    if (car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("When right arrow key is pressed X="+car2_x+"Y ="+car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

}
