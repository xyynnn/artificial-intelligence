$(function () {
    $(window).scroll(function () {
        let toTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (toTop > 100) {
            $('.back-to-top').css("bottom", "15px");
        } else {
            $('.back-to-top').css("bottom", "-50px");
        }
    })
})