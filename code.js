

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//aquí está la copa
var cup=createSprite(351,366,40,40);
cup.shapeColor="#D10363";


//las 22 paredes del laberinto
 var wall1=createSprite(16,74,80,20);
 wall1.shapeColor="#B784B7";
  var wall2 =createSprite(105,2,20,80);
  wall2.shapeColor="#B784B7";
  var wall3=createSprite(46,130,20,130);
   wall3.shapeColor="#B784B7";
  var wall4=createSprite(190,2,20,90);
   wall4.shapeColor="#B784B7";
  var wall5=createSprite(220,82,180,20);
   wall5.shapeColor="#B784B7";
  var wall6=createSprite(300,80,18,80);
   wall6.shapeColor="#B784B7";
  var wall7=createSprite(388,74,80,18);
   wall7.shapeColor="#B784B7";
  var wall8=createSprite(390,160,390,18);
   wall8.shapeColor="#B784B7";
  var wall9=createSprite(139,120,18,90);
   wall9.shapeColor="#B784B7";
  var wall10=createSprite(49,270,18,90);
  wall10.shapeColor="#B784B7";
  var wall11=createSprite(45,320,80,18);
  wall11.shapeColor="#B784B7";
  var wall12=createSprite(132,212,100,18);
  wall12.shapeColor="#B784B7";
  var wall13=createSprite(311,200,18,100);
  wall13.shapeColor="#B784B7";
  var wall14=createSprite(235,300,18,140);
  wall14.shapeColor="#B784B7";
  var wall15=createSprite(140,330,18,140);
  wall15.shapeColor="#B784B7";
  var wall16=createSprite(289,360,18,80);
  wall16.shapeColor="#B784B7";
  var wall17=createSprite(214,298,60,18);
  wall17.shapeColor="#B784B7";
  var wall18=createSprite(183,380,18,80);
  wall18.shapeColor="#B784B7";
  var wall19=createSprite(320,312,80,18);
  wall19.shapeColor="#B784B7";
  var wall20=createSprite(380,270,60,18);
  wall20.shapeColor="#B784B7";
  var wall21=createSprite(280,203,60,18);
  wall21.shapeColor="#B784B7";
 var wall22=createSprite(70,130,40,18);
 wall22.shapeColor="#B784B7";

//el protagonista Sofía
var Sofia=createSprite(20,25,18,18);
 Sofia.shapeColor="#8E7AB5";

  
function draw() {
  
  checkwin();
  
  //el fondo
  background("#EEA5A6");
  
  //para mover al personaje
  if (keyDown("UP_ARROW")) {
    Sofia.y=Sofia.y-4;
  }
    if (keyDown("DOWN_ARROW")) {
    Sofia.y=Sofia.y+4;
    }
    if (keyDown("RIGHT_ARROW")) {
    Sofia.x=Sofia.x+4;
    
  }
  
 if (keyDown("LEFT_ARROW")) {
    Sofia.x=Sofia.x-4
    
}


checkwin();

resetSofia();

createEdgeSprites();
Sofia.bounceOff(edges);

drawSprites();
}

function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  background("white");
  textSize(35);
  stroke("purple");
  text("You Win",100,200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
