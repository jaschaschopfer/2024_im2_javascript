const board = document.querySelector('#board');
const game = [
    [['turm','schwarz'],['springer', 'schwarz'],['läufer','schwarz'],['könig','schwarz'],['dame','schwarz'],['läufer','schwarz'],['springer','schwarz'],['turm','schwarz']],
    [['bauer','schwarz'], ['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz'],['bauer','schwarz']],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [['bauer','weiss'], ['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss'],['bauer','weiss']],
    [['turm','weiss'],['springer', 'weiss'],['läufer','weiss'],['könig','weiss'],['dame','weiss'],['läufer','weiss'],['springer','weiss'],['turm','weiss']],
];
function isEven(number) {
    return number % 2 === 0;
}

game.forEach(x =>{  //Loopen für jede Zeile des Arrays
    row.foreach (field =>   //Loopen für jedes Feld in der Zeile
    
    // nicht mehr gemacht im Unterricht.
})



// mit Nick gemacht.
const wg = ['Nick', 'Lukas', 'Jonas', 'Lukas', 'Birthe'];
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

// for-loop: i auf 0 setzen und danach bei jedem Element + 1 und bei Anzahl der Elemente aufhören:
for (let i = 0; i < zahlen.length; i = i + 1) {
    const zahl = document.createElement('p');
    zahl.innerText = zahlen[i];
    board.appendChild(zahl);
}

// so kann es kürzer gehen, wenn man nichts einstellen muss via for-loop:
wg.forEach((element)=> {
    const wgMember = document.createElement('p');
    wgMember.innerText = element;
    board.appendChild(wgMember);
})
