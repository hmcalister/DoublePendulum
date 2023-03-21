import {
    upperLengthStore,
    upperMassStore,
    upperAngleStore,
    upperAngularVelocityStore,
    lowerLengthStore,
    lowerMassStore,
    lowerAngleStore,
    lowerAngularVelocityStore,
} from "./stores.js";

import { get } from "svelte/store";

export async function getNextState() {
    var response = await (fetch("/nextState"));
    var data = (await response.json());
    upperLengthStore.set(data.L1);
    upperMassStore.set(data.M1);
    upperAngleStore.set(data.Theta1);
    upperAngularVelocityStore.set(data.Omega1);
    lowerLengthStore.set(data.L2);
    lowerMassStore.set(data.M2);
    lowerAngleStore.set(data.Theta2);
    lowerAngularVelocityStore.set(data.Omega2);
    // console.log("\n\nNEXT STATE");
    // console.log("upperLengthStore: " + get(upperLengthStore));
    // console.log("upperMassStore: " + get(upperMassStore));
    // console.log("upperAngleStore: " + get(upperAngleStore));
    // console.log("upperAngularVelocityStore: " + get(upperAngularVelocityStore));
    // console.log("lowerLengthStore: " + get(lowerLengthStore));
    // console.log("lowerMassStore: " + get(lowerMassStore));
    // console.log("lowerAngleStore: " + get(lowerAngleStore));
    // console.log("lowerAngularVelocityStore: " + get(lowerAngularVelocityStore));

    return null;
}

export async function setState() {
    // event.preventDefault();

    const postData = {
        upperLength: get(upperLengthStore),
        upperMass: get(upperMassStore),
        upperAngle: get(upperAngleStore),
        upperAngularVelocity: get(upperAngularVelocityStore),
        lowerLength: get(lowerLengthStore),
        lowerMass: get(lowerMassStore),
        lowerAngle: get(lowerAngleStore),
        lowerAngularVelocity: get(lowerAngularVelocityStore),
    };

    const postOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    };

    const response = await fetch("/setState", postOptions);
    if (!response.ok) {
        console.log("ERROR posting state!");
    }
}