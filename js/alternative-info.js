document.addEventListener("DOMContentLoaded", () => {
  const altData = JSON.parse(localStorage.getItem("alternative"));

  const name = document.querySelector("#alternative-name");
  const img = document.querySelector("#alternative-img");
  const aisle = document.querySelector("#aisle");
  const status = document.querySelector("#status-msg");

  name.textContent = altData.name || "Alternative";
  img.src = altData.image || "../images/placeholder.png";
  aisle.textContent = `Aisle ${altData.aisle ?? "?"}`;
  status.textContent = `${localStorage.getItem("preference")} Friendly`;
});
