var canvas;
var cursorCanvas;

var penStyle;
var penColor;
var penWidth;

var context;
var cursorContext;

var canvasImage;

var mouse;

var relativeX;
var relativeY;

function settingCanvas()
{
    canvas = document.getElementById('uniq-canvas');
    cursorCanvas = document.getElementById('cursorWhiteboard');
    
    penStyle = 'pen';
    penColor = 'black';
    penWidth = 2;
    
    context = canvas.getContext('2d');
    cursorContext = cursorCanvas.getContext('2d');
    
    canvasImage = new Image();

    canvasImage.onload = function() { //캔버스 이미지 체인지용
        context.drawImage(canvasImage, 0,0, canvas.width, canvas.height);
    };

    mouse = {
        click: false,
        move: false,
        pos: {x:0, y:0},
        pos_prev: false
    }

    relativeX = 3
    relativeY = 188

    cursorCanvas.onmousedown = (e) => {mouse.click = true}
    cursorCanvas.onmouseup = (e) => {mouse.click = false}

    cursorCanvas.onmousemove = (e) => {
      mouse.pos.x = (e.pageX - relativeX)
      mouse.pos.y = (e.pageY - relativeY)
      mouse.move = true
    }
}