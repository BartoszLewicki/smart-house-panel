"use strict"

let checkMain = false;
let presetName;
let inputValue = "";
let iconNumber = -1;
let temp;
let checkPreset = false;
let tempArr =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let tempIndex;

const stateOutput = document.getElementById("right-half");
const screen = document.querySelector("#screen");
const controls = document.querySelector("#controls");
const nav = document.querySelector("nav");

const presetNamesPL = ["Dzień", "Noc", "Sprzątanie", "Poza domem", "Impreza", "Goście", "Relaks"];
const roomNames = ["Salon", "Sypialnia", "Kuchnia", "Łazienka", "Pozostałe"];
const roomIDs = ["living-room", "bedroom", "kitchen", "bathroom", "house"];
const outNames = ["Light", "Temp", "Blinds", "Socket", "Tv", "Sound", "Alarm", "Garage", "Clean"];

const svgArray = [`<svg class="svgIcon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>`, 
`<svg version="1.1" class="svgIcon" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z M51.86,5.2c-0.64,0.11-1.28,0.23-1.91,0.36l-1.01,0.22l0,0c-0.29,0.07-0.63,0.14-1,0.23 c-14.88,3.61-27.05,12.83-34.7,24.92C5.61,42.98,2.46,57.88,5.56,72.94c3.18,15.43,12.31,28.11,24.51,36.15 c12.19,8.03,27.45,11.41,42.88,8.23c15-3.09,27.41-11.81,35.46-23.49c6.27-9.09,9.9-19.98,10.09-31.41 c-2.27,4.58-5.3,8.76-8.96,12.34c-6,5.86-13.69,10.13-22.51,11.95l-0.01,0c-12.26,2.52-24.38-0.16-34.07-6.54 c-9.68-6.38-16.93-16.45-19.45-28.7l0-0.01C31.25,40.58,33.1,29.82,38,20.77C41.32,14.63,46.05,9.27,51.86,5.2L51.86,5.2z"/></g></svg>`, 
`<svg version="1.1" class="svgIcon" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 121.58" style="enable-background:new 0 0 122.88 121.58" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M10.28,98.77c5.06,0,9.16,3.82,9.16,8.53c0,4.71-4.1,8.53-9.16,8.53c-5.06,0-9.17-3.82-9.17-8.53 C1.11,102.59,5.22,98.77,10.28,98.77L10.28,98.77z M93.09,97.99l0.01,0.03l1.38-0.44c3.99,10.75,6.25,15.3,17.91,16.5h10.48v7.5 H89.39v-7.5h1.14l-3.89-13.98l1.08-0.35l-14.3-36.82l-0.02-0.06l0,0L62.83,33.76c-1.49-3.28-2.45-6.65-3.4-9.96 C57.4,16.68,55.45,9.85,48.69,7.35c-1.25-0.46-2.66-0.83-4.21-1.1c-1.63-0.29-3.37-0.47-5.23-0.56c-5.22-0.25-10.36,1.11-14.6,4.17 c-3.86,2.78-6.99,7.01-8.76,12.74c-1.75,5.67-2.61,10.38-1.82,14.49c0.76,3.95,3.12,7.56,7.82,11.25c0.15,0.12,0.36,0.3,0.58,0.48 c0.29,0.24,0.59,0.5,0.82,0.63c2.93,1.7,5.98,3.17,8.95,4.61c0.51,0.25,1.02,0.49,1.53,0.74c0.69,0.33,1.41,0.67,2.1,1 c7.59,3.6,12.26,5.81,13.58,15.97c0.26,1.96,0.24,3.86-0.01,5.69c18.44,6.65,30.97,18.74,36.03,38.68H22.59 c3.29-4.42,4.34-9.96,2.29-14.87c-3.32-7.95-13.51-11.27-22.76-7.4C1.38,94.15,0.68,94.49,0,94.87V70.66 c1.85,0.01,3.69,0.04,5.5,0.09v-6.72c0-0.65,0.53-1.18,1.18-1.18h10.1c0.65,0,1.18,0.53,1.18,1.18v7.26 c9.51,0.74,18.2,2.15,25.99,4.39c0.07-1.03,0.04-2.09-0.1-3.18c-0.92-7.1-4.53-8.81-10.39-11.59c-0.67-0.32-1.36-0.65-2.14-1.02 c-0.51-0.25-1.02-0.49-1.53-0.74c-3.07-1.48-6.22-3-9.33-4.81c-0.68-0.39-1.17-0.81-1.64-1.21c-0.12-0.1-0.24-0.2-0.42-0.34 c-5.87-4.61-8.87-9.31-9.88-14.64c-0.99-5.17-0.03-10.71,1.98-17.22c2.16-6.99,6.05-12.19,10.87-15.67 c5.3-3.83,11.71-5.54,18.16-5.23c2.16,0.1,4.14,0.31,5.94,0.63c1.88,0.33,3.6,0.79,5.18,1.37c9.47,3.51,11.81,11.68,14.24,20.21 c0.9,3.16,1.82,6.37,3.1,9.19c0.05,0.1,0.1,0.2,0.14,0.31l10.59,29.2l0,0L93.09,97.99L93.09,97.99z"/></g></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 390 511.815"><path d="M24.983 197.869h16.918v-39.203c0-43.387 17.107-82.959 44.667-111.698C114.365 18 152.726 0 194.998 0c42.259 0 80.652 17.981 108.41 46.968 27.58 28.739 44.692 68.292 44.692 111.698v39.203h16.917c13.738 0 24.983 11.245 24.983 24.984v263.978c0 13.739-11.245 24.984-24.983 24.984H24.983C11.226 511.815 0 500.57 0 486.831V222.853c-.013-13.739 11.226-24.984 24.983-24.984zm149.509 173.905l-26.968 70.594h94.923l-24.966-71.573c15.852-8.15 26.688-24.67 26.688-43.719 0-27.169-22.015-49.169-49.184-49.169-27.153 0-49.153 22-49.153 49.169-.016 19.826 11.737 36.905 28.66 44.698zM89.187 197.869h211.602v-39.203c0-30.858-12.024-58.823-31.376-79.005-19.147-19.964-45.49-32.368-74.428-32.368-28.925 0-55.288 12.404-74.422 32.368-19.37 20.182-31.376 48.147-31.376 79.005v39.203z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/></svg>`,
`<svg class="svgIcon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 64.97"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>friends-group</title><path class="cls-1" d="M16.59,25.38c-5,.21-10.13,4.52-13.16,10.93A26.58,26.58,0,0,0,.88,46.92a80.56,80.56,0,0,0-.88,12c1,6.16,8.79,4.34,9.46,0l.95-12.42a13.68,13.68,0,0,1,1-4.93,8.18,8.18,0,0,1,1.29-2.15l.46,22.69L12.93,64H34.42l-.29-2.11.42-25a16.82,16.82,0,0,1,5.88-1.36q-.24.47-.48,1a27.81,27.81,0,0,0-2.67,11.14,84.62,84.62,0,0,0-.93,12.62c1,6.47,9.23,4.56,9.93,0l1-13A14.38,14.38,0,0,1,48.36,42a9,9,0,0,1,1.36-2.26l.49,22.63-.33,2.32H72.54l-.35-2.55.35-19.31v.4l.08-3.49A9.33,9.33,0,0,1,74,42a14.38,14.38,0,0,1,1.08,5.18l1,13c1,6.22,9.93,6.35,9.93,0a84.59,84.59,0,0,0-.92-12.62,28,28,0,0,0-2.68-11.14c-.16-.33-.31-.65-.47-1a16.38,16.38,0,0,1,6.42,1.37l.42,25L88.46,64H110l-.27-1.89.47-22.69a8.18,8.18,0,0,1,1.29,2.15,13.68,13.68,0,0,1,1,4.93l1,12.42c.67,4.34,8.48,6.16,9.46,0a80.56,80.56,0,0,0-.88-12,26.58,26.58,0,0,0-2.55-10.61c-3-6.41-8.2-10.72-13.16-10.93A164.55,164.55,0,0,0,81,25c-3.38.26-6.79.49-9.19.83a16.61,16.61,0,0,0-3.34-.71c-4-.33-10.62,0-14.59-.08a18.41,18.41,0,0,0-3.21.72c-2.37-.33-5.56-.6-8.73-.76a225.25,225.25,0,0,0-25.32.34ZM99.29,1.3a11.14,11.14,0,1,0,11.14,11.14A11.13,11.13,0,0,0,99.29,1.3ZM61.2,0A11.7,11.7,0,1,1,49.51,11.69,11.7,11.7,0,0,1,61.2,0ZM23.58,1.3A11.14,11.14,0,1,1,12.45,12.44,11.14,11.14,0,0,1,23.58,1.3Z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M480 288c-50.1 0-93.6 28.8-114.6 70.8L132.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C535.8 297.6 509 288 480 288zM113.3 151.9L354.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3H357c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L152.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32c-6.3-6.3-9.7-14.9-9.4-23.8s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8c-24-24-37.5-56.6-37.5-90.5v-2.7c0-22.8 6.1-44.9 17.3-64.3zM480 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/></svg>`,
`<svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M493.7 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>`
];

const outputSvg = []



// STARTING PRESETS ARRAY
const presets = [
    {
    name: "day",
    id: "preset0",
    code: 
    `${svgArray[0]}
    <p class="preset-text">${presetNamesPL[0]}</p>`,
    states: [[0,21,0,1,0,1],[0,20,0,0,0,0],[0,20,0,1,1],[0,21,0,0,0],[0,0,0]]
    },
    {
    name: "night",
    id: "preset1",
    code: `${svgArray[1]}
    <p class="preset-text">${presetNamesPL[1]}</p>`,
    states: [[0,18,1,0,0,0],[1,18,1,1,0,1],[0,18,1,0,0],[1,20,1,0,0],[1,0,0]]
    },
        {
    name: "clean",
    id: "preset2",
    code: `${svgArray[2]}
    <p class="preset-text">${presetNamesPL[2]}</p>`,
    states: [[0,19,0,1,0,1],[0,19,0,1,0,1],[0,19,0,1,1],[0,19,0,1,1],[0,0,1]]
    },
    {
    name: "outside",
    id: "preset3",
    code: `${svgArray[3]}
    <p class="preset-text">${presetNamesPL[3]}</p>`,
    states: [[0,19,0,0,0,0],[0,19,0,0,0,0],[0,19,0,0,0],[0,20,0,0,0],[1,1,0]]
    },
    {
    name: "party",
    id: "preset4",
    code: `${svgArray[4]}
            <p class="preset-text">${presetNamesPL[4]}</p>`,
    states: [[1,19,1,1,0,1],[1,18,1,1,0,1],[1,18,1,1,1],[1,19,1,1,1],[0,0,0]]
    },
    {
    name: "guests",
    id: "preset5",
    code: `${svgArray[5]}
    <p class="preset-text">${presetNamesPL[5]}</p>`,
    states: [[1,20,0,1,1,0],[0,19,0,0,0,0],[1,19,0,1,0],[1,20,0,1,0],[0,0,0]]
    },
    {
    name: "chill",
    id: "preset6",
    code: `${svgArray[6]}
    <p class="preset-text">${presetNamesPL[6]}</p>`,
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

function printPresets(){
    for(let i = 0, length = presets.length; i < length; i ++)
{
    addPresetToScreen(presets[i], i);
}}

// CHANGE STATES ACCODRING TO SELECTED PRESET
function writeState (element) {
    tempArr = presets[element].states.flat();
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

    for(let i = 0, length = svgArray.length; i<length; i++)
    {
        const box = document.createElement("div")
        box.classList.add("svgBox");
        box.innerHTML = svgArray[i];
        svgContainer.append(box);
    }
    controls.append(nameContainer,svgContainer);

    const boxes = document.querySelectorAll(".svgBox");
    const icons = document.querySelectorAll(".svgIcon");
    boxes.forEach((box, index) => {

        box.addEventListener("click", () => {
            if(iconNumber != -1){
            icons[iconNumber].style.fill = "white"}
            iconNumber = index;
            icons[index].style.fill = "#25dfb1";
        })
    })
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
                name.innerHTML = outNames[j + 6]
                const value = document.createElement("div");
                value.classList.add("output-value", "out-val")
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
                name.innerHTML = outNames[j];
                const value = document.createElement("div");
                value.classList.add("output-value", "out-val")
                element.append(name,value);
                body.append(element);
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

function editPresetValues(type, i){
    const box = document.querySelectorAll(".out-val")
    if(type === "edit" || type === "add"){
        tempArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
    if(type === "edit"){
        tempArr = presets[i].states.flat();
    }

    let forNow = states.flat();

    box.forEach((element, index, arr) => {
        if(type === "add"){
            element.value = 0;
            element.innerHTML = 0;
        
        if(index == 1 || index == 7 || index == 13 || index == 18){
            tempArr[index] = 15;
            element.value = 15;
            element.innerHTML = 15;
        }}

        if(type === "edit" || type === "manual"){
            arr[index].value = tempArr[index];
            arr[index].innerHTML = tempArr[index];
        }


        element.addEventListener('click', () => {
            if(element.value == 0){
                element.value =1
            }else if(element.value ==1){
                element.value = 0
            }
            element.innerHTML = element.value
            tempArr[index] = arr[index].value

            if(type === "manual"){
                for(let j = 0; j < forNow.length; j++){
                    forNow[j].innerHTML = tempArr[j]
                }
            }
        })
    })
    
}




function controlsStarter(){
    controls.style.flexWrap = "wrap";
    controls.style.flexDirection ="row";
    controls.style.justifyContent ="space-around"
}



function modal()
{
    const modalWindow = document.createElement("div");
    modalWindow.classList.add("modalWindow");
    controls.append(modalWindow);
    const modalText = document.createElement("p");
    modalText.classList.add("modalText");
    modalWindow.append(modalText);
}

function presetToEdit()
{
    controls.innerHTML = "";
            controls.style.justifyContent = "flex-start"
            menuButtons(1);
            printPresets()
            tempIndex = 0;
            const elements = document.querySelectorAll(".preset");
                elements.forEach((element, i, arr) => {
                element.addEventListener("click", () => {
                temp = presets[i].states;
                checkPreset = true;
                arr[tempIndex].firstChild.style.fill = "white"
                arr[i].firstChild.style.fill = "#25dfb1"
                arr[tempIndex].lastChild.style.color = "white"
                arr[i].lastChild.style.color = "#25dfb1"    
                tempIndex = i;
        })
    })
}


// BUTTON FUNCTIONS
function menuButtons (number){
    if(number == 0 || number == 1){
        nav.innerHTML = ` <button id="previous">Wstecz</button>
        <button id="next">Dalej</button>`
        const previous = document.getElementById("previous");
        const next = document.getElementById("next");
        previous.addEventListener("click", () => 
        {   
            controlsStarter()
            controls.innerHTML = ""
            start();
            checkPreset = false;
        });
        next.addEventListener("click", () => {
            if(document.querySelector(".name-input"))
            {
            inputValue = document.querySelector(".name-input").value;
            }
                controls.innerHTML = ""
                if(number == 0 && (inputValue == "" || iconNumber == -1))
                {
                    modal()
                    let modalText = document.querySelector(".modalText");
                    if(inputValue == "" && iconNumber == -1){
                        modalText.innerHTML = "Nie podano nazwy presetu i nie wybrano ikony<br><br><br><br>Proszę wybrać nazwę presetu oraz zaznaczyć odpowiednią ikonę"
                        menuButtons(100)
                    }
                    else if(inputValue == "" && iconNumber != -1)
                    {
                        modalText.innerHTML = "Nie podano nazwy presetu<br><br><br><br>Proszę wpisać nazwę presetu w odpowiednim polu"
                        menuButtons(100)
                    }
                    else if(inputValue != "" && iconNumber == -1)
                    {
                        modalText.innerHTML = "Nie wybrano ikony presetu<br><br><br><br>Proszę zaznaczyć odpowiednią ikonę"
                        menuButtons(100)
                    }
                }

                if(number == 1 && checkPreset == false)
                {
                    modal();
                    let modalText = document.querySelector(".modalText");
                    modalText.innerHTML = "Nie wybrano presetu do edycji<br><br><br><br>Proszę zaznaczyć preset"
                    controls.style.justifyContent = "center";
                    menuButtons(101)
                }

                if((number == 1 && checkPreset == true) || (number == 0 && inputValue != "" && iconNumber != -1))
                {
                controlsStarter()
                preset2Site();
                
                if(number == 0)
                {
                    menuButtons(10);
                    editPresetValues("add");
                }
                else if(number == 1)
                {
                    inputValue = ""
                    menuButtons(20);
                    editPresetValues("edit", tempIndex);
                }
            }
        
        })
    }
    else if(number > 1 && number < 5)
    {
        nav.innerHTML = `<button id="end">Zakończ</button>`
        const end = document.getElementById("end")
        end.addEventListener("click", () => {
            controls.innerHTML = ""
            checkMain = false;
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
            iconNumber = -1;
            preset1Site();
            menuButtons(0);
        });
        end.addEventListener("click", () => 
        {   
            presetNamesPL.push(inputValue);
            let properArr = [[],[],[],[],[]]
            for(let i = 0; i <tempArr.length; i++){
                if(i<6)
                properArr[0].push(tempArr[i])
                if(i>5 && i<12)
                properArr[1].push(tempArr[i])
                if(i>11 && i<17)
                properArr[2].push(tempArr[i])
                if(i>16 && i<22)
                properArr[3].push(tempArr[i])
                if(i>21)
                properArr[4].push(tempArr[i])        
            }
            presets.push({code:`${svgArray[iconNumber]} <p class="preset-text">${presetNamesPL[presetNamesPL.length-1]}</p>`, states:properArr})
            controls.innerHTML = ""
            iconNumber = -1;
            start();
        });
    }
    else if(number == 20)
    {
        nav.innerHTML = ` <button id="previous">Wstecz</button>
        <button id="end">Zakończ</button>`
        const previous = document.getElementById("previous")
        const end = document.getElementById("end")
        previous.addEventListener("click", () => 
        {   
            presetToEdit();
            checkPreset = false;
        });
        end.addEventListener("click", () => 
        {   
            let properArr = [[],[],[],[],[]]
            for(let i = 0; i <tempArr.length; i++){
                if(i<6)
                properArr[0].push(tempArr[i])
                if(i>5 && i<12)
                properArr[1].push(tempArr[i])
                if(i>11 && i<17)
                properArr[2].push(tempArr[i])
                if(i>16 && i<22)
                properArr[3].push(tempArr[i])
                if(i>21)
                properArr[4].push(tempArr[i])        
            }
                presets[tempIndex].states = properArr;
            controls.innerHTML = ""
            start();
            checkPreset = false;
        });
    }
    else if(number == 100)
    {
        nav.innerHTML = ` <button id="previous">Wstecz</button>`
        const previous = document.getElementById("previous");
        previous.addEventListener("click", () => 
        {  
            controls.innerHTML = ""
            preset1Site();
            menuButtons(0);
            inputValue = "";
            iconNumber = -1;
        });
    }
    else if(number == 101)
    {
        nav.innerHTML = ` <button id="previous">Wstecz</button>`
        const previous = document.getElementById("previous");
        previous.addEventListener("click", () => 
        {  
            controls.innerHTML = ""
            presetToEdit()
            menuButtons(1);
            checkPreset = false
        });
    }


}

