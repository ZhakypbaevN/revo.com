$(function() {

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        doc_w = $(window).width();

        

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if(doc_w > '768'){
            if( scrollOffset >= headerH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

        if(doc_w < '768'){
            if( scrollOffset > 0 ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }
        
    }
    $('#slider_one_first').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        arrow: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $(".slider_one__sliderBtn_first"),

        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });
    $('#slider_one').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        arrow: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $(".slider_one__sliderBtn"),

        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });

    $('#slider_two').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrow: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $(".slider_two__sliderBtn"),

        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });

    $(".select_btn_one").on("click", function(event) {
        event.preventDefault();

        $(".select_btn").removeClass("active");
        $(".select_item").removeClass("active");
        $(".select_btn_one").addClass("active");
        $(".select_one").addClass("active");

    });

    $(".select_btn_two").on("click", function(event) {
        event.preventDefault();

        $(".select_btn").removeClass("active");
        $(".select_item").removeClass("active");
        $(".select_btn_two").addClass("active");
        $(".select_two").addClass("active");

    });

    $(".select_btn_three").on("click", function(event) {
        event.preventDefault();

        $(".select_btn").removeClass("active");
        $(".select_item").removeClass("active");
        $(".select_btn_three").addClass("active");
        $(".select_three").addClass("active");

    });

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

});



