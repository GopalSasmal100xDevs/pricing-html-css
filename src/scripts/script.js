function changePrice() {
  const basicPriceElement = document.getElementById("basic-price");
  const professionalPriceElement =
    document.getElementById("professional-price");
  const masterPriceElement = document.getElementById("master-price");

  const pricing = {
    annually: {
      basic: 199.99,
      professional: 249.99,
      master: 399.99,
    },
    monthly: {
      basic: 19.99,
      professional: 24.99,
      master: 39.99,
    },
  };

  const priceBtn = document.getElementById("toggle");
  priceBtn.addEventListener("change", (e) => {
    if (priceBtn.checked) {
      // Monthly
      basicPriceElement.innerHTML = pricing["monthly"]["basic"];
      professionalPriceElement.innerHTML = pricing["monthly"]["professional"];
      masterPriceElement.innerHTML = pricing["monthly"]["master"];
    } else {
      // Annually
      basicPriceElement.innerHTML = pricing["annually"]["basic"];
      professionalPriceElement.innerHTML = pricing["annually"]["professional"];
      masterPriceElement.innerHTML = pricing["annually"]["master"];
    }
  });
}

(() => {
  changePrice();
})();
