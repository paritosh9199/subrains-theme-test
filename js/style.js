(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      // $("#mainNav").addClass("navbar-shrink");
    } else {
      // $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict

function _(id) {
  return document.getElementById(id);
}
var stat = 0;
removeanim();
animate();
console.log("connected");
function animate() {
  _("a1").addEventListener("mouseover", function () {

    if (stat != 1) {
      removeanim(1);
      stat = 1;
    }
    console.log("a1");

    _("ac1").classList.add("animate");
    // setTimeout(removeanim(), 3000);
  });



  _("a2").addEventListener("mouseover", function () {
    if (stat != 2) {
      removeanim(2);
      stat = 2;
    }
    console.log("a2");
    _("ac2").classList.add("animate");
    // setTimeout(removeanim(), 3000);
  });


  _("a3").addEventListener("mouseover", function () {
    if (stat != 3) {
      removeanim(3);
      stat = 3;
    }
    console.log("a3");
    _("ac3").classList.add("animate");
    // setTimeout(removeanim(), 3000);
  });


  _("a4").addEventListener("mouseover", function () {
    if (stat != 4) {
      removeanim(4);
      stat = 4;
    }
    console.log("a4");
    _("ac4").classList.add("animate");
    // setTimeout(removeanim(), 3000);
  });


  _("a5").addEventListener("mouseover", function () {
    if (stat != 5) {
      removeanim(5);
      stat = 5;
    }
    console.log("a5");
    _("ac5").classList.add("animate");
    // setTimeout(removeanim(), 3000);
  });

}

function removeanim(flg) {
  if (flg == 1) {
    _("ac2").classList.remove("animate");
    _("ac3").classList.remove("animate");
    _("ac4").classList.remove("animate");
    _("ac5").classList.remove("animate");
    _("ac1").style.color = "aliceblue";

    _("anim1").classList.add("len2");
    _("anim2").classList.remove("len2");
    _("anim3").classList.remove("len2");
    _("anim4").classList.remove("len2");
    _("anim5").classList.remove("len2");
    
  } else if (flg == 2) {
    _("ac1").classList.remove("animate");
    _("ac3").classList.remove("animate");
    _("ac4").classList.remove("animate");
    _("ac5").classList.remove("animate");
    _("ac2").style.color = "aliceblue";

    _("anim2").classList.add("len2");
    _("anim1").classList.remove("len2");
    _("anim3").classList.remove("len2");
    _("anim4").classList.remove("len2");
    _("anim5").classList.remove("len2");
  } else if (flg == 3) {
    _("ac1").classList.remove("animate");
    _("ac2").classList.remove("animate");
    _("ac4").classList.remove("animate");
    _("ac5").classList.remove("animate");
    _("ac3").style.color = "aliceblue";

    _("anim3").classList.add("len2");
    _("anim2").classList.remove("len2");
    _("anim1").classList.remove("len2");
    _("anim4").classList.remove("len2");
    _("anim5").classList.remove("len2");
  } else if (flg == 4) {
    _("ac1").classList.remove("animate");
    _("ac3").classList.remove("animate");
    _("ac2").classList.remove("animate");
    _("ac5").classList.remove("animate");
    _("ac4").style.color = "aliceblue";

    _("anim4").classList.add("len2");
    _("anim2").classList.remove("len2");
    _("anim3").classList.remove("len2");
    _("anim1").classList.remove("len2");
    _("anim5").classList.remove("len2");
  } else if (flg == 5) {
    _("ac1").classList.remove("animate");
    _("ac3").classList.remove("animate");
    _("ac4").classList.remove("animate");
    _("ac2").classList.remove("animate");
    _("ac5").style.color = "aliceblue";

    _("anim5").classList.add("len2");
    _("anim2").classList.remove("len2");
    _("anim3").classList.remove("len2");
    _("anim4").classList.remove("len2");
    _("anim1").classList.remove("len2");
  } else {
    _("ac1").classList.remove("animate");
    _("ac2").classList.remove("animate");
    _("ac3").classList.remove("animate");
    _("ac4").classList.remove("animate");
    _("ac5").classList.remove("animate");
    _("ac1").style.color = "#a5a3a3";
    _("ac2").style.color = "#a5a3a3";
    _("ac3").style.color = "#a5a3a3";
    _("ac4").style.color = "#a5a3a3";
    _("ac5").style.color = "#a5a3a3";
  }
}

