let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames = [];
let index = 0;
while (index < names.length) {
    if (names[index] === 'Pete') {
        break; // exit the loop if 'Pete' is found
    }
    copiedNames.push(names[index]);
    index++;
}
console.log(copiedNames); // => ['Chris', 'Kevin', 'Naveed']
