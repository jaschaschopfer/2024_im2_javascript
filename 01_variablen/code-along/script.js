let meinName = 'Jascha';    // Deklaration und Initialisierung
console.log(meinName);  // Ausgabe: Jascha

// Variante 1 fürs Verbinden von Zeichenkette und Variable. Wird meist verwendet bei Variablendefinitionen.
let greeting = 'Hallo ' + meinName; 
// Variante 2 fürs Verbinden von Zeichenkette und Variable (kürzer bei mehreren Variablen und mehreren Zeichenketten). Wird verwendet bei Textausgabe.
greeting = `Hallo ${meinName}, schön bist du da! Wie geht's dir? ${meinName}! `;
console.log(greeting);  // Ausgabe: Hallo Jascha

// Variable für Schreiende Begrüssung
let greeting_scream = greeting.toUpperCase();
console.log(greeting_scream);  // Ausgabe: HALLO JASCHA

let money_at_home = 300;
let money_at_bank = 30000.30;
let money = money_at_home + money_at_bank;
console.log(money);  // Ausgabe: 30300.3 (letzter Wert ist .3, nicht .30, weil JavaScript nur so viele Stellen anzeigt, wie nötig)


