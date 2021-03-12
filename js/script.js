$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        if (!$('nav').hasClass('scrolled')) $('nav').addClass('scrolled');
    });
});
$(window).scroll(function () {
    if ($('#nav-icon1').hasClass('open')) {

    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    }

});

var arr = [1, 2, 3, 4, 5, 6];

$('#myCarousel').carousel();

var drawRipple = function (ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
};

// var drawTouchRipple = function (event) {
//     // ev.preventDefault();
//     var x = event.touches[0].clientX;
//     var y = event.touches[0].clientY;
//     var node = document.querySelector(".ripple");
//     var newNode = node.cloneNode(true);
//     newNode.classList.add("animate");
//     newNode.style.left = ev.clientX - 5 + "px";
//     newNode.style.top = ev.clientY - 5 + "px";
//     node.parentNode.replaceChild(newNode, node);
// };

//Ripple Triggers
window.addEventListener("click", drawRipple);
// window.addEventListener("touchstart", drawTouchRipple, );