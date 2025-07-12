const headerEl = document.querySelector(".header")

window.addEventListener("scroll", ()=> {
    const topAmount = document.documentElement.scrollTop
    if(topAmount > 0){
        headerEl.classList.add("dark")
    }else{
        headerEl.classList.remove("dark")
    }
})
