

import Inputmask from "inputmask/dist/inputmask/inputmask.numeric.extensions";
import base from "../../static/js/base/base";
import tippy from 'tippy.js';

export default function() {
    /* */
    $.fn.extend({
        autoHeight: function () {
            function autoHeight_(element) {
                var a = $(element).outerHeight() - $(element).height();
                return $(element)
                    .css({'height': 'auto', 'overflow-y': 'hidden'})
                    .height(element.scrollHeight - a);
            }

            return this.each(function () {
                autoHeight_(this).on('input', function () {
                    autoHeight_(this);
                });
            });
        }
    });
    /**/

    if (($("body").width() > 991) && ($(window).height() > 650)) {
        let showfixedHeader = false;
        $("body").prepend($(".page-header").eq(0).clone().addClass("fixed-header"))
        $("body").prepend($(".page__menu"));
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(".page-header").outerHeight() +200) {

                if (showfixedHeader) {
                    return
                }
                console.log(showfixedHeader)
                window.requestAnimationFrame(showFixedHeader)
                $(".page-up").fadeIn();
                showfixedHeader = true

            } else {
                if (!showfixedHeader) {
                    return
                }
                window.requestAnimationFrame(hideFixedHeader)
                $(".page-up").fadeOut();
                showfixedHeader = false;

            }
        })

        function showFixedHeader() {
            $(".fixed-header").addClass("sticky");
        }
        function hideFixedHeader() {
            $(".fixed-header").removeClass("sticky");
        }

        $(".page-up").on('click', function() {
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 800);
            return false;
        });
        $('body').keydown(function (e) {
            if (e.which == '9') {
                $('body').addClass('tab-user');
            }
        });
        //$(window).Scrollax();
        /*new WOW().init({
            offset:       100
        });*/
    }
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if ($('body').width() > 991 && (!isIE11)) {
        $(window).Scrollax();
        AOS.init({
            easing: 'ease-out-back',
            duration: 1500,
            offset: 120
        });
    } else {
        $('html').addClass('no-js')
        $('[data-aos]').removeAttr('data-aos')
    }

    $(".form-control").focus(function(e){
        $(this).parent().addClass("is-active is-completed");
    });

    $(".form-control").on('change blur', function(e){
        mInputSetState()
    })
    mInputSetState()
    function mInputSetState() {
        $(".form-control").each(function(i,e) {
            if($(this).val() === "") {
                $(this).parent().removeClass("is-completed");
                $(this).parent().removeClass("is-active");
            } else {
                $(this).parent().addClass("is-active is-completed");
            }
        })
    }



    function addScript(link, callback) {
        var script = document.createElement('script');
        script.src = link;
        document.body.appendChild(script);
        script.onload = function() {
            callback()
        };
    }

    $('.lightgallery').lightGallery({
        selector: 'a'
    });
    //$('input[type="tel"]').inputmask("+9 (999) 999-99-99");
    new Inputmask("+9 (999) 999-99-99").mask('input[type="tel"]')


    $('.selectric').selectric();


    $("textarea.form-control").autoHeight();

    $('.modal').on('shown.bs.modal', function (e) {
        try {

            $(window).trigger('resize');
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent .initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }

    })
    $('.modal').on('show.bs.modal', function (e) {
        setTimeout(function() {
            $("textarea.form-control").autoHeight();
        },200)

    });



    $('.modal').each(function (i, e) {
        $(this).appendTo('body')
    });

    //$('.selectric').selectric();

    $('[data-js-sync]').on('blur', function (e) {

        const name = $(this).attr('data-js-sync')
        const val = $(this).val();
        $(`[data-js-sync='${name}']`).val(val);
        mInputSetState()
    })

    $('.page__wrapper > *:not(.modal), .page-footer, .page-header').find('.container').each(function(i, e) {

        if ($(this).closest('.modal, .fixed-header, .swiper-container').length) {

        } else {
            if ($(this).offset().top < $(window).height()) {

            } else {
                //$(this).addClass('wow').addClass('fadeInMy');
            }

        }
    })
    $('.js-anchor[href^="#"]').on('click', function(e) {
        var scroll_el = $(this).attr("href");
        let d = 0
        if ($('.fixed-header').height()) {
            d = $('.fixed-header').outerHeight() + 30;
        }
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top-d }, 800);
        return false
    })


    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    function offsetfix() {
        $('.js-right').each(function (i,e) {
            var w = $('body').width();
            var o = $(this).offset().left;
            var iw = $(this).width();
            var d = w - o - iw;
            $(this).css('margin-right', -d);
        });
        $('.js-left').each(function (i,e) {
            var o = $(this).offset().left;
            $(this).css('margin-left', -o);
        })
    }
    offsetfix()
    $(window).resize(function () {
        $('.js-right').css('margin-right', '');
        $('.js-left').css('margin-left', '');
        offsetfix();
    })

   if (window.location.search.indexOf('backstop')) {
       $('body').addClass('backstop')
   }


    $('.input-file').each(function() {
        let $context = $(this);
        var $input = $(this).find('input'),
            $label = $(this).find('.js-labelFile'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            $context.find('.file-list').html('')
            try {
                let files = Array.from(element.target.files)
                $context.find('.file-list').html('');
                files.forEach(n => {
                    $context.find('.file-list').append(`<div class="file-item">${n.name}</div>`)
                })
            } catch (e) {
                $context.find('.file-list')
                    .append(`
                        <div class="file-item">
                            Количество файлов: ${element.target.files.length}
                        </div>
                    `)
            }

        });
    });

    // $(".js-select2").select2({
    //     width: '100%' // need to override the changed default
    // });
    $('.datepicker-here').on('focus', function (e) {
        $(this).blur();
        return false
    })


    // $('.js-tooltip').each(function (i,e) {
    //     new Tooltip($(this)[0], {
    //         placement: 'top', // or bottom, left, right, and variations
    //         title: $(this).attr('title')
    //     });
    // })

    tippy('.js-tooltip', {

    });

}


