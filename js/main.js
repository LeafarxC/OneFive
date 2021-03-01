feather.replace()

/* Swipper on Index */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  loop: true,
  autoplay:true,
  spaceBetween: 20,
  grabCursor: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      loopedSlides: 4,
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 3,
      loopedSlides: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      loopedSlides: 2,
      spaceBetween: 10
    },
    305: {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 20,
    }
    }
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('.button__top').fadeIn();
  } else {
      $('.button__top').fadeOut();
  }
});
$(document).ready(function() {
  $(".button__top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
});

/* Hide Menu on Scroll */
let prevScrollpos = window.pageYOffset;
const header = document.querySelector(".header");
window.onscroll = function(){
  let scrollTop = window.pageYOffset;
  if(prevScrollpos > scrollTop ){
    header.style.top = "0";
  }else{
    header.style.top = `-${header.offsetHeight}px`;
  } 
  prevScrollpos = scrollTop;
}

/* Swipper on Article */
var mySwiper2 = new Swiper('#swiper-container2', {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 3
})


/* log in and Sign up */
$('.form__container').find('input, button').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('input');
 
	  if (e.type === 'keyup') {
		if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    	label.removeClass('active highlight'); 
		} else {
	    label.removeClass('highlight');   
		}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    	label.removeClass('highlight'); 
		} 
      else if( $this.val() !== '' ) {
	    label.addClass('highlight');
		}
    }
 
});
 
$('.form__tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');
 
  $('.form__content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

/* shakein Login */
$(".form__submit").click(function(){
  $(".form__container").addClass("shakein")
  $(".warn__text").show()
});

/* Toggle Menu */
const toggle = document.querySelector(".header__toggle");
const navLinks = document.querySelector(".nav__list");
const links = document.querySelector(".nav__item");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

