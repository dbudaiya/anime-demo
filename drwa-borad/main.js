
const my_canvas = document.getElementById('MyCanvas')
const ctx = my_canvas.getContext('2d')

const slt_width = document.getElementById('sltWidth')
const slt_color = document.getElementById('sltColor')

const clear_draw = document.getElementById('clear_draw')
let slt_w = slt_width.value;
let slt_c = slt_color.value;
let lastX = 0, lastY = 0;
let mouse_pressed = false;
window.onload = function () {
  initThis()
}

function initThis() {
  // touch 手机触摸屏操作
  my_canvas.addEventListener('touchstart', function (v) {
    console.log('tstart')
  }), false

  my_canvas.addEventListener('touchmove', function (v) {
    console.log('tmove')
  }, false)

  my_canvas.addEventListener('touchend', function () {
    console.log('tend')
  }, false)

  // mouse 鼠标操作
  my_canvas.onmousedown = function (e) {
    // console.log('mmdown')
    mouse_pressed = true;
    Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
  }

  my_canvas.onmousemove = function (e) {
    // console.log('mmove')
    if (mouse_pressed) {
      Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    }
  }
  my_canvas.onmouseup = function () {
    // console.log('mup')
    mouse_pressed = false;
  }
}

slt_width.addEventListener('change', function (e) {
  return slt_w = e.target.value
})


slt_color.addEventListener('change', function (e) {
  return slt_c = e.target.value
})


function Draw(x, y, is_down) {
  if (is_down) {
    ctx.beginPath();
    ctx.strokeStyle = slt_c;
    ctx.lineWidth = slt_w;
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }

  lastX = x;
  lastY = y;
}


clear_draw.onclick = function() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function saveImage() {

}
