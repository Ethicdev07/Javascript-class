//Math methods

//1. math.random()
console.log(Math.random());

//2. Math.floor()

console.log(Math.floor(Math.random() * 564647848) + 1);

let cardArr = [];
let users;
let randomNumber;

function generate() {
  randomNumber = Math.floor(Math.random() * 7647733) + 1;

  codeInput.value = randomNumber;
}

function save() {
  codeInput.value = "";

  users = {
    network: network.value,
    amount: amount.value,
    pin: "",
    status: "Unused",
    dateCreated: new Date().toLocaleDateString(),
    dateUsed: "Not yet used",
  };

  if (network.value == "MTN") {
    users.pin = `*555*${randomNumber}#`;
  } else if (network.value == "GLO") {
    users.pin = `*777*${randomNumber}#`;
  } else if (network.value == "AIRTEL") {
    users.pin = `*123*${randomNumber}#`;
  } else if (network.value == "9MOBILE") {
    users.pin = `*999*${randomNumber}#`;
  }

  cardArr.push(users);
  console.log(cardArr);

  updateTable();
}

function updateTable() {
  let tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = "";

  // for(let index = 0; index < cardArr.length; index++){
  //     tableBody.innerHTML += `
  //         <tr>
  //             <td scope="row">${index + 1}</td>
  //             <td>${cardArr[index].network}</td>
  //             <td>${cardArr[index].amount}</td>
  //              <td>${cardArr[index].pin}</td>
  //               <td>${cardArr[index].status}</td>
  //              <td>${cardArr[index].dateCreated}</td>
  //              <td>${cardArr[index].dateUsed}</td>
  //              <td><button>Delete</button></td>
  //         </tr>

  //     `
  // }

  cardArr.forEach((items, index) => {
    tableBody.innerHTML += `
        <tr scope="row">
            <td>${index + 1}</td>
            <td>${items.network}</td>
             <td>${items.amount}</td>
             <td>${items.pin}</td>
             <td>${items.status}</td>
        
             <td>${items.dateCreated}</td>
        
             <td>${items.dateUsed}</td>
        
              <td><button onclick="del(${index})">Delete</button></td>
        
        
        </tr>
        
        
        
        
        `;
  });
};


function del(params){
  console.log(params);
  cardArr.splice(params, 1);
  updateTable()
  
}