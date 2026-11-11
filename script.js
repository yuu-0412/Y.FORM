
document.addEventListener("DOMContentLoaded", () => {

    // アニメーション対象
    const targets = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".works-intro, " +
        ".work-card, " +
        ".skills-intro, " +
        ".skill-row, " +
        ".contact-inner"
    );

    // WORKSを順番に表示
    document.querySelectorAll(".work-card").forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // SKILLSを順番に表示
    document.querySelectorAll(".skill-row").forEach((row, index) => {
        row.style.transitionDelay = `${index * 0.12}s`;
    });

    // スクロール検知
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    // アニメーション開始
    targets.forEach(target => {
        target.classList.add("reveal");
        observer.observe(target);
    });

});


// Custom Cursor
const cursor = document.querySelector(".cursor-circle");

if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    document.querySelectorAll("a, button").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });
}

// SOAP BUBBLES
document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".bubble-background");

    if (!container) return;

    const bubbleCount = 18;

    for (let i = 0; i < bubbleCount; i++) {

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 45 + 15;
        const duration = Math.random() * 15 + 15;
        const left = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 160;

        bubble.style.setProperty("--size", `${size}px`);
        bubble.style.setProperty("--duration", `${duration}s`);
        bubble.style.setProperty("--left", `${left}%`);
        bubble.style.setProperty("--drift", `${drift}px`);
        bubble.style.setProperty("--delay", `${-Math.random() * duration}s`);

        container.appendChild(bubble);
    }

});