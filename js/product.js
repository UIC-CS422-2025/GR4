window.addEventListener("pageshow", () => {
  // Always show dietary preference
  document.querySelector(
    "#currentPreference"
  ).textContent = `${localStorage.getItem("preference")}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("productData"));

  const productNameElem = document.querySelector("#product-name");
  const productImgElem = document.querySelector("#product-img");
  const descriptionElem = document.querySelector("#description");
  const alternativesBtn = document.querySelector("#alternatives");

  const indicatorIcon = document.querySelector("#indicator-icon");
  const indicatorBg = document.querySelector("#indicator-bg");
  const statusMsg = document.querySelector("#status-msg");

  const isSkibidi = Math.random() < 0.5;

  if (productData) {
    productNameElem.textContent = productData.product_name || "Skibidi";
    productImgElem.src =
      productData.image_urls?.[0] || "../images/placeholder.png";
  }

  if (!isSkibidi) {
    indicatorIcon.className =
      "fa-solid fa-circle-xmark fa-stack-2x text-red-500 text-4xl";
    indicatorBg.className =
      "fa-solid fa-circle fa-stack-1x text-white text-2xl";

    statusMsg.className =
      "bg-red-100 text-red-700 px-4 py-1 text-sm rounded-full mb-4";
    statusMsg.textContent = `Contains non-${localStorage.getItem(
      "preference"
    )} ingredients`;

    descriptionElem.innerHTML = `
      <li>Soy Protein</li>
      <li>Pea Protein</li>
      <li>Natural Flavors</li>
      <li class="text-red-600">Beef Powder <i class="fa-solid fa-circle-xmark text-red-500 ml-1"></i></li>
    `;

    alternativesBtn.classList.remove("hidden");
    alternativesBtn.classList.add("visible");
    alternativesBtn.textContent = `Show ${localStorage.getItem(
      "preference"
    )} Alternatives`;
  } else {
    indicatorIcon.className =
      "fa-solid fa-circle-check fa-stack-2x text-green-600 text-4xl";
    indicatorBg.className =
      "fa-solid fa-circle fa-stack-1x text-white text-2xl";

    statusMsg.className =
      "bg-green-100 text-green-700 px-4 py-1 text-sm rounded-full mb-4";
    statusMsg.textContent = `Product is ${localStorage.getItem("preference")}`;

    descriptionElem.innerHTML = `
      <li>Protein: 20g</li>
      <li>Vitamin D</li>
      <li>Vitamin C</li>
    `;

    alternativesBtn.classList.add("hidden");
    alternativesBtn.classList.remove("visible");
  }
});
