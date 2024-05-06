const friends = [
    {
        name: 'Antonia',
        wohnort: 'Zürich',
        alter: 27,
        hobbies: ['Tanzen', 'Fussball', 'Ausgang'],
        gemeinsame_freunde: ['Zoe']
    },
    {
        name: 'Lena',
        wohnort: 'Winterthur',
        alter: 28,
        hobbies: ['Fussball', 'Joggen', 'Ausgang'],
        gemeinsame_freunde: ['Celia', 'David', 'Alice'],
    },
    {
        name: 'David',
        wohnort: 'Zürich',
        alter: 31,
        hobbies: ['Fussball', 'Musik', 'Brunchen', 'Politik'],
        gemeinsame_freunde: ['Lena', 'Celia'],
    },
    {
        name: 'Celia',
        wohnort: 'St. Gallen',
        alter: 28,
        hobbies: ['Fussball', 'Ausgang', 'Brunchen'],
        gemeinsame_freunde: ['Lena', 'David'],
    },
    {
        name: 'Tobias',
        wohnort: 'Winterthur',
        alter: 30,
        hobbies: ['Arbeit', 'Brunchen'],
        gemeinsame_freunde: []
    },
    {
        name: 'Zoe',
        wohnort: 'Zürich',
        alter: 25,
        hobbies: ['Arbeit', 'Joggen'],
        gemeinsame_freunde: ['Alice', 'Antonia']
    },
    {
        name: 'Alice',
        wohnort: 'St. Gallen',
        alter: 26,
        hobbies: ['Musik', 'Joggen', 'Arbeit'],
        gemeinsame_freunde: ['Zoe']
    }
];
const friendsCt = document.querySelector('#friends');
const filters = document.querySelectorAll('#filter>button');

document.querySelector('#all').addEventListener('click', filter);
document.querySelector('#u30').addEventListener('click', filter);
document.querySelector('#soccer').addEventListener('click', filter);

showFriends(friends); // wir rufen die Funktion showFriends auf und übergeben das Array friends

function filter(event) {
    console.log('Es wurde auf diesen Filter geklickt:', event.target.id);

    let filter = event.target.id;   // filter ist der Wert des geklickten Filters

    if (filter === 'u30') { // wenn der Filter u30 ist
        let u30 = friends.filter(friend => {    // .filter() erstellt ein neues Array mit allen Elementen, die den Filterbedingungen entsprechen
            return friend.alter < 30;   // wir filtern alle Freunde, die jünger als 30 sind
        })
        console.log(u30);   // wir loggen das gefilterte Array
        showFriends(u30);
    }

    else if (filter == 'soccer') {
        let soccer = friends.filter(friend => {
            return friend.hobbies.includes('Fussball');
        })
        console.log(soccer);
        showFriends(soccer);
    }

    else if (filter == 'all') {
        console.log(friends);
        showFriends(friends);
    }
}

function showFriends (inputfriends){
    friendsCt.innerHTML = ''; // wir leeren den Container, damit wir nicht immer wieder die gleichen Freunde anhängen
    inputfriends.forEach(friend => {
        console.log(friend.name);

        const item = document.createElement('p');
        item.innerText = friend.name;
        friendsCt.appendChild(item);
    });
}
