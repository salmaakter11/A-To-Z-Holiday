(function($) {
    "use strict";
    $(document).ready(function() {});
    $(document).ready(function() {
        setTimeout(()=>{
            $(".site-preloader").addClass('d-none');
        }
        , 300);
    })
    $(window).scroll(()=>{
        if ($(window).scrollTop() > 100) {
            $(".main-header-area").addClass("scrolled");
        } else {
            $(".main-header-area").removeClass("scrolled");
        }
    }
    );

    
    $('.collapse').on('shown.bs.collapse', function(e) {
        var $card = $(this).closest('.accordion-item');
        var $open = $($(this).data('parent')).find('.collapse.show');
        var additionalOffset = 0;
        if ($card.prevAll().filter($open.closest('.accordion-item')).length !== 0) {
            additionalOffset = $open.height();
        }
        $('html,body').animate({
            scrollTop: $card.offset().top - additionalOffset - 80
        }, 30);
    });
    $(".country-dropdown-area .main-items .list li").hover(function() {
        $(this).find(".country-dropdown-box").addClass("d-block");
    }, function() {
        $(".country-dropdown-box").removeClass("d-block");
    });
    $(".country-dropdown-box").hover(function() {
        $(this).addClass("d-block");
    }, function() {
        $(".country-dropdown-box").removeClass("d-block");
    });
    $(document).ready(function() {
        setTimeout(()=>{
            $('.select-two-basic').select2();
        }
        , 200);
    });
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.select-two-basic').select2({
            width: '100%'
        });
    });
    $(".datepicker").datepicker();
   
}
)(jQuery);
