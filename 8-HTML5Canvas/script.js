const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.strokeStyle = '#9A0680';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 30;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (event) => {
  if (!isDrawing) return; //stop the function from running when they are not moused
  console.log(event);
  context.beginPath();
  // mouse start from
  context.moveTo(lastX, lastY);
  // mouse go to
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] =  [event.offsetX, event.offsetY]
}
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY]

});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
