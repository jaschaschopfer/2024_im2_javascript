const nameCt = document.querySelector('#name');
const skillsCt = document.querySelector('#skills');
const addInput = document.querySelector('#add');
const skillsFallback = 'ganz schön viel'

let storedName = localStorage.getItem('storedName');

if (storedName !== null) { //wenn der Name im Local Storage vorhanden ist
    nameCt.innerText = storedName; //damit Name auf der Seite angezeigt wird
}
    else {
        let userName = prompt('Gib deinen Namen ein.');
        nameCt.innerText = userName //damit Name auf der Seite angezeigt wird
        localStorage.setItem('storedName', userName);   // Hier schreiben wir den userName in den Local Storage als storedName
}

let storedSkills = localStorage.getItem('storedSkills');    // Hier lesen wir die Skills aus dem Local Storage. (Diese sind bereits ein String)

let skills = [];
if (storedSkills !== null) {
    let skills = JSON.parse(storedSkills);
    skillsCt.appendChild() = skills; //damit Skills auf der Seite angezeigt werden
}

else {
    console.log('Keine storedSkills gefunden, skills bleibt leer.')
}

addInput.addEventListener('click', function() {
    let skill = prompt('Gib eine Fähigkeit ein.');
    skills.push(skill);
    localStorage.setItem('storedSkills', JSON.stringify(skills));
    console.log(JSON.stringify(skills));
    skillsCt.innerText = storedSkills; //damit Skills auf der Seite angezeigt werden
});









