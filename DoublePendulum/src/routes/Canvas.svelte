<script>
    import {
        isPaused,
        upperLengthStore,
        upperMassStore,
        upperAngleStore,
        lowerLengthStore,
        lowerMassStore,
        lowerAngleStore,
        allStateStores,
    } from "./stores.js";
    import { onDestroy } from "svelte";
    import { get } from "svelte/store";
    import { getNextState } from "./pendulumState.js";

    let canvas;
    var innerWidth;
    var innerHeight;
    const SCALE = 500;
    
    async function draw() {
        canvas.height = innerWidth;
        canvas.width = innerWidth;

        var context = canvas.getContext("2d");
        context.lineWidth = 5;
        context.fillStyle = "rgba(255,255,255,1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.strokeStyle = "rgba(0,0,0,1)";
        context.fillStyle = "rgba(0,0,0,1)";

        context.save();
        context.translate(canvas.width / 2, canvas.height / 3);

        context.rotate(get(upperAngleStore));
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, SCALE * get(upperLengthStore));
        context.stroke();

        context.translate(0, SCALE * get(upperLengthStore));
        context.beginPath();
        context.arc(0, 0, SCALE * 0.05 * get(upperMassStore), 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        context.rotate(get(lowerAngleStore) - get(upperAngleStore));
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, SCALE * get(lowerLengthStore));
        context.stroke();

        context.translate(0, SCALE * get(lowerLengthStore));
        context.beginPath();
        context.arc(0, 0, SCALE * 0.05 * get(lowerMassStore), 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        context.restore();
    }

    function anim() {
        draw();

        if ($isPaused) {
            return;
        }
        getNextState();
        window.requestAnimationFrame(anim);
    }

    const unsubscribe = isPaused.subscribe((n) => {
        anim();
    });

    allStateStores.subscribe((_) => {
        draw();
    })

    onDestroy(unsubscribe);
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<canvas bind:this={canvas} />

<style>
    canvas {
        height: 25vw;
        width: 25vw;
        background-color: white;
    }
</style>
