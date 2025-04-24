document.addEventListener("DOMContentLoaded", () => {
  alternative = localStorage.getItem("alternative").split(",");
  img_src = alternative[0];
  const name = document.querySelector("#alternative-name");
  const img = document.querySelector("#alternative-img");
  const aisle = document.querySelector("#aisle");

  name.textContent = `Alternative #${alternative[1]}`;
  img.src = img_src;
  aisle.textContent = `Can be found in Aisle ${
    Math.floor(
      Math.random() * 500,
    )
  }`;
});
