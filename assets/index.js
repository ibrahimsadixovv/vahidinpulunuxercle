const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const count = document.querySelectorAll(".count");
const money = document.querySelector(".money");
const price = document.querySelectorAll(".price");
const check = document.querySelector(".check-result");
const product = document.querySelectorAll(".product-name");
const thing = document.querySelector(".thing");
const thingCount = document.querySelector(".thing-count")
const resultPage = document.querySelector(".result")
let result = 0;
let bought = {};

for (let index = 0; index < count.length; index++) {
  result += parseInt(count[index].textContent) * parseInt(price[index].textContent);
}
check.textContent = result;

plus.forEach(function(button, index) {

  button.addEventListener("click", function () {
    if (parseInt(money.textContent) >= parseInt(price[index].textContent)) {
      const itemPrice = parseInt(price[index].textContent);
      const itemName = product[index].textContent;

      if (bought[itemName]) {
        bought[itemName] += 1;
      } else {
        bought[itemName] = 1;
      }

      const itemList = Object.entries(bought).map(([name, count]) => `${name} (${count})`).join(", ");
      thing.textContent = itemList;
      thingCount.textContent = Object.values(bought).reduce((total, count) => total + count, 0);

   
      count[index].textContent = parseInt(count[index].textContent) + 1;
      money.textContent = parseInt(money.textContent) - itemPrice;
      check.textContent = parseInt(check.textContent) + itemPrice;
    }

    if (parseInt(thingCount.innerHTML)>0) {
      console.log(thingCount.innerHTML)
      resultPage.style.display="flex"
    }else if (parseInt(thingCount.innerHTML)===0) {
      console.log(thingCount.innerHTML)
      resultPage.style.display="none"
    }
  });
});

minus.forEach(function(button, index) {
  button.addEventListener("click", function () {
    if (parseInt(count[index].textContent) > 0) {
      const itemPrice = parseInt(price[index].textContent);
      const itemName = product[index].textContent;

      if (bought[itemName]) {
        bought[itemName] -= 1;
        if (bought[itemName] === 0) {
          delete bought[itemName];
        }
      }

      const itemList = Object.entries(bought).map(([name, count]) => `${name} (${count})`).join(", ");
      thing.textContent = itemList;
      thingCount.textContent = Object.values(bought).reduce((total, count) => total + count, 0);

    
      count[index].textContent = parseInt(count[index].textContent) - 1;
      money.textContent = parseInt(money.textContent) + itemPrice;
      check.textContent = parseInt(check.textContent) - itemPrice;
    }
    if (parseInt(thingCount.innerHTML)>0) {
      console.log(thingCount.innerHTML)
      resultPage.style.display="flex"
    }else if (parseInt(thingCount.innerHTML)===0) {
      console.log(thingCount.innerHTML)
      resultPage.style.display="none"
    }
  });
});
