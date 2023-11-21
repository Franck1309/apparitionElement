let playOnce = true;

window.addEventListener("scroll", () => {
    let scrollValue = (scrollY + innerHeight) /  document.body.offsetHeight;

    if (scrollY > 0){
       navbar.style.height = "40px";
    } else {
        navbar.style.height = "90px";
    }
    if (scrollValue > 0.45){
        imgImprovise.style.opacity = 1 ;
        imgImprovise.style.transform = "none";
    }
    if (scrollValue > 0.90 && playOnce){
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
})

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
})
