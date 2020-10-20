console.log("hi");


// function sideMenuAppears() {
//     // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
//     document.getElementById('side-menu').classList.add('show-menu');
// }

// /* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
// function sideMenuDisappears() {
//     // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
//     document.getElementById('side-menu').classList.remove('show-menu');
// }





$(document).ready(function () {
    $("#banner-close").click(function () {
        $("#main-banner-id").slideUp("slow");
    });
});


$(document).ready(function () {
    $("#tap-to-open-team").click(function () {
        $(".your-team").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#tap-to-open-bookings").click(function () {
        $(".bookings-card").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#tap-to-open-info").click(function () {
        $(".promo-area").slideToggle("slow");
    });
});

