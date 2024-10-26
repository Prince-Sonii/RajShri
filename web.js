const navBar = document.getElementById("nav_bar");
const cl = document.getElementById("click")
let scrollValue;
let a = addEventListener("scroll",()=>{
    scrollValue = window.scrollY;
    if(scrollValue>50){
        navBar.style.opacity = 0.6;
    } else {
        navBar.style.opacity = 1; 
    }
})
navBar.addEventListener("mouseenter",()=>{
    navBar.style.opacity = 1;
})
navBar.addEventListener("mouseleave",()=>{
    if(scrollValue>50){
        navBar.style.opacity = 0.6;
    }
})
// let button = true;
const getUpdateButton = document.getElementById("get_upd_btn");
getUpdateButton.onclick =()=>{
    getUpdateButton.style.scale = .9;
    setTimeout(()=>{
        getUpdateButton.style.scale = 1;
    },70)
}
//for navbar buttons
const homeButton = document.getElementById("home_btn");
const aboutButton = document.getElementById("about_btn");
const servicesButton = document.getElementById("services_btn");
const conactUsButton = document.getElementById("contactUs_btn");
homeButton.onclick = () =>{
    window.scrollTo({
        top: 0,  // Y-position in pixels (e.g., 500px down the page)
        behavior: 'smooth' // Optional, makes scrolling smooth
      });
}
aboutButton.onclick = () =>{
    window.scrollTo({
        top: 428,  // Y-position in pixels (e.g., 500px down the page)
        left: 0,   // X-position in pixels (usually 0 if scrolling vertically)
        behavior: 'smooth' // Optional, makes scrolling smooth
      });
}
servicesButton.onclick = () =>{
    window.scrollTo({
        top: 882,  // Y-position in pixels (e.g., 500px down the page)
        behavior: 'smooth' // Optional, makes scrolling smooth
      });
}
conactUsButton.onclick = () =>{
    window.scrollTo({
        top: document.body.scrollHeight,  // Y-position in pixels (e.g., 500px down the page)
        behavior: 'smooth' // Optional, makes scrolling smooth
      });
}
