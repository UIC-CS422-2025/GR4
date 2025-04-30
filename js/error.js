const report_btn = document.getElementById("report-btn");
const continue_btn = document.getElementById("continue-btn");

report_btn.addEventListener("click", () => {
  report_btn.innerHTML =
    "<img id='loading-gif' src='../images/transparent-load.gif'/>";

  report_btn.disabled = true;
  continue_btn.disabled = true;

  setTimeout(() => {
    report_btn.innerHTML = "";
    report_btn.innerHTML = "<i class='fa-solid fa-check'></i>";
    report_btn.style.backgroundColor = "rgb(21, 168, 21)";

    continue_btn.disabled = false;
  }, 1500);
});

continue_btn.addEventListener("click", () => {
  if (report_btn.disabled) {
    report_btn.disabled = false;
    report_btn.innerHTML = "";
    report_btn.innerText = "Report";
    report_btn.style.backgroundColor = "rgb(159, 223, 255)";
  }

  window.location.href = "../pages/scanner.html";
});
