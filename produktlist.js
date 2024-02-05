//https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //   console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  copy.querySelector(".subtle").textContent = product.articletype;
  //   copy.querySelector(".subtle").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;

  if (product.discount) {
    //produktet er onSale
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  copy.querySelector(".read_more").setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}
