//.then.catch

let display = document.getElementById("display");

console.log(display);

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    console.log(response);

    response
      .json()

      .then((products) => {
        console.log(products);

        products.forEach((items) => {
          const div = document.createElement("div");

          div.style.backgroundColor = "seagreen";
          const { title, image, description, price } = items;

          div.innerHTML += `
                <div style="width: 20rem;border:2px solid red">
                    <img src="${image}" alt="" width="40rem">
                    <h1 style="font-size:1em;">${title}<h1>
                    <p>${description}</p>
                </div>
            `;

          display.appendChild(div);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });
