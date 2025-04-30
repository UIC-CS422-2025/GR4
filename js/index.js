document.addEventListener("DOMContentLoaded", () => {
  let veget_btn = document.getElementById("vegetarian-btn");
  let vegan_btn = document.getElementById("vegan-btn");

  veget_btn.addEventListener("click", () => {
    localStorage.setItem("preference", "Vegeterian");
    location.href = "./pages/scanner.html";
  });

  vegan_btn.addEventListener("click", () => {
    localStorage.setItem("preference", "Vegan");
    location.href = "./pages/scanner.html";
  });

  const popup = document.querySelector(".popup");
  const close_popup_btn = document.querySelectorAll(".close-btn");

  for (const btn of close_popup_btn) {
    btn.addEventListener("click", () => {
      localStorage.setItem("hide-popup", true);
      popup.style.display = "none";
    });
  }

  // Show or hide popup
  if (!localStorage.getItem("hide-popup")) {
    popup.style.display = "block";
  }
});
