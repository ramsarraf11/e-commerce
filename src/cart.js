let cartItem = JSON.parse(localStorage.getItem("cart"));
displayCard(cartItem);

let totalCost = cartItem.reduce((acc, el) => acc + el.price, 0);
document.querySelector("#cart-total").innerText = totalCost;

function search() {
    let q = document.querySelector("select").value;
    let discount = (totalCost * q) / 100
    document.querySelector("#cart-total").innerText = totalCost - discount
}
function displayCard(product) {
    product.forEach((elem) => {
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
        div.append(img, SN, brand, price, category);
        document.querySelector("#cart-container").append(div);
    });
}