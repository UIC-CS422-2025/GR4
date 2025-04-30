const historyList = document.querySelector(".history-list");
const historyData = JSON.parse(localStorage.getItem("scanHistory")) || [];
const noHistory = document.querySelector("#no-history");

if (historyData.length !== 0) {
  noHistory.classList.add("hidden");
  historyData.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm";

    li.innerHTML = `
      <div class="flex items-center gap-4">
        <img 
          src="${item.image_urls[0] || "../images/placeholder.png"}" 
          alt="${item.product_name}" 
          class="w-12 h-12 rounded object-cover bg-gray-100"
        />
        <div>
          <div class="font-semibold text-sm">${item.product_name}</div>
          <div class="text-xs text-gray-500">${
            item.timestamp || "Unknown Time"
          }</div>
        </div>
      </div>
    `;

    li.style.cursor = "pointer";
    li.addEventListener("click", () => fetchFromHistory(item));

    historyList.appendChild(li);
  });
} else {
  noHistory.classList.remove("hidden");
}

const fetchFromHistory = (data) => {
  try {
    localStorage.setItem("productData", JSON.stringify(data));
    window.location.href = "../pages/product.html";
  } catch (error) {
    location.href = "../pages/error.html";
  }
};
