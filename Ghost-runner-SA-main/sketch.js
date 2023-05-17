  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  spookySound.setVolume(0.1);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
 
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}


function draw() {
  background(255);
 
  
  if (gameState === "play") {
    
    if(keyDown("Z")){
        ghost.x = ghost.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("S")){
  
          ghost.x = ghost.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("x")){
  
         ghost.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnDoors();
      if(tower.y > 500){
        tower.y = 300
      } 
  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(300,10);
    door.addImage(doorImg);
    climber.addImage(climberImg);
    var invisibleBlock = createSprite(300,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    climber.x = door.x
    invisibleBlock.x = climber.x



    //adicione a função aleatória
    //
    door.x = Math.round(random(10,590))
   
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //mude a profundidade do fantasma e da porta
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

 door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    //adicione cada obstáculo aos grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

