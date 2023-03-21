import { writable, derived } from "svelte/store";

export const isPaused = writable(1);
export const upperLengthStore = writable(0.5);
export const upperMassStore = writable(1);
export const upperAngleStore = writable(0);
export const upperAngularVelocityStore = writable(0);
export const lowerLengthStore = writable(0.5);
export const lowerMassStore = writable(1);
export const lowerAngleStore = writable(0);
export const lowerAngularVelocityStore = writable(0);

export const allStateStores = derived([upperLengthStore,
    upperMassStore,
    upperAngleStore,
    upperAngularVelocityStore,
    lowerLengthStore,
    lowerMassStore,
    lowerAngleStore,
    lowerAngularVelocityStore,],
    ([v1, v2, v3, v4, v5, v6, v7, v8]) => [v1, v2, v3, v4, v5, v6, v7, v8])