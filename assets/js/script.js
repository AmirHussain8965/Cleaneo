document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target, 10);
            const suffix = counter.dataset.suffix || "";
            let current = 0;
            const duration = 200; // animation smoothness

            const update = () => {
                const increment = target / duration;

                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + suffix;
                }
            };

            update();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                animateCounters();
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));
});


window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_section");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

