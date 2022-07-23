var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c26b6449-0b6c-4483-8486-107c0091c26e","24dab081-09d6-472a-833a-f3bfa1e3c7c6","68fe43bb-b32d-4bcd-bc0d-0b9c4c4333c6","75ed80c2-4157-4497-99f5-1df21067ad33","61dc5807-a5aa-4346-9011-084789905477"],"propsByKey":{"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"XvwaS1Y8GPH0f5jXRW_JdnqeYFQR0Qom","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"24dab081-09d6-472a-833a-f3bfa1e3c7c6":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"68fe43bb-b32d-4bcd-bc0d-0b9c4c4333c6":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"75ed80c2-4157-4497-99f5-1df21067ad33":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"61dc5807-a5aa-4346-9011-084789905477":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"}}};
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

var background = createSprite(200,200);
background.setAnimation("cave_1");

var hero = createSprite(200,345,150,300);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";

var goal =0;
var death = 0;

hero.setAnimation("hero1");
hero.scale=0.13;
enemy1.setAnimation("enemy1");
enemy1.scale=0.1;
enemy2.setAnimation("enemy2");
enemy2.scale=0.1;
enemy3.setAnimation("enemy3");
enemy3.scale=0.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {

createEdgeSprites();




enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-5;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+5;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_explosion/melodic_loss_1.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_collect/retro_game_coin_pickup_12.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Goals:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("death:"+death,20,350);
  
drawSprites();
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
