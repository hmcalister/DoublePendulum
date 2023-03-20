var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var pixelRatio = window.devicePixelRatio;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
const SCALE = 300;
canvas.width = canvasWidth * pixelRatio;
canvas.height = canvasHeight * pixelRatio;
context.scale(pixelRatio, pixelRatio);


async function draw() {
    state = await getNextState();
    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillStyle = "rgba(0,0,0,1)";

    context.save();
    context.translate(canvasWidth / 2, canvasHeight/3);

    context.rotate(state.Theta1);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,SCALE*state.L1);
    context.stroke();

    context.translate(0,SCALE*state.L1)
    context.beginPath()
    context.arc(0,0,SCALE*0.05*state.M1,0,2*Math.PI);
    context.closePath();
    context.fill();

    context.rotate(state.Theta2-state.Theta1);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,SCALE*state.L2);
    context.stroke();

    context.translate(0,SCALE*state.L2)
    context.beginPath()
    context.arc(0,0,SCALE*0.05*state.M2,0,2*Math.PI);
    context.closePath();
    context.fill();

    context.restore();
}

function anim() {
    if (isPaused) {
        return
    }
    window.requestAnimationFrame(anim);
    draw();
}

function nextFrame() {
    if (!isPaused) {
        togglePaused();
    }
    draw();
}