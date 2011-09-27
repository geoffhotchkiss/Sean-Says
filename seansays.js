var imgsrc = "seansays-small.jpg";
var seantext;

function draw() {
  var ctx= document.getElementById('seansayscanvas').getContext('2d');
  ctx.clearRect(0,0,800,533);
  drawBackground(ctx);
  seantext = document.getElementById('whatseansays').value;
  if (seantext == "") {
    seantext = "I'm a faggot!";
  }
}

function drawBackground(ctx) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img,0,0);
    drawSpeechBubble(ctx, seantext);
  }
  img.src=imgsrc;
}

function drawSpeechBubble(ctx,seantext) {
  toff = ctx.measureText(seantext).width;
  xoff = 390;
  yoff = -10;
  ctx.strokeStyle='#000000';
  ctx.fillStyle='#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(75+xoff,25+yoff);
  ctx.quadraticCurveTo(25+xoff,25+yoff,25+xoff,62.5+yoff);
  ctx.quadraticCurveTo(25+xoff,100+yoff,50+xoff,100+yoff);
  ctx.quadraticCurveTo(50+xoff,140+yoff,110+xoff,152+yoff);
  ctx.quadraticCurveTo(60+xoff,135+yoff,65+xoff,100+yoff);
  //ctx.lineTo(120+xoff,100+yoff);
  ctx.quadraticCurveTo(125-60+xoff+toff,100+yoff,125-50+xoff+toff,62.5+yoff);
  ctx.quadraticCurveTo(125-50+xoff+toff,25+yoff,10+xoff+toff,25+yoff);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle="blue";
  ctx.font="11pt Helvetica";
  ctx.fillText(seantext, 30+xoff, 65+yoff);
}

