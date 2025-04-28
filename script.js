const texts = [
    "Hello User!",
    "It's nice to meet you!",
    "I am Ouen.",
    "Welcome to my portfolio!",
    "What else would you like to know about me?"
];

const introContainer = document.getElementById("intro-text");
let index = 0;

function showText() {
    if (index < texts.length) {
        const newText = document.createElement("div");
        newText.textContent = texts[index];
        newText.classList.add("intro-text");
        introContainer.appendChild(newText);

        setTimeout(() => {
            newText.style.opacity = "1";
            newText.style.transform = "translate(-50%, 0)";
        }, 100);

        setTimeout(() => {
            newText.style.opacity = "0";
            newText.style.transform = "translate(-50%, -20px)";
            setTimeout(() => {
                newText.remove();
                if (index === texts.length - 1) {
                    const finalText = document.createElement("div");
                    finalText.textContent = texts[index];
                    finalText.classList.add("final-text");
                    introContainer.appendChild(finalText);

                    setTimeout(() => finalText.classList.add("moving"), 500);

                    setTimeout(() => {
                        document.querySelector(".tabs-container").classList.remove("hidden");
                        document.querySelector(".tabs-container").classList.add("show");

                        document.querySelector(".content-wrapper").classList.remove("hidden");
                        document.querySelector(".content-wrapper").classList.add("show");
                    }, 2500);
                }
                else {
                    index++;
                    showText();
                }
            }, 500);
        }, 1500);
    }
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    showText();

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);

        let size = Math.random() * 5 + 2;
        let posX = Math.random() * window.innerWidth;
        let posY = Math.random() * window.innerHeight;
        let duration = Math.random() * 5 + 3;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDuration = `${duration}s`;
    }
});
