document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="diet"]');

  const currentPref = localStorage.getItem("preference");
  radios.forEach((radio) => {
    if (radio.nextElementSibling.textContent === currentPref) {
      radio.checked = true;
    }

    radio.addEventListener("change", () => {
      const newPref = radio.nextElementSibling.textContent;
      localStorage.setItem("preference", newPref);
    });
  });
});
