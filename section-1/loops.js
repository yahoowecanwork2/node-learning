// for loops
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// while loop
// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// do while loop(run atleast once)
// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 3);

// .....................looping through arrays ...........
const fruits = ["apple", "banana", "mango", "watermelan"];
// for (let a = 0; a < fruits.length; a++) {
//   console.log(fruits[a]);
// }
// for ....of{clean and modern}
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// ........................................common looop helpers(modern js)..............>
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });
fruits.forEach((item) => {
  console.log(item);
});
