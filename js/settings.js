document.addEventListener("DOMContentLoaded", () => {

    let text = document.getElementById("preference");
    text.textContent = "I am a " + localStorage.getItem("preference");

    let veget_btn = document.getElementById("vegetarian-btn");
    let vegan_btn = document.getElementById("vegan-btn")

    veget_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegeterian");
        history.back();
    });

    vegan_btn.addEventListener("click", () =>{
        localStorage.setItem("preference", "Vegan");
        history.back();
    });

});
