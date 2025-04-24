const historyList = document.querySelector(".history-list");
const historyData = JSON.parse(localStorage.getItem("scanHistory")) || [];

if (historyData.length === 0) {
  historyList.innerHTML = "<li>No scan history found.</li>";
} else {
  historyData.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product_name} (${item.barcode})`;
    li.style.cursor = "pointer";
    li.style.textDecoration = "underline";
    li.addEventListener("click", () => fetchFromHistory(item.barcode));
    historyList.appendChild(li);
  });
}

const fetchFromHistory = async (barcode) => {
  document.body.innerHTML = "<img src='../images/loading.gif' />";

  try {
    const response = await fetch(`https://06062022.xyz/barcode/${barcode}`);
    const data = await response.json();

    if (!response.ok || data["product_name"] === "N/A") {
      throw new Error("Product not found");
    }

    localStorage.setItem("productData", JSON.stringify(data));
    window.location.href = "../pages/product.html";
  } catch (error) {
    alert("Failed to fetch product: " + error.message);
    window.location.reload();
  }
};
