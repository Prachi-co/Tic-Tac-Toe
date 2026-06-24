const foods = document.querySelectorAll(".FoodBox");
const nextBtn = document.getElementById("nextBtn");

let currentPlayer = 1;

const desserts = [
    "🥞",
    "🧁",
    "🧇",
    "🍩",
    "🍪",
    "🍰"
];

nextBtn.disabled = true;

document.getElementById("Player1").style.opacity = "1";
document.getElementById("Player2").style.opacity = "0.5";

foods.forEach(food => {

    food.addEventListener("click", () => {

        foods.forEach(item => {
            item.classList.remove("selected");
        });

        food.classList.add("selected");

        if (currentPlayer === 1) {
            localStorage.setItem("Player1Food", food.textContent);
        } else {
            localStorage.setItem("Player2Food", food.textContent);
        }

        nextBtn.disabled = false;
        nextBtn.classList.add("active");
    });

});

nextBtn.addEventListener("click", () => {

    if (currentPlayer === 1) {

        foods.forEach((food, index) => {

            food.textContent = desserts[index];

            food.classList.remove("selected");

            food.style.display = "flex";
        });

        document.getElementById("Player1").style.opacity = "0.5";
        document.getElementById("Player2").style.opacity = "1";

        currentPlayer = 2;

        nextBtn.disabled = true;
        nextBtn.classList.remove("active");
        nextBtn.textContent = "Start Game";

    } else {

        window.location.href = "Play.html";

    }

});