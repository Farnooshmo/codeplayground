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
