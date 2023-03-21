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
    console.log(data)
    return data
}

async function ifPausedSetState(event) {
    if (isPaused) {
        setStateForm(event);
    }
}

async function setStateForm(event) {
    event.preventDefault();

    const postData = {
        upperLength: document.getElementById("upperLength").value/100.0,
        upperMass: document.getElementById("upperMass").value/100.0,
        upperAngle: document.getElementById("upperAngle").value/100.0,
        upperAngularVelocity: document.getElementById("upperAngularVelocity").value/100.0,
        lowerLength: document.getElementById("lowerLength").value/100.0,
        lowerMass: document.getElementById("lowerMass").value/100.0,
        lowerAngle: document.getElementById("lowerAngle").value/100.0,
        lowerAngularVelocity: document.getElementById("lowerAngularVelocity").value/100.0,
    };
   
    const postOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    };

    const response = await fetch("/setState", postOptions);
    if (!response.ok){
        console.log("ERROR posting state!");
    }

    draw();
}