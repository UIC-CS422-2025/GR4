window.addEventListener("pageshow", () => {
  // Always show dietary preference
  document.querySelector(
    "#currentPreference"
  ).textContent = `${localStorage.getItem("preference")}`;
});

document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    const img = option.querySelector("img").src;
    const name = option.querySelector("p").textContent;
    const aisleText = option.querySelector("p + p")?.textContent || "";
    const aisleMatch = aisleText.match(/\d+/);
    const aisle = aisleMatch ? parseInt(aisleMatch[0]) : null;

    option.addEventListener("click", () => {
      const altData = {
        image: img,
        name: name,
        aisle: aisle,
      };

      localStorage.setItem("alternative", JSON.stringify(altData));
      window.location.href = "../pages/alternative-info.html";
    });
  });
});
