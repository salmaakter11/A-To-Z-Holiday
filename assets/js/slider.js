(function($) {

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    
    
    $("#hajj-umrah-image-slider").owlCarousel({
        items: 1,
        loop: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        nav: false,
        dots: false,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
    });
    $('.hajj-umrah-details-hash-slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        items: 7,
        dots: false,
        autoplay: true,
        center: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1200: {
                items: 6,
                nav: true
            }
        }
    });

 
}
)(jQuery);
