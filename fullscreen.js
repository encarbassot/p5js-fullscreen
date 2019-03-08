//created by @elioputo for handle full screen with P5.js

var fullScreenMode=false;//false=small true=fullscreen
var fullScreenMousePressed;
var fullScreenX,fullScreenY,fullScreenS;
var elem = document.documentElement;
function fullscreenIt(mode) {
if(mode){
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
}

function arrowFullscreen(){//top left arrow
  var _arrow='128,0 0,0 0,128 48.96,79.04 110.293,140.48 140.48,110.293 79.04,48.96';
  var _split=_arrow.split(" ");
  beginShape();
  for(var i=0;i<_split.length;i++){
    var __a=_split[i].split(",");
    vertex(__a[0],__a[1]);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  if (mouseX>fullScreenX&&mouseX<fullScreenX+fullScreenS&&mouseY>fullScreenY&&mouseY<fullScreenY+fullScreenS){
    fullScreenMode=!fullScreenMode;
    fullscreenIt(fullScreenMode);
  }
  }


function drawFullscreen(_x,_y,_s){
fullScreenX=_x;
fullScreenY=_y;
fullScreenS=_s;

  var _maxSizeArrow = 384;
  var _minSizeArrow = -60;
  var _a=!fullScreenMode?_maxSizeArrow/2:_minSizeArrow;
  push();

  translate(_x+_s/2,_y+_s/2);
  scale(_s/_maxSizeArrow);

  for(var i=0;i<4;i++){
    translate(-_a,-_a);
    arrowFullscreen();
    translate(_a,_a);
    rotate(HALF_PI);
  }


  pop();
}
