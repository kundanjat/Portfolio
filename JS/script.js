
$(document).ready(function(){
    $("#btn").click(function(){
      $(".nav-links2").slideDown("show");
    });
  });

  $(document).ready(function(){
    $("#cancel").click(function(){
      $(".nav-links2").slideUp("show");
    });
  });

  const typingAnimationElement = document.getElementById('bg-text');
  const typingTexts = [
  'Web Developer!',
  ];
  function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
    typingAnimationElement.textContent += text[i];
    }, i * 200);
  }
  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 200);
  }
  playTypingAnimation(typingTexts[0]);

  // skill slider 

  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToSroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});

$('.logo-slider2').slick({
  slidesToShow: 4,
  slidesToSroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});

$('.logo-slider3').slick({
  slidesToShow: 2,
  slidesToSroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});
// $('.logo-slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
