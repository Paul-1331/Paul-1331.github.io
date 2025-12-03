// Time-based greeting
(function () {
    const greetingEl = document.getElementById("greeting-text");
    if (!greetingEl) return;

    const hour = new Date().getHours();
    let timeGreeting;

    if (hour < 5) timeGreeting = "Burning the midnight oil, huh?";
    else if (hour < 12) timeGreeting = "Good morning! Perfect time to debug life and code.";
    else if (hour < 18) timeGreeting = "Good afternoon! One more problem, one more proof.";
    else timeGreeting = "Good evening! Great time for CP and side projects.";

    greetingEl.textContent = timeGreeting;
})();

// Theme toggle (dark / light)
(function () {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const prefersLight = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches;

    const saved = localStorage.getItem("paul-theme");
    if (saved === "light" || (!saved && prefersLight)) {
        document.body.classList.add("light");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light");
        toggleBtn.textContent = isLight ? "☀️" : "🌙";
        localStorage.setItem("paul-theme", isLight ? "light" : "dark");
    });
})();
