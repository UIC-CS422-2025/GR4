document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("productData"));

  const indicators = [
    "fa-circle-xmark",
    "fa-triangle-exclamation",
    "fa-circle-check",
  ];

  const descriptions = [
    "This product contains non-vegetarian ingredients<br /><br />Beef Powder",
    "This product is highly processed and contains artificial additives.<br /><br />Aspartame<br />High-fructose corn syrup",
    "This item is high in protein and contains sufficient nutrients.<br /><br />Protein: 20g<br />Vitamin D<br />Vitamin C",
  ];

  const indicator_elem = document.querySelector("#indicator");
  const rand_idx = Math.floor(Math.random() * 3);
  const product_name = document.querySelector("#product-name");
  const description = document.querySelector("#description");
  const alternatives_btn = document.querySelector("#alternatives");
  const product_img = document.querySelector("#product-img");

  indicator_elem.classList = `fa-solid ${indicators[rand_idx]} fa-stack-2x`;
  description.innerHTML = descriptions[rand_idx];

  if (productData) {
    product_name.textContent = productData.product_name;
    product_img.src = productData.image_urls[0];
  }

  if (rand_idx !== 2) {
    alternatives_btn.classList = "visible";
  } else {
    alternatives_btn.classList = "hidden";
  }
});
