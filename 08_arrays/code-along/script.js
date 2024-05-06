let wg = ['Simon', 'Aglaja', 'Lea', 'Wolfgang']
console.log(wg);
wg.push('Jan'); // adds element at the end
console.log(wg);
wg.pop(); // removes last element
console.log(wg);
wg.splice(2,1); // removes 1 element starting at index 2
console.log(wg);
wg.unshift('Luana');    // adds element at the beginning
console.log(wg);
wg.shift(); // removes first element
console.log(wg);
wg[2] = 'Luana'; // replaces element at index 2
console.log(wg);