var ground,groundImg;
var backgroundS, backgroundImg;
var player, marioImg;


function preload(){
  
  marioImg = loadImage("assets/Mario.webp")
 groundImg = loadImage ("assets/ground.jpg")
  backgroundImg = loadImage("assets/background.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  backgroundS = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
backgroundS.addImage(backgroundImg)
backgroundS.scale = 1.1
  

//Crear el sprite del jugador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(marioImg)
   player.scale = 0.3
 
  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  // player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 // player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}
// me falta codificarlo para que se un corredor infinito de Mario Bros y ageregarle el movimiento para que haga esto.
