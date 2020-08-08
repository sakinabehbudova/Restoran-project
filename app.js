//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  $('.item-link').mouseover(function () {
  $(this).css("color","#DAA520");
  $(this).css("transition-duration","0.5s");
})

  $('.item-link').mouseout(function () {
  $(this).css("color","white");
  $(this).css("transition-duration","0.5s");
  })

  $('.btn').mouseover(function () {
  $(this).css("color","lightgrey");
  $(this).css("transition-duration","0.5s");
})

  $('.btn').mouseout(function () {
  $(this).css("color","black");
  $(this).css("transition-duration","0.5s");
})
