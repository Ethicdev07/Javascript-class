//API = Application Programming Interface
//An API is a way for two applications to communicate.
//When we use APIs on the web, we send HTTP requests.

//CRUD OPERATION
//Main types students must know:
//Method 	Purpose
//GET	     Fetch/read data
//POST	     Send/Create data
//PUT/PATCH	     Update data
//DELETE	 Remove/delete data

//JSON = JavaScript Object Notation
//It is the format most APIs use to send data
//When calling an API, JavaScript does not wait.

//It runs in the background and continues other code.
//This is called asynchronous behavior.

//A Promise is an object that represents 3states:
//Pending (waiting)
//Fulfilled (resolved)
//Rejected (error)

//using fetch()--which returns a Promise.
//it recieves/accept api url and option
//axios()

//events --DOMContentLoaded()

//Two ways of resolving promises are
//1. async/await
//try/catch

let displyProduct = document.getElementById('displayproducts');
let errorMessage = document.getElementById('error');
let spinner = document.getElementById('spinner');


document.addEventListener('DOMContentLoaded', ()=> {
    const getAllProdcuts = async()=>{
        try {

            const response = await fetch('https://fakestoreapi.com/products');
            console.log(response);

            const products = await response.json();
            console.log(products);

            errorMessage.innerHTML = '';
            spinner.style.display = 'none';


            products.forEach((product, index)=>{
                
               const {title, description, category, price, image} = product;
                

               displyProduct.innerHTML += `
                    <div class="wrapper">
                         <h2>${category}</h2>
                         <h1>${title}</h1>
                         <img src="${image}" alt="" width="300px">
                         <p>${description.slice(0,100)}...</p>
                         <h4>$${price}</h4>
                         <button  class="btn btn-primary">Read More</butto>
                    
                    
                    
                    
                    
                    </div>
               
               `
                
            })

            

            
            

            
            
            
        } catch (error) {
            console.log(error);
            spinner.style.display = 'block'
            errorMessage.innerHTML = 'Error Fetching products...'
            
        }
        
    };



    getAllProdcuts()
});


