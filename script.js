/* ===========================================
   PRAKASH TOUR & TRAVELS
   Version 2.0
=========================================== */

// HERO SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.style.opacity="0";
    });

    slides[index].style.opacity="1";

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

showSlide(currentSlide);

setInterval(nextSlide,4000);


// STICKY HEADER

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});/* ===========================================
   SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================================
   BACK TO TOP BUTTON
=========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0b3d91;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 10px 20px rgba(0,0,0,.2);
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================================
   LOADING COMPLETE
=========================================== */

window.addEventListener("load",()=>{

    console.log("PRAKASH TOUR & TRAVELS Website Loaded Successfully.");

});
