"use strict";
var timer = false;
var currText;
const NORMAL = 250;
const TURBO = 50;
var speed = NORMAL;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const animDrpDwn = document.getElementById("animation");
const txtArea = document.getElementById("text-area");
const fontDrpDwn = document.getElementById("fontsize");
const checkbox = document.getElementById('turbo');

var frameIndex = 0;

function startClicked() {
    startBtn.disabled = true;
    animDrpDwn.disabled = true;
    stopBtn.disabled = false;
    const a = txtArea.value.split("=====\n");
    currText = txtArea.value;
    timer = setInterval(animate, speed, a);
}

function animate(text) {
    txtArea.value = text[frameIndex];
    if (frameIndex === text.length - 1)
        frameIndex = 0;
    else
        frameIndex++;
}

function animationChanged() {
    txtArea.value = ANIMATIONS[animDrpDwn.value];
}

function fontChanged() {
    txtArea.className = fontDrpDwn.value;
}

function stopClicked() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    animDrpDwn.disabled = false;
    clearInterval(timer);
    timer = false;
    frameIndex = 0;
    txtArea.value = currText;
}

function turboChecked() {
    if (this.checked)
        speed = TURBO;
    else
        speed = NORMAL;
    if (timer) {
        clearInterval(timer);
        timer = setInterval(animate, speed, currText.split("=====\n"));
    }
}

startBtn.addEventListener("click", startClicked, false);
stopBtn.addEventListener("click", stopClicked, false);
animDrpDwn.addEventListener("change", animationChanged, false);
fontDrpDwn.addEventListener("change", fontChanged, false);
checkbox.addEventListener('change', turboChecked)

