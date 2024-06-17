export default function sum(...numbers: any[]) {

    // return numbers.reduce((total, number)=> total + number, 0)
    if (numbers.length === 0) return 0;

    const allNumbers = numbers.every((item) => typeof item === 'number');
    const allStrings = numbers.every((item) => typeof item === 'string');
    const mixedTypes = !allNumbers && !allStrings;

    if (mixedTypes) {
        throw new Error('Cannot process a mix of strings and numbers.');
    }

    if (allNumbers) {
        return numbers.reduce((total, number) => total + (number as number), 0);
    }

    if (allStrings) {
        return numbers.join('');
    }

    throw new Error('Unexpected input type');
}


