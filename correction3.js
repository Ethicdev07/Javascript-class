
function getPartyAttendanceStatus(){
    let userAge = document.getElementById('userage').value;
    let userId = document.getElementById('idcard').value;

    if(userAge >= 18 && userId == 'true'){
        alert(`Access granted`)
    }
    else if(userAge >= 18 && userId == 'false'){
        alert('access denied, get party id')
    }
    else{
        alert(`Acess denied!`)
    }
    
};

function getMultiplicationTable(){
    let inp1 = document.getElementById('inp1').value;
    let inp2 = document.getElementById('inp2').value;
    let input1 = document.getElementById('inp1')
    let input2 = document.getElementById('inp2')
    let displayTable = document.getElementById('displayTables');

    console.log(input1, input2);

    console.log(inp1, inp2);
    
    
   

    if(input1.value < input2.value){
        console.log('testing');
        
        for(let index = inp1; index <= inp2; index++){
                let div = document.createElement('div')
                console.log(div);
                
            for(let i = 1; i <= 12; i++){
                div.innerHTML += (`${index} x ${i} = ${index * i}<br>`);
                
            }
             displayTable.appendChild(div)
        }

       
    }else{
        alert('Error, The value inside first input must lesser than second input')
    }
    
    
};


//ASSIGNMENT

//ASK USER FOR A PASSWORD

//LOOP THROUGH IT  AND: 
//1. COUNT NUMBER OF DIGIT
//2. COUNT NUMBER OF LETTER
//3. TELL IF PASSWORD IS STRONG OR