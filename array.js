//ARRAY METHODS

let fruits = [
  "mango",
  "banana",
  "cashew",
  "pawpaw",
  "orange",
  "cherry",
  "wetermeolon",
  "mango",
  "berry",
  "apple",
  "pineapple",
  "cucumber",
];
console.log(fruits);

//1. pop()-- to remove the last item in an array

fruits.pop();
console.log(fruits);

//2. push()-- to add an item to end of an array list

fruits.push("cucumber", {});
console.log(fruits);

//3.shift()--to remove the first item in an array

fruits.shift();
console.log(fruits);

//4. unshift()-- to add a item to beginning of an array list

fruits.unshift("Tomato");
console.log(fruits);

//5. find()--this method is used to check if an item exist in an array

let findItem = fruits.find((items) => items == "berry");
console.log(findItem);

//6. findIndex-- is used to find the index number of an item in an array

let myFindIndex = fruits.findIndex((items) => items == "mango");
console.log(myFindIndex);

//7. filter---is used to find an item which is to be return in a new array

let myFilter = fruits.filter((items) => items == "cherry");
console.log(myFilter);

//8. forEach() -- is used to iterate or loop through an array

fruits.forEach((items, index) => {
  console.log(items, index);
});

//9. concat()-- is used to marge two or more arrays into a single array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mergedArr = fruits.concat(arr);
console.log(mergedArr);

//10. includes()--to check if the item exist in an array

console.log(fruits.includes("Berry"));

//11. indexof()--is to check the index number of an item

console.log(fruits.indexOf("mango"));

//12. sort()--to sort a array item in place.

let aplphabets = [
  "b",
  "d",
  "f",
  "g",
  "i",
  "o",
  "a",
  "z",
  "c",
  "h",
  "e",
  "q",
  "t",
  "w",
];

aplphabets.sort();
console.log(aplphabets);

//13. slice()--is used to mutate an array by removing some items from an array list
let colors = [
  "yellow",
  "green",
  "blue",
  "red",
  "crimson",
  "orange",
  "pink",
  "purple",
];

console.log(colors);

console.log(colors.slice(0, 2)); //0--starting, 2-stop ppoint
// console.log(colors);

//14. splice()--to remover/ add but returns a new array

console.log(colors.splice(0, 2, "ToKunbo"));
console.log(colors);

let listofProducts = [
  {
    id: 1,
    productName: "Binatone hdf",
    category: "appliance",
    description: "This is an 18 inches electric fan with a plastic blade",
  },
  {
    id: 2,
    productName: "Lg 32 plasma tv",
    category: "appliance",
    description: "This is an adnriod 32 inches plasma tv with oled screen",
  },
   {
    id: 3,
     productName: 'Bone straight 42inches', 
     category: 'Women',
     description: 'a multicolor 42inches chinese bone straight'
    },

    'binatone'

];

function canSearchItems() {
    let inputSearch = document.getElementById('input').value;
    let display = document.getElementById('display');

    // let check = listofProducts.find((items)=> items == inputSearch);

    listofProducts.forEach((items, index)=>{
        console.log(items);
        
    })

    


}
