var tl = gsap.timeline({
  defaults: {
    duration: 0.9
  }
});
//landing Page
tl.from(".logo", {
    y: -500,
    opacity: 0
  })
  .from(
    ".anim1", {
      y: -100,
      opacity: 0,
      stagger: 0.6,
      ease: "back.out(1.7)"
    },
    "-=.1"
  )
  .from(".resume-bt", {
    x: 100,
    opacity: 0,
    ease: "back.in(.7)"
  }, "-=1.2")
  .from(".nav-anim", {
    opacity: 0,
    ease: "power3"
  })


// About section
let About = gsap.timeline({
  defaults: {
    duration: 0.9,
  },
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=500",
    pin: true,


  },
})
About.from(
    "#anim2", {
      x: 100,
      easing: "power3",
      opacity: 0,
    },
  )
  .from(
    ".icons", {
      x: -80,
      opacity: 0,
      ease: "back.in(0.7)",
      stagger: {
        amount: 1,
      },

    },
    "-=0.5"
  )
  .from(
    ".head, .para", {
      x: 80,
      opacity: 0,
      ease: "back.in(0.7)",
      stagger: {
        amount: 1,
      },

    },
    "-=1.5"
  );



// tools section
let Tools = gsap.timeline({
  defaults: {
    duration: 1,
  },
  scrollTrigger: {
    trigger: ".container1",

    start: "top top",
    end: "+=500",
    pin: true,


  },
})
Tools.from(
    "#anim3", {
      y: 100,
      easing: "power3",
      opacity: 0,
    },
  )
  .from(
    ".project-items", {
      x: -80,
      opacity: 0,
      ease: "back.in(0.7)",
      stagger: {
        amount: 1,
      },

    },
    "-=1.5"
  )
  .from(
    ".heading", {
      x: 80,
      opacity: 0,
      ease: "back.in(0.7)",
    },
    "-=0.5"
  )
  .from(
    ".list", {
      y: 80,
      opacity: 0,
      ease: "back.in(0.7)",


    },
    "-=1.5"
  );


// projects sec
let Project = gsap.timeline({
  defaults: {
    duration: 1,
  },
  scrollTrigger: {
    trigger: ".container2",
    start: "top top",
    end: "+=500",
    pin: true,


  },
})
Project.from(
    "#anim4", {
      y: 100,
      easing: "power3",
      opacity: 0,
    }
  )
  .from(
    ".svg-1", {
      x: -80,
      opacity: 0,
      ease: "back.in(0.7)",


    },

  )
  .from(
    ".pro-items", {
      x: -80,
      opacity: 0,
      ease: "back.in(0.7)",
      delay: "1",
      stagger: {
        amount: 1,
      },

    },
    "-=1.5"
  );

// contact sec
let foot = gsap.timeline({
  defaults: {
    duration: 1.5,
  },
  scrollTrigger: {
    trigger: ".contact",

  },
})


foot.from(
    ".img", {

      opacity: 0,
      ease: "back.in(0.7)",
      delay: "1",
      stagger: {
        amount: 1,
      },
    },
    "-=1.5"
  )
  .from(
    ".foot-text", {
      easing: "power3",
      opacity: 0,
    }
  );