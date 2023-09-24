let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",function () 
{
    navbar.classList.toggle("active");
});

window.onscroll = () =>
{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 60)
    {
        document.querySelector
    }
};
