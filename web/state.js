async function randomize() {
    if (!isPaused) {
        togglePaused();
    }
    await fetch("/random");

    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    draw();
}

async function getNextState() {
    var response = await (fetch("/nextState"))
    data = (await response.json())
    // console.log(data)
    return data
}

async function randomize() {
    if (!isPaused) {
        togglePaused();
    }
    await fetch("/random");

    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    draw();
}

