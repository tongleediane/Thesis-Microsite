var s1 = function( sketch ) {
  

let img, letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL,letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ  ; 

let size = 25 // element size

let angle =0

let startx = 0 // starting x coordinate
let starty = 0 // starting y coordinate

let letter = [false, false, false, false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]

sketch.preload = function() {
  img= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/c.png")
  letterA = sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/a.png");
  letterB = sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/b.png");
    letterD= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/d-07.png")
  letterE= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/e-08.png")
  letterF= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/F.png")
  letterG= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/G.png")
  letterH= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/H.png")
  letterI= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/I.png")
  letterJ= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/J.png")
  letterK= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/K.png")
  letterL= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/L.png")
  letterM= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/M.png")
  letterN= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/N.png")
  letterO= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/O.png")
  letterP= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/P.png")
  letterQ= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/Q.png")
    letterR= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/R.png")
  letterS= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/S.png")
  letterT= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/T.png")
  letterU= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/U.png")
  letterV= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/V.png")
  letterW= sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/W.png")
  letterX = sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/x.png");
      letterY = sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/y.png");
  letterZ = sketch.loadImage("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/z.png");
  
  font1 = sketch.loadFont("https://s3.us-east-2.amazonaws.com/artcenter.tylerpaulson.com/projects/tongli/VisueltPro-Regular.ttf");
}

sketch.setup = function() {
  sketch.canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight,sketch.WEBGL); 

  img.loadPixels(); // loads image
  img.resize(sketch.windowWidth, 0); // resizes image to window size
  img.updatePixels(); // updates image
  
    letterA.loadPixels(); // loads image
  letterA.resize(sketch.windowWidth, 0); // resizes image to window size
  letterA.updatePixels(); // updates image
  
      img.loadPixels(); // loads image
  img.resize(sketch.windowWidth, 0); // resizes image to window size
  img.updatePixels(); // updates image
  
        letterB.loadPixels(); // loads image
  letterB.resize(sketch.windowWidth, 0); // resizes image to window size
  letterB.updatePixels(); // updates image
  
        letterD.loadPixels(); // loads image
  letterD.resize(sketch.windowWidth, 0); // resizes image to window size
  letterD.updatePixels(); // updates image
  
          letterE.loadPixels(); // loads image
  letterE.resize(sketch.windowWidth, 0); // resizes image to window size
  letterE.updatePixels(); // updates image
  
            letterF.loadPixels(); // loads image
  letterF.resize(sketch.windowWidth, 0); // resizes image to window size
  letterF.updatePixels(); // updates image
  
              letterG.loadPixels(); // loads image
  letterG.resize(sketch.windowWidth, 0); // resizes image to window size
  letterG.updatePixels(); // updates image
              letterH.loadPixels(); // loads image
  letterH.resize(sketch.windowWidth, 0); // resizes image to window size
  letterH.updatePixels(); // updates image
              letterI.loadPixels(); // loads image
  letterI.resize(sketch.windowWidth, 0); // resizes image to window size
  letterI.updatePixels(); // updates image
              letterJ.loadPixels(); // loads image
  letterJ.resize(sketch.windowWidth, 0); // resizes image to window size
  letterJ.updatePixels(); // updates image
              letterK.loadPixels(); // loads image
  letterK.resize(sketch.windowWidth, 0); // resizes image to window size
  letterK.updatePixels(); // updates image
              letterL.loadPixels(); // loads image
  letterL.resize(sketch.windowWidth, 0); // resizes image to window size
  letterL.updatePixels(); // updates image
  
              letterM.loadPixels(); // loads image
  letterM.resize(sketch.windowWidth, 0); // resizes image to window size
  letterM.updatePixels(); // updates image       
  
                letterN.loadPixels(); // loads image
  letterN.resize(sketch.windowWidth, 0); // resizes image to window size
  letterN.updatePixels(); // updates image
              letterO.loadPixels(); // loads image
  letterO.resize(sketch.windowWidth, 0); // resizes image to window size
  letterO.updatePixels(); // updates image
              letterP.loadPixels(); // loads image
  letterP.resize(sketch.windowWidth, 0); // resizes image to window size
  letterP.updatePixels(); // updates image
  
              letterQ.loadPixels(); // loads image
  letterQ.resize(sketch.windowWidth, 0); // resizes image to window size
  letterQ.updatePixels(); // updates image     
  
                letterR.loadPixels(); // loads image
  letterR.resize(sketch.windowWidth, 0); // resizes image to window size
  letterR.updatePixels(); // updates image       
  
                letterS.loadPixels(); // loads image
  letterS.resize(sketch.windowWidth, 0); // resizes image to window size
  letterS.updatePixels(); // updates image
              letterT.loadPixels(); // loads image
  letterT.resize(sketch.windowWidth, 0); // resizes image to window size
  letterT.updatePixels(); // updates image
              letterU.loadPixels(); // loads image
  letterU.resize(sketch.windowWidth, 0); // resizes image to window size
  letterU.updatePixels(); // updates image
  
              letterV.loadPixels(); // loads image
  letterV.resize(sketch.windowWidth, 0); // resizes image to window size
  letterV.updatePixels(); // updates image     
                letterW.loadPixels(); // loads image
  letterW.resize(sketch.windowWidth, 0); // resizes image to window size
  letterW.updatePixels(); // updates image
              letterX.loadPixels(); // loads image
  letterX.resize(sketch.windowWidth, 0); // resizes image to window size
  letterX.updatePixels(); // updates image
  
              letterY.loadPixels(); // loads image
  letterY.resize(sketch.windowWidth, 0); // resizes image to window size
  letterY.updatePixels(); // updates image     
                letterZ.loadPixels(); // loads image
  letterZ.resize(sketch.windowWidth, 0); // resizes image to window size
  letterZ.updatePixels(); // updates image     
  
  sSlider = sketch.createSlider(10,150,100);
  sSlider.position(70, 250);
  sSlider.style('width', '200px');
  sSlider.addClass("mySliders");
};

  // sSlider.sketch.addClass("Slider");


  
  // type in letter to draw
  
  sketch.draw = function() {
//     sketch.textFont(font1)
//       sketch.textSize(32);
//   sketch.fill(255);
// sketch.text('Unit Size', 30, 200);

  sketch.orbitControl();
  sketch.background(0);
  sketch.noStroke()
    for (let i = 0; i < letter.length; i++) {
    if (letter[i] == true) {
      if (i == 0) {
        
        sketch.drawA(-600)
        // drawA(600)
      } else if (i == 1) {
        sketch.drawB(-600)
        
      }else if (i == 2) {
        sketch.drawC(-600)

      }else if (i == 3) {
        sketch.drawD(-600)

      }else if (i == 4) {
        sketch.drawE(-600)

      }else if (i == 5) {
        sketch.drawF(-600)

      }else if (i == 6) {
        sketch.drawG(-600)

      }else if (i == 7) {
        sketch.drawH(-600)

      }else if (i == 8) {
        sketch.drawI(-600)

      }else if (i == 9) {
        sketch.drawJ(-600)

      }else if (i == 10) {
        sketch.drawK(-600)

      }else if (i == 11) {
        sketch.drawL(-600)

      }else if (i == 12) {
        sketch.drawM(-600)

      }else if (i == 13) {
        sketch.drawN(-600)

      }else if (i == 14) {
        sketch.drawO(-600)

      }else if (i == 15) {
        sketch.drawP(-600)

      }else if (i == 16) {
        sketch.drawQ(-600)

      }else if (i == 17) {
        sketch.drawR(-600)

      }else if (i == 18) {
        sketch.drawS(-600)

      }else if (i == 19) {
        sketch.drawT(-600)

      }else if (i == 20) {
        sketch.drawU(-600)

      }else if (i == 21) {
        sketch.drawV(-600)

      }else if (i == 22) {
        sketch.drawW(-600)

      }else if (i == 23) {
        sketch.drawX(-600)

      }else if (i == 24) {
        sketch.drawY(-600)

      }else if (i == 25) {
        sketch.drawZ(-600)

      }
      
    }
  }
    sketch.keyPressed = function() {
    if (sketch.key === 'a') {    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[0] = true
  } else if (sketch.key == 'b') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[1] = true
    // drawC(x, y, letterHeight);
    // x += letterWidth + tracking;  
  }else if (sketch.key == 'c') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[2] = true
  } 
  else if (sketch.key == 'd') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[3] = true
  }  else if (sketch.key == 'e') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[4] = true
  }  else if (sketch.key == 'f') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[5] = true
  }  else if (sketch.key == 'g') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[6] = true
  }  else if (sketch.key == 'h') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[7] = true
  }else if (sketch.key == 'i') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[8] = true
  }else if (sketch.key == 'j') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[9] = true
  }else if (sketch.key == 'k') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[10] = true
  }else if (sketch.key == 'l') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[11] = true
  }else if (sketch.key == 'm') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[12] = true
  }else if (sketch.key == 'n') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[13] = true
  }else if (sketch.key == 'o') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[14] = true
  }else if (sketch.key == 'p') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[15] = true
  }else if (sketch.key == 'q') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[16] = true
  }else if (sketch.key == 'r') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[17] = true
  }else if (sketch.key == 's') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[18] = true
  }else if (sketch.key == 't') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[19] = true
  }else if (sketch.key == 'u') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[20] = true
  }else if (sketch.key == 'v') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[21] = true
  }else if (sketch.key == 'w') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[22] = true
  }else if (sketch.key == 'x') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[23] = true
  }else if (sketch.key == 'y') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[24] = true
  }else if (sketch.key == 'z') {
    for (let i = 0; i < letter.length; i++) {
      letter[i] = false
    }
    letter[25] = true
  }
  
  }

  sketch.drawA = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterA.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterA.width; startx++) {
      var index = (startx + starty * letterA.width) * 4;
      var color = letterA.pixels[index+0]
      var r = letterA.pixels[index + 0];
      var g = letterA.pixels[index + 1];
      var b = letterA.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawB = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterB.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterB.width; startx++) {
      var index = (startx + starty * letterB.width) * 4;
      var color = letterB.pixels[index+0]
      var r = letterB.pixels[index + 0];
      var g = letterB.pixels[index + 1];
      var b = letterB.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawC = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < img.height; starty++) { // creates pixel index
    for (var startx = 0; startx < img.width; startx++) {
      var index = (startx + starty * img.width) * 4;
      var color = img.pixels[index+0]
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawD = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterD.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterD.width; startx++) {
      var index = (startx + starty * letterD.width) * 4;
      var color = letterD.pixels[index+0]
      var r = letterD.pixels[index + 0];
      var g = letterD.pixels[index + 1];
      var b = letterD.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawE = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterE.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterE.width; startx++) {
      var index = (startx + starty * letterE.width) * 4;
      var color = letterE.pixels[index+0]
      var r = letterE.pixels[index + 0];
      var g = letterE.pixels[index + 1];
      var b = letterE.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawF = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterF.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterF.width; startx++) {
      var index = (startx + starty * letterF.width) * 4;
      var color = letterF.pixels[index+0]
      var r = letterF.pixels[index + 0];
      var g = letterF.pixels[index + 1];
      var b = letterF.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    sketch.drawG = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterG.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterG.width; startx++) {
      var index = (startx + starty * letterG.width) * 4;
      var color = letterG.pixels[index+0]
      var r = letterG.pixels[index + 0];
      var g = letterG.pixels[index + 1];
      var b = letterG.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawH = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterH.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterH.width; startx++) {
      var index = (startx + starty * letterH.width) * 4;
      var color = letterH.pixels[index+0]
      var r = letterH.pixels[index + 0];
      var g = letterH.pixels[index + 1];
      var b = letterH.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawI = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterI.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterI.width; startx++) {
      var index = (startx + starty * letterI.width) * 4;
      var color = letterI.pixels[index+0]
      var r = letterI.pixels[index + 0];
      var g = letterI.pixels[index + 1];
      var b = letterI.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1200,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawJ = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterJ.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterJ.width; startx++) {
      var index = (startx + starty * letterJ.width) * 4;
      var color = letterJ.pixels[index+0]
      var r = letterJ.pixels[index + 0];
      var g = letterJ.pixels[index + 1];
      var b = letterJ.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1400,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawK = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterK.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterK.width; startx++) {
      var index = (startx + starty * letterK.width) * 4;
      var color = letterK.pixels[index+0]
      var r = letterK.pixels[index + 0];
      var g = letterK.pixels[index + 1];
      var b = letterK.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawL = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterL.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterL.width; startx++) {
      var index = (startx + starty * letterL.width) * 4;
      var color = letterL.pixels[index+0]
      var r = letterL.pixels[index + 0];
      var g = letterL.pixels[index + 1];
      var b = letterL.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1400,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawM = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterL.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterL.width; startx++) {
      var index = (startx + starty * letterL.width) * 4;
      var color = letterL.pixels[index+0]
      var r = letterL.pixels[index + 0];
      var g = letterL.pixels[index + 1];
      var b = letterL.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  };    sketch.drawM = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterM.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterM.width; startx++) {
      var index = (startx + starty * letterM.width) * 4;
      var color = letterM.pixels[index+0]
      var r = letterM.pixels[index + 0];
      var g = letterM.pixels[index + 1];
      var b = letterM.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawN = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterN.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterN.width; startx++) {
      var index = (startx + starty * letterN.width) * 4;
      var color = letterN.pixels[index+0]
      var r = letterN.pixels[index + 0];
      var g = letterN.pixels[index + 1];
      var b = letterN.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawO = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterO.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterO.width; startx++) {
      var index = (startx + starty * letterO.width) * 4;
      var color = letterO.pixels[index+0]
      var r = letterO.pixels[index + 0];
      var g = letterO.pixels[index + 1];
      var b = letterO.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
        sketch.drawP = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterP.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterP.width; startx++) {
      var index = (startx + starty * letterP.width) * 4;
      var color = letterP.pixels[index+0]
      var r = letterP.pixels[index + 0];
      var g = letterP.pixels[index + 1];
      var b = letterP.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    
        sketch.drawQ = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterQ.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterQ.width; startx++) {
      var index = (startx + starty * letterQ.width) * 4;
      var color = letterQ.pixels[index+0]
      var r = letterQ.pixels[index + 0];
      var g = letterQ.pixels[index + 1];
      var b = letterQ.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawR = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterR.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterR.width; startx++) {
      var index = (startx + starty * letterR.width) * 4;
      var color = letterR.pixels[index+0]
      var r = letterR.pixels[index + 0];
      var g = letterR.pixels[index + 1];
      var b = letterR.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawS = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterS.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterS.width; startx++) {
      var index = (startx + starty * letterS.width) * 4;
      var color = letterS.pixels[index+0]
      var r = letterS.pixels[index + 0];
      var g = letterS.pixels[index + 1];
      var b = letterS.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    
            sketch.drawT = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterT.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterT.width; startx++) {
      var index = (startx + starty * letterT.width) * 4;
      var color = letterT.pixels[index+0]
      var r = letterT.pixels[index + 0];
      var g = letterT.pixels[index + 1];
      var b = letterT.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1400,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawU = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterU.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterU.width; startx++) {
      var index = (startx + starty * letterU.width) * 4;
      var color = letterU.pixels[index+0]
      var r = letterU.pixels[index + 0];
      var g = letterU.pixels[index + 1];
      var b = letterU.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawV = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterV.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterV.width; startx++) {
      var index = (startx + starty * letterV.width) * 4;
      var color = letterV.pixels[index+0]
      var r = letterV.pixels[index + 0];
      var g = letterV.pixels[index + 1];
      var b = letterV.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    
            sketch.drawW = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterW.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterW.width; startx++) {
      var index = (startx + starty * letterW.width) * 4;
      var color = letterW.pixels[index+0]
      var r = letterW.pixels[index + 0];
      var g = letterW.pixels[index + 1];
      var b = letterW.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawX = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterX.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterX.width; startx++) {
      var index = (startx + starty * letterX.width) * 4;
      var color = letterX.pixels[index+0]
      var r = letterX.pixels[index + 0];
      var g = letterX.pixels[index + 1];
      var b = letterX.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
            sketch.drawY = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterY.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterY.width; startx++) {
      var index = (startx + starty * letterY.width) * 4;
      var color = letterY.pixels[index+0]
      var r = letterY.pixels[index + 0];
      var g = letterY.pixels[index + 1];
      var b = letterY.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
    
            sketch.drawZ = function(x) {
    
    sketch.push()
  sketch.translate(x,0,-1800)
  // rotateY(frameCount*0.03)
  for (var starty = 0; starty < letterZ.height; starty++) { // creates pixel index
    for (var startx = 0; startx < letterZ.width; startx++) {
      var index = (startx + starty * letterZ.width) * 4;
      var color = letterZ.pixels[index+0]
      var r = letterZ.pixels[index + 0];
      var g = letterZ.pixels[index + 1];
      var b = letterZ.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b))
      
      let z= (sketch.mouseX/sketch.width)*bright+1000;
      // var z = 30
      sketch.fill(color) // fills element with adjusted grayscale

      if (bright !=0){
      sketch.push()
      sketch.translate(startx- img.width/2,starty - img.height/2,z)
      sketch.rotateY(sketch.frameCount * 0.04);
        sketch.rect(0, 0, sSlider.value(), sSlider.value())
      sketch.rectMode(sketch.CENTER);
      
      sketch.pop()
        
        sketch.push()
      sketch.translate(startx- img.width/2+1600,starty - img.height/2,z)

      sketch.rectMode(sketch.CENTER);
      sketch.rotateY(sketch.frameCount*0.04);
      
         
      sketch.box(sSlider.value())
      
      sketch.pop()
      }
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
   sketch.pop() 
    
  }
}; sketch.saveimage = function(){
        sketch.save('img.jpg')
    };
  
  
};


// function keyReleased() { if (key == '1') save("myImage.jpg");}




//=============================================================
// draw whole alphabet function



var myp5 = new p5(s1, "p5L1");
$('#save').on('click', myp5.saveimage);