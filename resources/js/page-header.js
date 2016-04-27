define(['jquery'], function ($) {
    return {
        init: function () {
            var pageHeader = $('.page-header-sticky');
            var scroll = $(document).scrollTop();
            $(window).scroll(function () {
                var scrolled = $(document).scrollTop();
                if (scrolled > scroll) {
                    pageHeader.addClass('off-canvas');
                } else {
                    pageHeader.removeClass('off-canvas');
                }
                scroll = $(document).scrollTop();
            });
        }
    };
});