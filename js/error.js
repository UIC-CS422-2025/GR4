const report_btn = document.getElementById("report-btn");

report_btn.addEventListener("click", () => {
    report_btn.innerHTML = "<img id='loading-gif' src='../images/transparent-load.gif'/>";
    report_btn.disabled = true;

    setTimeout(() => {
        report_btn.innerHTML = "";
        report_btn.disabled = false;
        report_btn.innerHTML = "<i class='fa-solid fa-check'></i>";
    }, 1500);

});

const continue_btn = document.getElementById("continue-btn");

continue_btn.addEventListener("click", () => {
    report_btn.innerText = "Report";
    location.href = "../pages/scanner.html";
});