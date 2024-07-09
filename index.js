//0.   Call back the id input element

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

//to test the element
// console.log(title, price, taxes, total, count, category, submit);

//----------------

// 1.  Get Total Function, and Create product
// 2.  Save in the local storage, and clear input
// 3.  read input
// 4.  count
// 5.  update
// 6.  search
// 7.  clean data

//#Get Total Function

function getTotal() {
  if (price.value != "") {
    let results = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = results;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}

//#Create product

//js is reading the code from top to bottom so if you reload the the page localStorage will read this empty array and lost the old data
//so you need to fix that with the if statment.

let dataProduct;

//ensuring if the localStorage have data so if != null 
if(localStorage.product != null) {
    //get the data back as an array
    dataProduct = JSON.parse(localStorage.product)
} els {
    
}



submit.onclick = function () {
  // to avoid the missing data we should gather the data withen an object
  let newProduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  //here is to keep the new products saved as an new object within an array
  dataProduct.push(newProduct);

  //here is to keep save the data after reloading the page within the local storage
  //note that localStorage is saving only json type, so you need to change the objcet type as an strings => (the product key would save all the data)

  localStorage.setItem("product", JSON.stringify(dataProduct));

  console.log(newProduct);
};
