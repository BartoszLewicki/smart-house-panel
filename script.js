"use strict"
let timer;

const startLogOutTimer = function(){
    let time = 10;
  
    const tick = function(){
        if(time === 0){
            clearInterval(timer)
            controls.innerHTML = `<div id="MyClockDisplay" class="clock" onload="showTime()"></div>
            <div id="dateText"></div>`;
            header.style.opacity = 0;
            clockTime = showTime();
            controls.style.justifyContent = "center";
            controls.style.alignItems = "center"
            controls.style.marginTop = '20%'
                screen.addEventListener('click', () =>{
                    controls.style.marginTop = '0'
                    clearTimeout(clockTime)
                    controls.innerHTML = ""
                    header.style.opacity = 1;
                    start()
                },{ once: true }) 
            }
            time--;
      }
  
    tick()
    timer = setInterval(tick,1000);
    return timer;
  }

function start(){
    
function updateState (){
    if(checkMain == false){
        for(let element = 0; element < preset.length; element++)
        {
            preset[element].addEventListener('click', function(){
                writeState(element)
                clearInterval(timer);
                timer = startLogOutTimer()
            })
        }
    }
}

printPresets();
const preset = document.querySelectorAll(".preset");
if(lang == "PL"){
    nav.innerHTML = `<button id="addPreset">Dodaj preset</button>
    <button id="editPreset">Edytuj preset</button>
    <button id="deletePreset">Usuń preset</button>
    <button id="manual">Sterowanie ręczne</button>
    <button id="settings">Ustawienia</button>`
}else if(lang == "EN"){
    nav.innerHTML = `<button id="addPreset">Add preset</button>
    <button id="editPreset">Edit preset</button>
    <button id="deletePreset">Delete preset</button>
    <button id="manual">Manual control</button>
    <button id="settings">Settings</button>`
}else if(lang == "FR"){
    nav.innerHTML = `<button id="addPreset">Ajouter un préréglage</button>
    <button id="editPreset">Modifier le préréglage</button>
    <button id="deletePreset">Supprimer le préréglage</button>
    <button id="manual">Contrôle manuel</button>
    <button id="settings">Paramètres</button>`
}else if(lang == "DE"){
    nav.innerHTML = `<button id="addPreset">Voreinstellung hinzufügen</button>
    <button id="editPreset">Voreinstellung bearbeiten</button>
    <button id="deletePreset">Voreinstellung löschen</button>
    <button id="manual">Manuelle Kontrolle</button>
    <button id="settings">Einstellungen</button>`
}else if(lang == "ES"){
    nav.innerHTML = `<button id="addPreset">Agregar preestablecido</button>
    <button id="editPreset">Editar preajuste</button>
    <button id="deletePreset">Eliminar preestablecido</button>
    <button id="manual">Control manual</button>
    <button id="settings">Ajustes</button>`
}else if(lang == "IT"){
    nav.innerHTML = `<button id="addPreset">Aggiungi preimpostazione</button>
    <button id="editPreset">Modifica preimpostazione</button>
    <button id="deletePreset">Elimina preimpostazione</button>
    <button id="manual">Controllo manuale</button>
    <button id="settings">Impostazioni</button>`
}


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
    clearInterval(timer);
} )


// EDIT PRESET
if(presets.length > 0){
editPreset.addEventListener("click",() => {
    presetToEdit()
    clearInterval(timer);
})
}


// DELETE PRESET
if(presets.length > 0){
deletePreset.addEventListener("click", () => {
    checkMain = true;
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
    clearInterval(timer);
})
}

// MANUAL CONTROL
manual.addEventListener("click",() => {
    controls.innerHTML = ""
    controls.style.justifyContent = "space-around"
    preset2Site()
    menuButtons(3);
    editPresetValues("manual", tempIndex);
    clearInterval(timer);
})

// SETTINGS
settings.addEventListener("click",() => {
    controls.innerHTML = ""
    menuButtons(4);
    printSettings();
    settingsListener();
    clearInterval(timer);   
})

    updateState();
    if(timer) clearInterval(timer);
    timer = startLogOutTimer()
}

start()





