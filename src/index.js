let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
fetch(url)
  .then(response => response.json())
  .then(items => {
    displayCard(items.data)
  })
  .catch(error => console.log('error1'));

function displayCard(product) {
  product.forEach(elem => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.img)
    let SN = document.createElement("p")
    SN.innerText = elem.id;
    let brand = document.createElement("p");
    brand.innerText = "Brand:  " + elem.brand;
    let price = document.createElement("p");
    price.innerText = "price:  " + elem.price;
    let category = document.createElement("p");
    category.innerText = "category:  " + elem.category;
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart"
    btn.addEventListener("click", function () {
      cartItem.push(elem)
      localStorage.setItem("cart", JSON.stringify(cartItem))
    })
    div.append(img, SN, brand, price, category, btn);
    document.querySelector("#product-container").append(div);
  });
}