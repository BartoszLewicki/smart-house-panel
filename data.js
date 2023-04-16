"use strict"

let checkMain = 0;

const stateOutput = document.getElementById("right-half");
const screen = document.querySelector("#screen");
const controls = document.querySelector("#controls");
const nav = document.querySelector("nav");



const roomNames = ["Salon", "Sypialnia", "Kuchnia", "Łazienka", "Pozostałe"];
const roomIDs = ["living-room", "bedroom", "kitchen", "bathroom", "house"];
const outNames = ["Light", "Temp", "Blind", "Outlet", "Tv", "Sound", "Alarm", "Garage", "Clean"];

// STARTING PRESETS ARRAY
let presets = [
    {
    name: "day",
    id: "preset0",
    code: 
    `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>
    <p class="preset-text">Dzień</p>`,
    states: [[0,21,0,1,0,1],[0,20,0,0,0,0],[0,20,0,1,1],[0,21,0,0,0],[0,0,0]]
    },
    {
    name: "night",
    id: "preset1",
    code: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z M51.86,5.2c-0.64,0.11-1.28,0.23-1.91,0.36l-1.01,0.22l0,0c-0.29,0.07-0.63,0.14-1,0.23 c-14.88,3.61-27.05,12.83-34.7,24.92C5.61,42.98,2.46,57.88,5.56,72.94c3.18,15.43,12.31,28.11,24.51,36.15 c12.19,8.03,27.45,11.41,42.88,8.23c15-3.09,27.41-11.81,35.46-23.49c6.27-9.09,9.9-19.98,10.09-31.41 c-2.27,4.58-5.3,8.76-8.96,12.34c-6,5.86-13.69,10.13-22.51,11.95l-0.01,0c-12.26,2.52-24.38-0.16-34.07-6.54 c-9.68-6.38-16.93-16.45-19.45-28.7l0-0.01C31.25,40.58,33.1,29.82,38,20.77C41.32,14.63,46.05,9.27,51.86,5.2L51.86,5.2z"/></g></svg>
    <p class="preset-text">Noc</p>`,
    states: [[0,18,1,0,0,0],[1,18,1,1,0,1],[0,18,1,0,0],[1,20,1,0,0],[1,0,0]]
    },
        {
    name: "clean",
    id: "preset2",
    code: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 121.58" style="enable-background:new 0 0 122.88 121.58" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M10.28,98.77c5.06,0,9.16,3.82,9.16,8.53c0,4.71-4.1,8.53-9.16,8.53c-5.06,0-9.17-3.82-9.17-8.53 C1.11,102.59,5.22,98.77,10.28,98.77L10.28,98.77z M93.09,97.99l0.01,0.03l1.38-0.44c3.99,10.75,6.25,15.3,17.91,16.5h10.48v7.5 H89.39v-7.5h1.14l-3.89-13.98l1.08-0.35l-14.3-36.82l-0.02-0.06l0,0L62.83,33.76c-1.49-3.28-2.45-6.65-3.4-9.96 C57.4,16.68,55.45,9.85,48.69,7.35c-1.25-0.46-2.66-0.83-4.21-1.1c-1.63-0.29-3.37-0.47-5.23-0.56c-5.22-0.25-10.36,1.11-14.6,4.17 c-3.86,2.78-6.99,7.01-8.76,12.74c-1.75,5.67-2.61,10.38-1.82,14.49c0.76,3.95,3.12,7.56,7.82,11.25c0.15,0.12,0.36,0.3,0.58,0.48 c0.29,0.24,0.59,0.5,0.82,0.63c2.93,1.7,5.98,3.17,8.95,4.61c0.51,0.25,1.02,0.49,1.53,0.74c0.69,0.33,1.41,0.67,2.1,1 c7.59,3.6,12.26,5.81,13.58,15.97c0.26,1.96,0.24,3.86-0.01,5.69c18.44,6.65,30.97,18.74,36.03,38.68H22.59 c3.29-4.42,4.34-9.96,2.29-14.87c-3.32-7.95-13.51-11.27-22.76-7.4C1.38,94.15,0.68,94.49,0,94.87V70.66 c1.85,0.01,3.69,0.04,5.5,0.09v-6.72c0-0.65,0.53-1.18,1.18-1.18h10.1c0.65,0,1.18,0.53,1.18,1.18v7.26 c9.51,0.74,18.2,2.15,25.99,4.39c0.07-1.03,0.04-2.09-0.1-3.18c-0.92-7.1-4.53-8.81-10.39-11.59c-0.67-0.32-1.36-0.65-2.14-1.02 c-0.51-0.25-1.02-0.49-1.53-0.74c-3.07-1.48-6.22-3-9.33-4.81c-0.68-0.39-1.17-0.81-1.64-1.21c-0.12-0.1-0.24-0.2-0.42-0.34 c-5.87-4.61-8.87-9.31-9.88-14.64c-0.99-5.17-0.03-10.71,1.98-17.22c2.16-6.99,6.05-12.19,10.87-15.67 c5.3-3.83,11.71-5.54,18.16-5.23c2.16,0.1,4.14,0.31,5.94,0.63c1.88,0.33,3.6,0.79,5.18,1.37c9.47,3.51,11.81,11.68,14.24,20.21 c0.9,3.16,1.82,6.37,3.1,9.19c0.05,0.1,0.1,0.2,0.14,0.31l10.59,29.2l0,0L93.09,97.99L93.09,97.99z"/></g></svg>
    <p class="preset-text">Sprzątanie</p>`,
    states: [[0,19,0,1,0,1],[0,19,0,1,0,1],[0,19,0,1,1],[0,19,0,1,1],[0,0,1]]
    },
    {
    name: "outside",
    id: "preset3",
    code: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 390 511.815"><path d="M24.983 197.869h16.918v-39.203c0-43.387 17.107-82.959 44.667-111.698C114.365 18 152.726 0 194.998 0c42.259 0 80.652 17.981 108.41 46.968 27.58 28.739 44.692 68.292 44.692 111.698v39.203h16.917c13.738 0 24.983 11.245 24.983 24.984v263.978c0 13.739-11.245 24.984-24.983 24.984H24.983C11.226 511.815 0 500.57 0 486.831V222.853c-.013-13.739 11.226-24.984 24.983-24.984zm149.509 173.905l-26.968 70.594h94.923l-24.966-71.573c15.852-8.15 26.688-24.67 26.688-43.719 0-27.169-22.015-49.169-49.184-49.169-27.153 0-49.153 22-49.153 49.169-.016 19.826 11.737 36.905 28.66 44.698zM89.187 197.869h211.602v-39.203c0-30.858-12.024-58.823-31.376-79.005-19.147-19.964-45.49-32.368-74.428-32.368-28.925 0-55.288 12.404-74.422 32.368-19.37 20.182-31.376 48.147-31.376 79.005v39.203z"/></svg>
    <p class="preset-text">Poza domem</p>`,
    states: [[0,19,0,0,0,0],[0,19,0,0,0,0],[0,19,0,0,0],[0,20,0,0,0],[1,1,0]]
    },
    {
    name: "party",
    id: "preset4",
    code: 
            `<p class="preset-text">Impreza</p>`,
    states: [[1,19,1,1,0,1],[1,18,1,1,0,1],[1,18,1,1,1],[1,19,1,1,1],[0,0,0]]
    },
    {
    name: "guests",
    id: "preset5",
    code: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 64.97"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>friends-group</title><path class="cls-1" d="M16.59,25.38c-5,.21-10.13,4.52-13.16,10.93A26.58,26.58,0,0,0,.88,46.92a80.56,80.56,0,0,0-.88,12c1,6.16,8.79,4.34,9.46,0l.95-12.42a13.68,13.68,0,0,1,1-4.93,8.18,8.18,0,0,1,1.29-2.15l.46,22.69L12.93,64H34.42l-.29-2.11.42-25a16.82,16.82,0,0,1,5.88-1.36q-.24.47-.48,1a27.81,27.81,0,0,0-2.67,11.14,84.62,84.62,0,0,0-.93,12.62c1,6.47,9.23,4.56,9.93,0l1-13A14.38,14.38,0,0,1,48.36,42a9,9,0,0,1,1.36-2.26l.49,22.63-.33,2.32H72.54l-.35-2.55.35-19.31v.4l.08-3.49A9.33,9.33,0,0,1,74,42a14.38,14.38,0,0,1,1.08,5.18l1,13c1,6.22,9.93,6.35,9.93,0a84.59,84.59,0,0,0-.92-12.62,28,28,0,0,0-2.68-11.14c-.16-.33-.31-.65-.47-1a16.38,16.38,0,0,1,6.42,1.37l.42,25L88.46,64H110l-.27-1.89.47-22.69a8.18,8.18,0,0,1,1.29,2.15,13.68,13.68,0,0,1,1,4.93l1,12.42c.67,4.34,8.48,6.16,9.46,0a80.56,80.56,0,0,0-.88-12,26.58,26.58,0,0,0-2.55-10.61c-3-6.41-8.2-10.72-13.16-10.93A164.55,164.55,0,0,0,81,25c-3.38.26-6.79.49-9.19.83a16.61,16.61,0,0,0-3.34-.71c-4-.33-10.62,0-14.59-.08a18.41,18.41,0,0,0-3.21.72c-2.37-.33-5.56-.6-8.73-.76a225.25,225.25,0,0,0-25.32.34ZM99.29,1.3a11.14,11.14,0,1,0,11.14,11.14A11.13,11.13,0,0,0,99.29,1.3ZM61.2,0A11.7,11.7,0,1,1,49.51,11.69,11.7,11.7,0,0,1,61.2,0ZM23.58,1.3A11.14,11.14,0,1,1,12.45,12.44,11.14,11.14,0,0,1,23.58,1.3Z"/></svg>
    <p class="preset-text">Goście</p>`,
    states: [[1,20,0,1,1,0],[0,19,0,0,0,0],[1,19,0,1,0],[1,20,0,1,0],[0,0,0]]
    },
    {
    name: "chill",
    id: "preset6",
    code: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 427 512.11">
    <path fill-rule="nonzero" d="M32.03 484.7a8.863 8.863 0 0 1 2.44 4.79c5.78 4.45 13.46 7.22 23.06 7.22h350.26c1.06 0 2.01-.42 2.69-1.1l.03-.03c.67-.67 1.09-1.62 1.09-2.68v-67.38c-.3-.3-.58-.61-.84-.95H57.53c-17.51 0-28.66 9.24-33.48 21.06-1.92 4.71-2.88 9.86-2.88 15.02 0 2.41.21 4.83.63 7.19 2.32 6.58 5.72 12.29 10.23 16.86zm288.24-194.2-35.73-34.28-7.54 46.32c-.13.89-.42 1.82-.84 2.63-.43.8-1.02 1.56-1.78 2.2a7.89 7.89 0 0 1-5.6 1.82 7.85 7.85 0 0 1-5.26-2.67l-54.58-64.67-50.42 45.57v42.22c0 .8.28 1.53.75 2.1l.24.22c.61.61 1.44.99 2.33.99h186.53c.79 0 1.53-.3 2.12-.78l.2-.22c.62-.61 1-1.44 1-2.31v-71.99l-28.28 32.55c-.34.56-.98.9-1.65.9-.6 0-1.1-.21-1.49-.6zm-161.75-23.99c15.2-13.95 30.71-28.7 46.13-41.66 1.57-1.35 3.52-1.95 5.39-1.82 1.94.09 3.85.93 5.25 2.46l.05.09c.08.08.17.16.25.29l48.83 57.77 7.25-44.55a7.76 7.76 0 0 1 3.09-4.87c1.56-1.1 3.56-1.7 5.63-1.36l.21.04c.73.13 1.45.39 2.08.68.72.34 1.35.81 1.95 1.36l36.96 35.39 30.1-36.11V97.25c0-.89-.38-1.72-.99-2.33-.6-.61-1.43-.99-2.33-.99H161.84a3.3 3.3 0 0 0-2.34.95l-.03.03c-.59.58-.95 1.42-.95 2.34v169.26zm126.32-94.13c3.01 0 5.98.64 8.65 1.75 2.8 1.13 5.3 2.83 7.37 4.91 2.08 2.08 3.77 4.58 4.96 7.37 1.1 2.67 1.7 5.64 1.7 8.65 0 3.01-.64 5.97-1.7 8.65a22.607 22.607 0 0 1-4.91 7.37 22.545 22.545 0 0 1-7.38 4.91c-2.67 1.15-5.59 1.74-8.64 1.74-3.01 0-5.98-.63-8.65-1.74-2.8-1.14-5.26-2.84-7.37-4.91a23.227 23.227 0 0 1-4.96-7.37c-1.11-2.68-1.7-5.6-1.7-8.65 0-3.01.64-5.98 1.7-8.65a22.45 22.45 0 0 1 4.91-7.37c2.07-2.08 4.58-3.78 7.38-4.91 2.67-1.15 5.59-1.75 8.64-1.75zm6.83 15.89a9.972 9.972 0 0 0-3.14-2.11c-1.1-.47-2.37-.72-3.69-.72-1.31 0-2.54.25-3.69.72-1.18.5-2.24 1.23-3.13 2.07-.89.89-1.61 1.96-2.07 3.14a9.417 9.417 0 0 0-.73 3.69c0 1.27.25 2.54.73 3.68.5 1.19 1.22 2.25 2.07 3.14.89.89 1.95 1.61 3.13 2.12 1.11.47 2.38.72 3.69.72 1.28 0 2.55-.25 3.69-.72a10.78 10.78 0 0 0 3.14-2.07c.89-.9 1.61-1.95 2.11-3.14a9.6 9.6 0 0 0 .73-3.69c0-1.27-.26-2.54-.73-3.69-.5-1.18-1.22-2.24-2.11-3.14zM161.84 78.53h186.53c5.16 0 9.84 2.12 13.22 5.5 3.39 3.39 5.5 8.09 5.5 13.22v232.39c0 5.12-2.12 9.81-5.51 13.2l-.55.5c-3.34 3.1-7.8 5.01-12.66 5.01H161.84c-5.13 0-9.83-2.11-13.22-5.5l-.51-.56c-3.09-3.34-4.99-7.8-4.99-12.65V97.25c0-5.12 2.11-9.8 5.49-13.2l.03-.03c3.42-3.39 8.08-5.49 13.2-5.49zM41.88 475.34h351.54v8.4H45.88a44.361 44.361 0 0 1-4-8.4zm4-37.8a44.159 44.159 0 0 0-4 8.41h351.54v-8.41H45.88zm-6.34 18.89c-.26 2.81-.26 5.61 0 8.42h353.88v-8.42H39.54zm-17.66 42.68a9 9 0 0 1-2.62-1.85c-6.47-6.55-11.28-14.65-14.48-23.9-3.2-9.25-4.78-19.55-4.78-30.5V79.46C0 57.8 8.72 38.63 22.83 24.51 37.14 10.2 57.05 1.13 79.04.04h12.02c.26-.02.52-.04.79-.04.26 0 .52.02.78.04L417.93 0a8.98 8.98 0 0 1 8.98 8.98v410.17c0 .59-.06 1.16-.16 1.72.16.86.25 1.74.25 2.65v69.38c0 5.25-2.15 10.04-5.62 13.53l-.03.03c-3.51 3.49-8.3 5.65-13.56 5.65H57.53c-15.23 0-27.11-5.08-35.65-13zm387.06-89.94V17.97H100.83v391.2h308.11zm-326.08 0V17.97h-3.4c-17.2.94-32.75 8.07-43.93 19.24-10.86 10.86-17.56 25.6-17.56 42.25v346.82c8.64-10.22 21.84-17.11 39.56-17.11h25.33z"/>
    </svg>
    <p class="preset-text">Relaks</p>`,
    states: [[1,21,1,1,0,1],[0,20,1,0,0,0],[0,20,1,0,1],[0,21,1,0,0],[0,0,0]]
    },
    
]

// CREATE OUTPUT STATES
function createOutput (out) {
    const room = document.createElement("div");
    room.classList.add(`room`);
    room.setAttribute("id", roomIDs[out]);
    const name = document.createElement("div");
    name.classList.add(`room-name`)
    name.innerHTML = roomNames[out];
    room.append(name);
    const container = document.createElement("div");
    container.classList.add(`output-container`);
    let temp = out.toString();

    if(out < 4)
    {
        for(let i = 0; i < 6; i++)
        {
        const output = document.createElement("div");
        output.classList.add("output");
        const outName = document.createElement("div");
        outName.classList.add(`output-name`);
        outName.innerHTML = outNames[i];
        output.append(outName);
        const outValue = document.createElement("div");
        outValue.classList.add(`output-value`);
        outValue.setAttribute("id", temp + i);
        outValue.innerHTML = 0;
        output.append(outValue);
        container.append(output);
        }
    }
    else if(out == 4)
    {
        for(let i = 0; i < 3; i++)
        {
        container.setAttribute("id", "rest")
        const output = document.createElement("div");
        output.classList.add("output");
        const outName = document.createElement("div");
        outName.classList.add(`output-name`);
        outName.innerHTML = outNames[i + 6];
        output.append(outName);
        const outValue = document.createElement("div");
        outValue.classList.add(`output-value`);
        outValue.setAttribute("id", temp + i);
        outValue.innerHTML = 0;
        output.append(outValue);
        container.append(output);
        }
    }

    if(out > 1 && out < 4){
        container.removeChild(container.lastElementChild);
    }
    room.append(container);
    stateOutput.append(room)
}

for(let i = 0; i < 5; i++){
    createOutput(i);
}

// GET ALL STATES
let sa0 = document.getElementById("00");
let sa1 = document.getElementById("01");
let sa2 = document.getElementById("02");
let sa3 = document.getElementById("03");
let sa4 = document.getElementById("04");
let sa5 = document.getElementById("05");

let sy0 = document.getElementById("10");
let sy1 = document.getElementById("11");
let sy2 = document.getElementById("12");
let sy3 = document.getElementById("13");
let sy4 = document.getElementById("14");
let sy5 = document.getElementById("15");

let ku0 = document.getElementById("20");
let ku1 = document.getElementById("21");
let ku2 = document.getElementById("22");
let ku3 = document.getElementById("23");
let ku4 = document.getElementById("24");

let la0 = document.getElementById("30");
let la1 = document.getElementById("31");
let la2 = document.getElementById("32");
let la3 = document.getElementById("33");
let la4 = document.getElementById("34");

let po0 = document.getElementById("40");
let po1 = document.getElementById("41");
let po2 = document.getElementById("42");

let states = [[sa0,sa1,sa2,sa3,sa4,sa5],[sy0,sy1,sy2,sy3,sy4,sy5],[ku0,ku1,ku2,ku3,ku4],[la0,la1,la2,la3,la4],[po0,po1,po2]];


// DISPLAY PRESETS ON SMART PANEL
function addPresetToScreen (obj, i) {
    if(presets[0] != null){
    const element = document.createElement("div");
    element.classList.add("preset");
    element.setAttribute("id", i);
    element.innerHTML = obj.code;
    controls.append(element);
    }
}

// CHANGE STATES ACCODRING TO SELECTED PRESET
function writeState (element) {
    if(presets[0] != null){
    for(let i = 0; i < 5; i++)
    {       
        if(i < 2)
        {
        for(let j = 0; j < 6; j++)
        {
            states[i][j].innerHTML = presets[element].states[i][j]
        }
        }
        else if(i > 3)
        {
            for(let j = 0; j < 3; j++)
        {
            states[i][j].innerHTML = presets[element].states[i][j]
        }
        }
        else
        {
            for(let j = 0; j < 5; j++)
        {
            states[i][j].innerHTML = presets[element].states[i][j]
        }
        }
    }
}
}

function preset1Site (){
    controls.style.flexDirection ="column";
    controls.style.flexWrap = "nowrap";
    controls.style.alignItems = "center";
    controls.style.justifyContent = "space-between"
    

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("new-name");
    const name = document.createElement("p");
    name.classList.add("preset-name");
    name.innerHTML = "Nazwa Presetu";
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("name-input");
    nameContainer.append(name,input);

    const svgContainer = document.createElement("div");
    svgContainer.classList.add("svg-container");

    controls.append(nameContainer,svgContainer);
}

function preset2Site (){

    for(let i = 0; i < 5; i++){
        if(i == 4)
        {
            const container = document.createElement("div");
            container.classList.add("addPresetContainer-bottom");
            container.setAttribute("id", "preset-container"+i);
            const roomName = document.createElement("div");
            roomName.classList.add("addPresetRoom-name");
            roomName.innerHTML = roomNames[i];
            const body = document.createElement("div");
            body.classList.add("containerBottomBody");
            body.setAttribute("id", "containerBody"+i);
            for(let j = 0; j < 3; j++)
            {
                const element = document.createElement("div");
                element.classList.add("output");
                const name = document.createElement("div");
                name.classList.add("output-name")
                const value = document.createElement("div");
                value.classList.add("output-value")
                element.append(name,value);
                body.append(element) 
            }

            container.append(roomName,body);
            controls.append(container)
        }
        else
        {
            const container = document.createElement("div");
            container.classList.add("addPreset-container");
            container.setAttribute("id", "preset-container"+i);
            const roomName = document.createElement("div");
            roomName.classList.add("addPresetRoom-name");
            roomName.innerHTML = roomNames[i];
            const body = document.createElement("div");
            body.classList.add("containerBody");
            body.setAttribute("id", "containerBody"+i);
            for(let j = 0; j < 6; j++)
            {
                const element = document.createElement("div");
                element.classList.add("output");
                const name = document.createElement("div");
                name.classList.add("output-name")
                const value = document.createElement("div");
                value.classList.add("output-value")
                element.append(name,value);
                body.append(element)
            }
            if(i > 1 && i < 4)
            {
                body.removeChild(body.lastElementChild);
            }
            container.append(roomName,body);
            controls.append(container)
        }
    }
}

function controlsStarter(){
    controls.style.flexWrap = "wrap";
    controls.style.flexDirection ="row";
    controls.style.justifyContent ="space-around"
}




// BUTTON FUNCTIONS
function menuButtons (number){
    if(number == 0 || number == 1){
        nav.innerHTML = ` <button id="previous">Wstecz</button>
        <button id="next">Dalej</button>`
        const previous = document.getElementById("previous")
        const next = document.getElementById("next")
        previous.addEventListener("click", () => 
        {   
            controlsStarter()
            controls.innerHTML = ""
        start();
        });
        next.addEventListener("click", () => {
            controls.innerHTML = ""
            if(number == 0){
                controlsStarter()
                preset2Site();
                menuButtons(10);
            }
            
        })
    }
    else if(number > 1 && number < 5)
    {
        nav.innerHTML = `<button id="end">Zakończ</button>`
        const end = document.getElementById("end")
        end.addEventListener("click", () => {
            controls.innerHTML = ""
            checkMain = 0;
            start();
        });     
    }
    else if(number == 10)
    {
        nav.innerHTML = ` <button id="previous">Wstecz</button>
        <button id="end">Zakończ</button>`
        const previous = document.getElementById("previous")
        const end = document.getElementById("end")
        previous.addEventListener("click", () => 
        {   
            controls.innerHTML = ""
            preset1Site();
            menuButtons(0);
        });
        end.addEventListener("click", () => 
        {   
            presets.push({name:"new"})
            controls.innerHTML = ""
            start();
        });
    }
 



}

