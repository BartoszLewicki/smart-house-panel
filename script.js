"use strict"


function start(){
    
function printPresets(){
    for(let i = 0, length = presets.length; i < length; i ++)
{
    addPresetToScreen(presets[i], i);
}}

function updateState (){
    if(checkMain == 0){
        for(let element = 0; element < preset.length; element++)
        {
            preset[element].addEventListener('click', function(){
                writeState(element)
            })
        }
    }
}

printPresets();
const preset = document.querySelectorAll(".preset");

nav.innerHTML = `<button id="addPreset">Dodaj preset</button>
<button id="editPreset">Edytuj preset</button>
<button id="deletePreset">Usuń preset</button>
<button id="manual">Sterowanie ręczne</button>
<button id="settings">Ustawienia</button>`

const addPreset = document.querySelector("#addPreset");
const editPreset = document.querySelector("#editPreset");
const deletePreset = document.querySelector("#deletePreset");
const manual = document.querySelector("#manual");
const settings = document.querySelector("#settings");

controls.style.justifyContent = "start";


// ADD PRESET
addPreset.addEventListener("click",() => {
    controls.style.justifyContent = "space-around";
    controls.innerHTML = "";
    preset1Site();
    menuButtons(0);
} )


// EDIT PRESET
if(presets.length > 0){
editPreset.addEventListener("click",() => {
    controls.innerHTML = "";
    menuButtons(1);
    printPresets()
    
})
}


// DELETE PRESET
if(presets.length > 0){
deletePreset.addEventListener("click", () => {
    checkMain = 1;
    function helper () {
        menuButtons(2);
        const elements = document.querySelectorAll(".preset");
        elements.forEach((element, i) => {
            element.addEventListener("click", () => {
                presets.splice(i,1);
                controls.innerHTML = ""
                if(presets[0] != null){
                    start()
                }
                helper() 
            })
        })
    }
    controls.innerHTML = "";
    printPresets();
    helper()
})
}

// MANUAL CONTROL
manual.addEventListener("click",() => {
    controls.innerHTML = ""
    controls.style.justifyContent = "space-around"
    preset2Site()
    menuButtons(3); 
})

// SETTINGS
settings.addEventListener("click",() => {
    controls.innerHTML = ""
    menuButtons(4);   
})
    
    updateState();
}


start()






