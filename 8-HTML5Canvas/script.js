const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.strokeStyle = '#9A0680';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 30;
// context.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
  if (!isDrawing) return; //stop the function from running when they are not moused
  console.log(event);
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // mouse start from
  context.moveTo(lastX, lastY);
  // mouse go to
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] =  [event.offsetX, event.offsetY]

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (context.lineWidth >= 70 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY]
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
