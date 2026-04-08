//Methods --are functions that can be used on a data type to perform a specific task.

let userPhoneModel = {
    phoneModel: function(){
        console.log('samsung');
        
    }
}

console.log(userPhoneModel.phoneModel());

//String Methods

let str = 'tunje is a javascript ninja';
console.log(str);


//1. length-- returns the total number of characters
console.log(str.length);


//2. indexof--convert strings to array and check for their indexes

console.log(str.indexOf('ninja'));

//3. includes()--check if a string includes a particulat character

console.log(str.includes('z'));

//4. toUpperCase()--convert lowercase characters ti uppercase letter

console.log(str.toUpperCase());

//5. toLowerCase()

console.log(str.toLowerCase());

//6. trim()--is used remove excess space

let snacks = ` biscuit and drink`;
console.log(snacks);

console.log(snacks.trim());
console.log(snacks.trimEnd());

//7. concat()

let mergedStr = str.concat(` and his a stubborn boy!`);
console.log(mergedStr);

//8. charAt()

console.log(str.charAt(26));



//Number Methods--

let digit  = '45.71';
console.log(digit);
console.log(typeof digit);

//A. converting from string to number

//1. Number()

console.log(Number(digit));

//2. parseFloat()
console.log(parseFloat(digit));

//3. parseInt()
console.log(parseInt(digit));


//4. using addition operator +
console.log(+digit);

let sum = 10 + + '3';
console.log(sum);



//B. converting from number to string

digit = 70.5;
console.log(digit);

//1. toString()
console.log(digit.toString());

//2. toFixed()

console.log(digit.toFixed());

//3. toPrecision()
console.log(digit.toPrecision());

//4. toExponential
console.log(digit.toExponential());









