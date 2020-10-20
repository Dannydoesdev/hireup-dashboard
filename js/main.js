$(document).ready(function () {
    $("#banner-close").click(function () {
        $("#main-banner-id").slideUp("slow");
    });

    $("#tap-to-open-team").click(function () {
        $(".your-team").slideToggle("slow");
    });

    $("#tap-to-open-bookings").click(function () {
        $(".bookings-card").slideToggle("slow");
    });

    $("#tap-to-open-info").click(function () {
        $(".promo-area").slideToggle("slow");
    });

    ("#tap-to-open-jobs").click(function () {
        $("#jobs-created-toggle").slideToggle("slow");
    });

});

document.getElementById("hamburger").addEventListener("click", sideMenuAppears);
document.getElementById("menu-close").addEventListener("click", sideMenuDisappears);


function sideMenuAppears() {
    document.getElementById("side-menu").classList.add("show-menu");
}

function sideMenuDisappears() {
    document.getElementById("side-menu").classList.remove("show-menu");
}


// document.getElementById("dropdown-trigger").addEventListener("mouseover", menuOneShow);
// document.getElementById("menu-1").addEventListener("mouseleave", menusHide);
// function menuOneShow() {
//     document.getElementById("menu-1").classList.add("show");
// }

// function menusHide() {
//     document.getElementById("menu-1").classList.remove("show");

// }



