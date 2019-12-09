export default function() {


    $(".js-menu").on("click", function (e) {




        if (!$(this).is('.open')) {
            $(".js-menu").addClass("open");
            $('html').addClass('menu-open');
            $(".page-header__mobile-toggle").css('height', `calc(100vh - ${$(".page-header").height()}px)`);
            $(".page-header__mobile-toggle").slideDown()

        } else {
            menuClose();
        }

        return false
    });
    $(".page-header__search").on('click', function (e) {
        if (!$(this).is('.page-header__search_open')) {
            searchOpen()
            return false
        }
    })
    $(".page-header__search-btn").on('click', function (e) {
        let $search = $(this).closest(".page-header__search");
        if (!$search.is('.page-header__search_open')) {
            searchOpen()
            return false
        }
    })
    $(window).scroll(function() {
        if ($('body').width() < 1024) {
            return
        }
        menuClose();
        searchClose();
    })
    $(document).mouseup(function (e) {
        let search = $(".page-header__search");
        if (search.has(e.target).length === 0){
            searchClose();
        }
    });
    function searchOpen() {
        $(".page-header__search").addClass('page-header__search_open')
        $('.page-header__search-control').val('').focus();
    }
    function searchClose() {
        $(".page-header__search").removeClass('page-header__search_open')
    }
    function menuClose() {
        $(".js-menu").removeClass("open");
        $(".page-header__mobile-toggle").slideUp();
        $('html').removeClass('menu-open');
    }

    $('.page__header_abs:visible').each(function(i,e) {
        let h = $(this).height();
        let $el = $(this).next();
        let p = parseFloat($el.css('padding-top'))
        $el.css('padding-top', h+p);
    })

    if ($('body').width() > 991 && (window.location.search.indexOf('backstop') == -1)) {
        var h = $('.page__header').outerHeight()
        $('.b-intro').css('min-height', `calc(100vh - ${h}px)`)
    }
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
        $('.b-intro, .b-main').css('height', '100vh');
    }
}
