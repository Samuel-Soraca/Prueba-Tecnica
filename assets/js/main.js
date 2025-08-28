function cambiarEstilo() {
    let marca = document.getElementById("marca").value;
    let body = document.body;
    let select = document.getElementById("marca");

body.className = "default";
select.style.backgroundColor = "";
select.style.color = "";

document.querySelectorAll("#form-Americanino, #form-AmericanEagle, #form-Chevignon, #form-Esprit, #form-Rifle")
    .forEach(div => div.classList.add("d-none"));

if (marca === "Americanino") {
    body.className = "Americanino";
    select.style.backgroundColor = "#1e3b8a67"; 
    select.style.color = "#ffffffff"; 
    document.getElementById("form-Americanino").classList.remove("d-none");
} else if (marca === "AmericanEagle") {
    body.className = "AmericanEagle";
    select.style.backgroundColor = "rgba(255, 236, 194, 0.63)"; 
    select.style.color = "rgba(65, 42, 0, 1)"; 
    document.getElementById("form-AmericanEagle").classList.remove("d-none");
} else if (marca === "Chevignon") {
    body.className = "Chevignon";
    select.style.backgroundColor = "#5a332175"; 
    select.style.color = "rgba(255, 234, 222, 1)"; 
    document.getElementById("form-Chevignon").classList.remove("d-none");
} else if (marca === "Esprit") {
    body.className = "Esprit";
    select.style.backgroundColor = "#ffffffff"; 
    select.style.color = "#000000ff"; 
    document.getElementById("form-Esprit").classList.remove("d-none");
} else if (marca === "Rifle") {
    body.className = "Rifle";
    select.style.backgroundColor = "#b45309"; 
    select.style.color = "#ffd000ff"; 
    document.getElementById("form-Rifle").classList.remove("d-none");
    }
}