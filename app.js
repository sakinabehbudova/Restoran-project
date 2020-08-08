//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  $('.btn').mouseover(function () {
  $(this).css("color","lightgrey");
  $(this).css("transition-duration","0.5s");
})

  $('.btn').mouseout(function () {
  $(this).css("color","black");
  $(this).css("transition-duration","0.5s");
})

$(document).ready(function () {
      $('.item-link').click(function () {
        $('.item-link.active').removeClass("active");
        $(this).addClass("active");
      });
    });
