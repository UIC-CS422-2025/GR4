const report_btn = document.getElementById("report-btn");
const continue_btn = document.getElementById("continue-btn");

report_btn.addEventListener("click", () => {
  report_btn.innerHTML = `
          <svg class="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        `;
  report_btn.disabled = true;
  continue_btn.disabled = true;

  setTimeout(() => {
    report_btn.innerHTML = `<i class='fa-solid fa-check'></i>`;
    report_btn.classList.remove("bg-green-600");
    report_btn.classList.add("bg-green-700");

    continue_btn.disabled = false;
  }, 1500);
});

continue_btn.addEventListener("click", () => {
  report_btn.disabled = false;
  report_btn.innerText = "Report Product";
  report_btn.classList.remove("bg-green-700");
  report_btn.classList.add("bg-green-600");

  window.location.href = "../pages/scanner.html";
});

window.addEventListener("pageshow", () => {
  // Always show dietary preference
  document.querySelector(
    "#currentPreference"
  ).textContent = `${localStorage.getItem("preference")}`;
});
