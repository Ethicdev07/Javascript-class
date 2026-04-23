function canCalculate(){
    let firstInp = Number(document.getElementById('input1').value);
    let operators = document.getElementById('operators').value;
    let secondInp = Number(document.getElementById('input2').value);
    let result = document.getElementById('result');
    console.log(firstInp, operators, secondInp);

    let answer;

    if(operators == '+'){
        answer = firstInp + secondInp
        result.value = answer;
    }
    else if(operators == '-'){
        answer = firstInp - secondInp;
        result.value = answer
    }
    else if(operators == 'x'){
        answer = firstInp * secondInp;
        result.value = answer;
    }
    else if(operators == '/'){
        answer = firstInp / secondInp;
        result.value = answer
    }
    else{
        alert('invalid operator')
    };

    document.getElementById('input1').value = '';
    document.getElementById('input2').value = ''
    
};


//FORLOOP--- IS A METHOD FOR ITERATING/LOOP A DATA SET BASED ON THE CONDITION SET i.e A CONTINOUS REPETITION OF AN SOMETHING TO GET OUTCOME UNTIL THE CONDITION BECOMES FALSE.

//in loop 3 parameters are required: initialization, condition, increment/decrement

for(let index = 1; index <= 200; index++){
    console.log(index);
    
}

for(let i = 200; i >= 1; i--){
    console.log(i);
    
};

let arr = ['boy', 'girl', 'card', 'car', 'ship', 'polance'];

for(let index = 0; index <= arr.length; index++){
    console.log(arr[index]);
    
};

arr.forEach((items)=>{
    console.log(items);
    
});

let numArr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i <= numArr.length; i++){
    console.log(i);
    
};


//nested loop--it follows the iteration of the big loop

for(let a = 1; a <= 5; a++){
    for(let b = 1; b <= 12; b++){
        console.log(`${a} x ${b} = ${a * b}`);
        
    }
};

//for of--is used to iterate or loop through a string value

let str = 'bolaji is a crazy boy';

for(let value of str){
    console.log(value);
    
};


//for in-- is used to iterate an object

let userObj = {
    name: 'James katapa',
    gender: 'male',
    age: 10,
}

for(let key in userObj){
    console.log(key);
    console.log(userObj[key]);   
};