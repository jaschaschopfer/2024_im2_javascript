// -> constants
const lebenserwartung_m = 81.0; // in jahren
const lebenserwartung_w = 85.1; // in jahren
const schokolade_pro_jahr = 11; // in kg

const lebenserwartung_d = (81 + 85.1)/2; // in jahren
console.log('lebenswerwartung d',lebenserwartung_d);


// prompts
let name = prompt('Wie heisst du?');
name = name.charAt(0).toUpperCase() + name.slice(1); // Erster Buchstabe gross + Wort name ab zweitem Buchstaben kleingeschrieben
let geschlecht = prompt('Welches Geschlecht hast du m/w/d?');
let alter = prompt('Wie alt bist du?');


// Alte Methode mit getelementbyid
// const name_item = document.createElement('p');  // Paragraph erstellen
// name_item.innerText = 'Das ist der Paragraph aus JavaScript :)'; // Text des Paragraphen setzen
// document.getElementById('container').appendChild(name_item);   // Container holen aus html und Paragraph als Child hinzufügen

// Neue Methode mit querySelector
const name_item = document.createElement('p');
name_item.innerText = 'Name: ' + name;
name_item.innerText = 'Name: ' + name; // Erster Buchstabe gross vom Namen erzwingen
document.querySelector('#container').appendChild(name_item);

const alter_item = document.createElement('p'); // Paragraph erstellen
alter_item.innerText = 'Alter: ' + alter; // Text des Paragraphen setzen
alter_item.style.color = 'red'; // Textfarbe setzen
// Möglichkeit zuerst Container holen und als Variable speichern, dann als Child hinzufügen
const container = document.querySelector('#container'); // Container holen aus html
container.appendChild(alter_item); // Paragraph als Child hinzufügen

// Die zwei Methoden für Text mit Variablen
// zusammenfassung.innerText = `Hallo ${name}, du bist ${alter} Jahre alt und wirst auch in 10 Jahren noch ${name} heissen.`;
// zusammenfassung.innerText = "Hallo " + name + ", du bist " + alter + " Jahre alt und wirst auch in 10 Jahren noch " + name + " heissen.";

let years_to_live;
if (geschlecht === 'm') {
    years_to_live = lebenserwartung_m - alter;

} else if (geschlecht === 'w') {
    years_to_live = lebenserwartung_w - alter;
}
else {
    years_to_live = lebenserwartung_d - alter;
}

// Tipp mit Command + D mehrere Cursor setzen
let zusammenfassung = document.createElement('p');
zusammenfassung.innerText = `Hallo ${name}, du bist ${alter} Jahr(e) alt und wirst voraussichtlich noch ${Math.round(years_to_live)} Jahre leben.`;
container.appendChild(zusammenfassung);

