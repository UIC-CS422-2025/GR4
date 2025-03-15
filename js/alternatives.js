document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
      localStorage.setItem("alternative", [options[i].children[0].src, i + 1]);
      window.location.href = "../pages/alternative-info.html";
    });
  }
});
