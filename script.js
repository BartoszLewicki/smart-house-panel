"use strict"

let screen = document.querySelector("#screen");
let controls = document.querySelector("#controls");
let addPreset = document.querySelector("#addPreset");
let roomArray = [];
let switchArray = [];


for(let i = 0, length = presets.length; i < length; i ++)
{
    addPresetToScreen(presets[i]);
}

const preset = document.querySelectorAll(".preset");


for(let element = 0; element < preset.length; element++)
{
    preset[element].addEventListener('click', function(){
        writeState(element)
    })
}









addPreset.addEventListener("click",() => {

    controls.style.justifyContent = "space-around";

    for(let i = 0; i < 5; i++)
    {
        if(i == 4)
        {
        roomArray[i] =  
        `<div class="container-bottom" id="container${i}"> 
        <div class="addPresetRoom-name">${roomNames[i]}</div>
        <div class="containerBottomBody"></div> 
        </div>`; 
        }
        else
        {
        roomArray[i] = 
        `<div class="container" id="container${i}"> 
        <div class="addPresetRoom-name">${roomNames[i]}</div>
        <div class="containerBody" id="containerBody${i}"></div> 
        </div>`;  
        }     
        console.log(roomArray[i])
    }

    controls.innerHTML = roomArray[0] + roomArray[1] + roomArray[2] + roomArray[3] + roomArray[4];
    let addContainerBody1 = document.querySelector("#containerBody0");
    let addContainerBody2 = document.querySelector("#containerBody1");
    let addContainerBody3 = document.querySelector("#containerBody2");
    let addContainerBody4 = document.querySelector("#containerBody3");
    let addContainerBottomBody = document.querySelector(".containerBottomBody");

    for (let i = 0; i < 4; i++)
    {
        
        switchArray[i] = 
        `<div class="output id="output${i}1">
        <div class="output-name" id="output-name${i}1"></div>
        <div class="output-value" id="output-value${i}1"></div>
        </div>
        <div class="output id="output${i}2">
        <div class="output-name" id="output-name${i}2"></div>
        <div class="output-value" id="output-value${i}2"></div>
        </div>
        <div class="output id="output${i}3">
        <div class="output-name" id="output-name${i}3"></div>
        <div class="output-value" id="output-value${i}3"></div>
        </div>
        <div class="output id="output${i}4">
        <div class="output-name" id="output-name${i}4"></div>
        <div class="output-value" id="output-value${i}4"></div>
        </div>
        <div class="output id="output${i}5">
        <div class="output-name" id="output-name${i}5"></div>
        <div class="output-value" id="output-value${i}5"></div>
        </div>`;

        if(i<2){
        switchArray[i] +=
        `<div class="output id="output${i}6">
        <div class="output-name" id="output-name${i}6"></div>
        <div class="output-value" id="output-value${i}6"></div>
        </div>`
        }
    }

    addContainerBody1.innerHTML = switchArray[0];
    addContainerBody2.innerHTML = switchArray[1];
    addContainerBody3.innerHTML = switchArray[2];
    addContainerBody4.innerHTML = switchArray[3];
    addContainerBottomBody.innerHTML = 
    `<div class="output" id="output1">
    <div class="output-name" id="output-name1"></div>
    <div class="output-value" id="output-value40"></div>
    </div>
    <div class="output" id="output2">
    <div class="output-name" id="output-name2"></div>
    <div class="output-value" id="output-value41"></div>
    </div>
    <div class="output" id="output3">
    <div class="output-name" id="output-name3"></div>
    <div class="output-value" id="output-value42"></div>
    </div>`;
    
} )




