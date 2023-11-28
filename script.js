function indexOf() {
    let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
    console.log(names.indexOf('Alice'));
    console.log(names.indexOf('Charlie', 2));
    console.log(names.indexOf('David'));
    const notFound = names.indexOf('Frank');
    console.log(notFound);
}

function push_Unshift() {
    let numbers = [10, 15, 20, 25, 30];
    console.log(numbers);
    numbers.push(50);
    numbers.unshift(1);
    console.log(numbers);
}

function PoP_Shift() {
    let animals = ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra'];
    console.log(animals);
    let poppedAnimal = animals.pop();
    let shiftedAnimal = animals.shift();
    console.log(animals);
}

function includes() {
    let numbers = [10, 20, 30, 40, 50, 60];
    console.log(numbers);
    let includes30 = numbers.includes(30);
    let includes100 = numbers.includes(100);
    console.log('Is "30" included in the array --> ' + includes30);
    console.log('Is "100" included in the array --> ' + includes100);
}

function slice() {
    let fruits = ['Melon', 'Strawberry', 'Grapes', 'Banana', 'Peach'];
    console.log(fruits);
    let slicedFruits = fruits.slice(1, 4);
    console.log('Sliced fruits: ' + slicedFruits);
}

function splice() {
    let Students = ['Max', 'Beni', 'Nina', 'Marius', 'Seid'];
    Console.log(Students);
    var removedStudents = Students.splice(2, 2);
    var addedStudents = Students.splice(1, 0, 'Edvin', 'Fabi');
    console.log(Students);
}

function In() {
    let car = {
        Brand: 'Toyota',
        Color: 'Blue',
        HP: '150'
    };
    for (let key in car) {
        console.log(key + ': ' + car[key]);
    }
}

function Of() {
    let vegetables = ['Carrot', 'Broccoli', 'Tomato', 'Spinach', 'Cucumber'];
    for (let veg of vegetables) {
        console.log(veg);
    }
}

function Mapfunction() {
    let originalNumbers = [1, 2, 3, 4, 5];
    let doubledNumbers = originalNumbers.map(function (num) {
        return num * 2;
    });
    console.log(originalNumbers);
    console.log(doubledNumbers);
}

function FilterBool() {
    let randomNumbers = [1,2,3,4,5,6,7,8,9,10];
    let evenNumbers = randomNumbers.filter(function (num) {
        return num % 2 === 0;
    });
    console.log(evenNumbers);
}

function stringJoinSplit() {
    let sentence = "Was machst du Heute?";
    var words = sentence.split(' ');
    console.log('Array of words:', words);
    var joinedSentence = words.join(' ');
    console.log('Joined sentence:', joinedSentence);
}

function reverse() {
    let originalNumbers = [1, 2, 3, 4, 5];
    console.log('Original array:', originalNumbers);
    let reversedNumbers = originalNumbers.reverse();
    console.log('Reversed array:', reversedNumbers);

    let text = "Hello, World!";
    let reversedText = text.split('').reverse().join('');
    console.log('Original text:', text);
    console.log('Reversed text:', reversedText);
}

function reduce() {
    let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = randomNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
}
