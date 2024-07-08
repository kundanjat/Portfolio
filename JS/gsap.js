const tl = gsap.timeline();
tl.from(".h1",{
    y:-100,
    opacity:0,
    duration:1,
    ease:"elastic",
})
tl.from(".logo, .nav-links>ul>li, .icon>ul>li",{
    y:-100,
    opacity:0,
    stagger:0.2
})

tl.from("#bg-text",{
    x:-100,
    opacity:0
})
tl.from(".line-h>h1",{
    y:100,
    opacity:0,
    stagger:0.2
})
tl.from(".background-cover",{
    y:100,
    opacity:0
})
tl.from(".circle, .circle2",{
    rotate:360,
    opacity:0,
    scale:0
})
tl.from(".home-img",{
    y:100,
    opacity:0
})

// about section : start 
tl.from(".about-left-container>img",{
    opacity:0,
    scaleX:0,
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "50% 60%",
        scrub: 2,
        // markers: true,
    }
})
tl.from(" .he1, .h2, .para, .btn1",{
    opacity:0,
    scale:0,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "50% 60%",
        scrub: 2,
        // markers: true,
    }
})

// // service : section 
tl.from(".h5",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".services",
        start:"top center",
        end:"50% 60%",
        scrub:3,
        // markers:true
    }
})
tl.from(".ser",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".services",
        start:"top center",
        end:"50% 60%",
        scrub:3,
        // markers:true
    }
})
tl.from(".cards",{
    y:100,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:".services",
        start:"top center",
        end:"50% 60%",
        scrub:3,
        // markers:true
    }
})

// Skill section 
tl.from(".skil",{
    y:-100,
    opacity:0,
    scrollTrigger: {
        trigger:".skill-section",
        start:"top center",
        end:"50% 60%",
        scrub:3,
        // markers:true
    }
})
tl.from(".logo-slider, .logo-slider2, .logo-slider3",{
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger:".skill-section",
        start:"top center",
        end:"50% 60%",
        scrub:3,
        // markers:true
    }
})
// contact section 
tl.from(".contact",{
    y:-100,
    stagger:0.2,
    opacity:0,
    scrollTrigger: {
                trigger:".contact",
                start:"top center",
                end:"50% 60%",
                scrub:3,
                // markers:true
            }
})
tl.from("form input",{
    x:-100,
    opacity:0,
    stagger:0.2,
    scrollTrigger: {
                trigger:".contact",
                start:"top center",
                end:"50% 60%",
                scrub:3,
                // markers:true
            }
})
tl.from("textarea",{
    x:-100,
    opacity:0,
    stagger:0.2,
    scrollTrigger: {
                trigger:".contact",
                start:"top center",
                end:"50% 60%",
                scrub:3,
                // markers:true
            }
})