function findNumbers(numbers){
    const odd = numbers.filter((num) => num % 2 !== 0);
    const even = numbers.filter((num) => num % 2 === 0);

    return odd.length === 1 ? odd[0] : even[0];
    // alternatywnie mozna zdeklarowac dwa argumenty przy jednym wywołaniu funkcji  return [odd, even]; i wtedy zwraca nam od razu nieparzyste i parzyste
}

const firstyArray = [2, 4, 0, 100, 4, 11, 2602, 36];
const oddNumbers = findNumbers(firstyArray);
console.log(`odd number from first array: ${oddNumbers}`);

const secondArray = [160, 3, 1719, 19, 11, 13, -21];
const evenNumbers = findNumbers(secondArray);
console.log(`even number from second list: ${evenNumbers}`);


