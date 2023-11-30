window.addEventListener("DOMContentLoaded", (event) => {
    animateLinks();
    runPreloaderAnimation();
});

window.addEventListener("resize", (event) => { });

function animateLinks() {
    let heroLinks = document.querySelectorAll(".hero-link");
    heroLinks.forEach((herolink) => {
        const templink = herolink.querySelector("*");
        templink.style.textShadow = "0 1em";
        herolink.addEventListener("mouseenter", () => {
            gsap.to(templink, {
                yPercent: -101,
                overwrite: true,
                ease: "circ.inOut",
                overwrite: true,
            });
        });

        herolink.addEventListener("mouseleave", () => {
            gsap.set(templink, {
                yPercent: 0,
                overwrite: true,
            });
        });
    });
}

function setFakeHeaderHeight() {
    let fakeHeader = document.querySelector(".fake-header-spacer");
    let actualHeader = document.querySelector(".header-section");
    fakeHeader.style.height = actualHeader.offsetHeight + "px";
}



function runPreloaderAnimation() {
    gsap.to(".preloader-section", {
        //autoAlpha: 0,
        xPercent: -101,
        duration: 0.7,
        delay: 1,
        ease: "power2.inOut"
    });
}