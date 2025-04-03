document.addEventListener("DOMContentLoaded", () => {
    console.log("here");
    let veget_btn = document.getElementById("vegetarian-btn");
    let vegan_btn = document.getElementById("vegan-btn")

    veget_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegeterian");
        console.log("vegeterian");
        location.href='./pages/scanner.html';
    });

    vegan_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegeterian");
        console.log("vegan");
        location.href='./pages/scanner.html';
    });
});