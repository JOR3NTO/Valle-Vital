window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
        navbar.style.background = "#075712";
        navbar.querySelectorAll("a").forEach(function(link) {
            link.style.color = "black";
        });
    } else {
        navbar.style.background = "transparent";
        navbar.querySelectorAll("a").forEach(link => link.style.color = "white");
    }
});
