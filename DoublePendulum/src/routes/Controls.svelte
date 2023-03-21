<script>
    import {
        isPaused,
        upperLengthStore,
        upperMassStore,
        upperAngleStore,
        upperAngularVelocityStore,
        lowerLengthStore,
        lowerMassStore,
        lowerAngleStore,
        lowerAngularVelocityStore,
    } from "./stores.js";
    import { setState } from "./pendulumState.js";

    function togglePaused() {
        isPaused.update((n) => 1 - n);
        // console.log($isPaused);
    }
</script>

<div>
    <div class="container" style="margin: 5px 0;">
        <div class="grid">
            <button id="isPausedButton" on:click={togglePaused}>
                {#if $isPaused}
                    PLAY
                {:else}
                    PAUSE
                {/if}
            </button>
            <!-- <button id="randStateButton" onclick="randomize()">
            Randomize State
        </button> -->
        </div>
    </div>

    <form>
        <div class="container" style="margin: 5px 0;">
            <h2>Upper Pendulum</h2>
            <div class="grid">
                <label for="upperLength"
                    >Length
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        bind:value={$upperLengthStore}
                        id="upperLength"
                        name="upperLength"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
                <label for="upperMass"
                    >Mass
                    <input
                        type="range"
                        min="0.01"
                        max="5"
                        step="0.01"
                        bind:value={$upperMassStore}
                        id="upperMass"
                        name="upperMass"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
            </div>
            <div class="grid">
                <label for="upperAngle"
                    >Angle
                    <input
                        type="range"
                        min="-3.14"
                        max="3.14"
                        step="0.01"
                        bind:value={$upperAngleStore}
                        id="upperAngle"
                        name="upperAngle"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
                <label for="upperAngularVelocity"
                    >Angular Velocity
                    <input
                        type="range"
                        min="-10"
                        max="10"
                        step="0.01"
                        bind:value={$upperAngularVelocityStore}
                        id="upperAngularVelocity"
                        name="upperAngularVelocity"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
            </div>
        </div>
        <div class="container" style="margin: 5px 0;">
            <h2>Lower Pendulum</h2>
            <div class="grid">
                <label for="lowerLength"
                    >Length
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        bind:value={$lowerLengthStore}
                        id="lowerLength"
                        name="lowerLength"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
                <label for="lowerMass"
                    >Mass
                    <input
                        type="range"
                        min="0.01"
                        max="5"
                        step="0.01"
                        bind:value={$lowerMassStore}
                        id="lowerMass"
                        name="lowerMass"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
            </div>
            <div class="grid">
                <label for="lowerAngle"
                    >Angle
                    <input
                        type="range"
                        min="-3.14"
                        max="3.14"
                        step="0.01"
                        bind:value={$lowerAngleStore}
                        id="lowerAngle"
                        name="lowerAngle"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
                <label for="lowerAngularVelocity"
                    >Angular Velocity
                    <input
                        type="range"
                        min="-10"
                        max="10"
                        step="0.01"
                        bind:value={$lowerAngularVelocityStore}
                        id="lowerAngularVelocity"
                        name="lowerAngularVelocity"
                        on:change={setState}
                        on:input={setState}
                    />
                </label>
            </div>
        </div>
    </form>
</div>
