const toggleBtn = document.getElementById("check");
const basic = document.querySelector(".basic");
const pro = document.querySelector(".pro");
const master = document.querySelector(".master");

toggleBtn.addEventListener("click", () => {
    if(toggleBtn.checked){
        basic.innerHTML = "19.99"
        pro.innerHTML = "24.99"
        master.innerHTML = "39.99"
    }else{
        basic.innerHTML = "199.99"
        pro.innerHTML = "249.99"
        master.innerHTML = "399.99"
    }

    basic.classList.add("zoom-in");
    pro.classList.add("zoom-in");
    master.classList.add("zoom-in");

    setTimeout(() => {
        basic.classList.remove("zoom-in");
        pro.classList.remove("zoom-in");
        master.classList.remove("zoom-in");
    }, 500);
})