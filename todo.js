
let list = [];

function addList(){
  let items = document.getElementById('input').value;
  let errorMessage = document.getElementById('error')

  let check = list.find((item)=> item.toLowerCase() === items.toLowerCase());
  
 if(check){
    errorMessage.innerHTML = `Item already exist`;
    errorMessage.style.color = 'red'
 }
 else{
    list.push(items);
    console.log(list);
    errorMessage.innerHTML = '';

     document.getElementById('input').value = ''

    updateUI();
    
 }

 
  

};

function updateUI(){
  let display = document.getElementById('display');

  display.innerHTML = ''

    list.forEach((product, index)=>{
        display.innerHTML += `

            <div style="display:flex;align-items:center;gap:1.2em;margin-bottom:10px;">
                <span>${index + 1}</span>
                <span>${product}</span>
                <button onclick="del(${index})">delete</button>
            </div>
        
        `
        
    })
};

function del(params){
  console.log(params);

  list.splice(params, 1);
  updateUI()
    
}


// let phoneReg = /^\+234[0-9]{2}}$/;


// let phoneInp = document.getElementById('phoneinp');


// function checkphoneTest(){
//     if(phoneReg.test(phoneInp.value)){
//         alert('valid phone number')
//     }
//     else{
//         alert('invalid phone number')
//     }
// }