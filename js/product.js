document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("productData"));

  if (!productData) {
    document.body.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  document.getElementById("product-name").textContent =
    productData.product_name;

  const imageContainer = document.getElementById("image-container");
  productData.image_urls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Product image";
    img.style.width = "200px";
    img.style.margin = "10px";
    imageContainer.appendChild(img);
  });
});
