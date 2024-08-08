function fizzBuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}
fizzBuzz(6);

// -----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----

function whosPaying(names) {
  let randomPerson = Math.floor(Math.random() * names.length);
  return names[randomPerson] + " is going to buy lunch today!";
}
let namesList = ["Alice", "Bob", "Charlie", "David", "Eve"];
whosPaying(namesList);

// -----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----

function fizzBuzz(n) {
  let arr = [];
  let i = 1;
  while (i <= 20) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else {
      arr.push(i.toString());
    }
    i++; //if forget to add this line, it become an infinite loop! because after the loop it goes to i and i is 1 and one is les than 20, therefore it does not stop!!!
  }
  return arr;
}
fizzBuzz();

// -----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----

// function singBottlesOfBeer() {
//   let numberOfBottles = 99;
//   let lyrics = "";

//   while (numberOfBottles >= 0) {
//     const currentBottleWord = numberOfBottles === 1 ? "bottle" : "bottles";

//     lyrics += `${numberOfBottles} ${currentBottleWord} of beer on the wall `;
//     lyrics += `${numberOfBottles} ${currentBottleWord} of beer,`;
//     lyrics += " Take one down, pass it around, ";

//     numberOfBottles--;

//     const nextBottleWord = numberOfBottles === 1 ? "bottle" : "bottles";

//     if (numberOfBottles >= 0) {
//       lyrics += `${numberOfBottles} ${nextBottleWord} of beer on the wall.`;
//     } else {
//       lyrics += "No more bottles of beer on the wall.";
//     }
//   }

//   return lyrics;
// }
// singBottlesOfBeer();

// -----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----***-----

function fibonacciGenerator(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
fibonacciGenerator();
