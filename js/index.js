document.addEventListener("DOMContentLoaded", () => {

    let veget_btn = document.getElementById("vegetarian-btn");
    let vegan_btn = document.getElementById("vegan-btn")

    veget_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegeterian");
        location.href='./pages/scanner.html';
    });

    vegan_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegan");
        location.href='./pages/scanner.html';
    });
    
});