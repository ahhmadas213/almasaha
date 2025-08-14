document.addEventListener('DOMContentLoaded', () => {
  CustomEase.create("hop", "M0, C0.355, 0.022, 0.448, 0.079,0.5, 0.5, 0.542, 0.846, 0.615, 1 1, 1 ");
  CustomEase.create("hop2", "M0, C0.355, 0.022, 0.448, 0.079,0.5, 0.5, 0.542, 0.846, 0.615, 1 1, 1 ");

  const mainTl = gsap.timeline();
  const revealerTl = gsap.timeline();
  const scaleTl = gsap.timeline();

  revealerTl.to(".r1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1.5,
    ease: "hop",
  }).to(".r2", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 1.5,
    ease: "hop",
  }, "<");

  scaleTl.to(".img:first-child", {
    scale: 1,
    duration: 2,
    ease: "power4.inOut",
  })

  const images = document.querySelectorAll(".img:not(:first-child)");
  images.forEach((img, index) => {
    scaleTl.to(img, {
      opacity: 1,
      scale: 1,
      duration: 1.25,
      ease: "power3.out",
      delay: index * 0.5,
    }, ">-0.5");
  });

  mainTl.add(revealerTl).add(scaleTl, "-=1.25").add(() => {
    document.querySelectorAll(".imag:not(.main")
    .forEach((img) => img.remove());

    const state = Flip.getState(".main");
    const imagesContainer = document.querySelector(".images");
    imagesContainer.classList.add("stacked-container");

    document.querySelectorAll(".main").forEach((img, i) => {
      img.classList.add("stacked");
      img.computedStyleMap.opacity = i;
      gsap.set(".img.stacked", {
        clearProps: "transform, top, left",
      })
    });

    return Flip.from(state, {
      duration: 2,
      ease: "hop",  
      absolute: true,
      stagger: {
        amount: -0.3,
      },
  })
  }).to("word h1, .nav-item p, .line p, .site-info h2,", {
    y: 0,
    duration:3,
    ease:"hop2",
    stagger:0.1,
    delay:1.25

  }).to(".cover-img", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  })
});