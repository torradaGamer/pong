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

var playerPaddle = createSprite(390, 200, 10,70);
var computerPaddle = createSprite(10, 200, 10,70);
var bola = createSprite(200,200,10,10);

playerPaddle.shapeColor="Blue";
computerPaddle.shapeColor="Red";
bola.shapeColor="green";
createEdgeSprites();
function draw() {
  background("white");
 for (var ponto = 0; ponto < 400; ponto = ponto+20) {
   line(200,ponto,200,ponto+10); 
  }
   
  
  
  drawSprites();
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(playerPaddle);
  bola.bounceOff(computerPaddle);
  computerPaddle.y = mouseY;
  
 if (keyDown("up")) {
  playerPaddle.y = playerPaddle.y -10;
  }
 if (keyDown("down")) {
  playerPaddle.y = playerPaddle.y +10;
  }
  
 if (keyDown("enter")) {
  bola.setVelocity(4,-8);
}
 if (playerPaddle.y > 355) {
  playerPaddle.y = 355;
}
 if (playerPaddle.y < 55) {
  playerPaddle.y = 55;
}
 if (computerPaddle.y < 55) {
   computerPaddle.y =55;
}
 if (computerPaddle.y > 355) {
   computerPaddle.y = 355;
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
