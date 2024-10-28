document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll("h1, p, ul, social-media-links");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-right");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});