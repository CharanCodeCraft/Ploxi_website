(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    
})(jQuery);

new svgMap({
  targetElementID: 'svgMap',
  
  // Color scheme - YOUR REQUIREMENTS
  colorMax: '#F00001',        // Red for highest values (highlighted regions)
  colorMin: '#F00001',        // Same red to ensure consistent highlighting
  colorNoData: '#7798BA',     // Blue-gray for non-highlighted countries
  
  // Your operating regions data
  data: {
    data: {
      presence: {
        name: 'Our Presence',
        format: '{0} Offices',
        thousandSeparator: ','
      }
    },
    applyData: 'presence',
    values: {
      IN: {presence: 3, offices: 3, projects: 15, cities: 'Mumbai, Delhi, Bangalore'},  // India
      AU: {presence: 2, offices: 2, projects: 8, cities: 'Sydney, Melbourne'},          // Australia
      AE: {presence: 1, offices: 1, projects: 5, cities: 'Dubai'}                       // UAE
    }
  }
});