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
// for search button
let button = true;
const searchButton = document.getElementById("submit_button");
const applyButton = document.getElementById("ap_btn");
const registerButton = document.getElementById("rg_btn");
searchButton.onclick = ()=>{
    searchButton.style.scale = .9;
    setTimeout(()=>{
        searchButton.style.scale = 1;
        // buttonAnime.style.scale = 1;
    },70)
}
applyButton.onclick =()=>{
    applyButton.style.scale = .9;
    setTimeout(()=>{
        applyButton.style.scale = 1;
    },70)
}
registerButton.onclick =()=>{
    registerButton.style.scale = .9;
    setTimeout(()=>{
        registerButton.style.scale = 1;
    },70)
}