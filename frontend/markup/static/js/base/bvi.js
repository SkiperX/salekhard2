// подключение версии для слабовидящих

export default function () {
    var pathToStatic = "/local/templates/salekhard/frontend/build/static/"
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
        return
    }
    let bviIsInit = sessionStorage.getItem('bviIsInit')
        bviInit()
    if (bviIsInit) {
        // $('html').addClass('no-js')
        // $('[data-scrollax]').removeAttr('data-scrollax');
    }

    let click = false;
    $('.js-bvi-init').on('click', function (e) {
        sessionStorage.setItem('bviIsInit', 'true')
    })

    let lang = $('.page-header__lang select').val();

    const glossary = {
        ["EN"]: {
                ['bvi.isvek.ru']: "bvi.isvek.ru",
                ['Без засечек']: "Sans serif",
                ['Большой']: "Big",
                ['Включить Фрейм']: "Enable Frame",
                ['Выключить Фрейм']: "Turn Off Frame",
                ['Двойной']: "Double",
                ['Дополнительно']: "Optional",
                ['Закрыть']: "Close",
                ['Изображения']: "Images",
                ['Межбуквенный интервал']: "Letter spacing",
                ['Междустрочный интервал']: "Line spacing",
                ['Настройки']: "Settings",
                ['Настройки по умолчанию']: "Default settings",
                ['Одинарный']: "Single",
                ['Полуторный']: "One and a half",
                ['Размер шрифта']: "Font size",
                ['С засечками']: "Serif",
                ['Средний']: "Middle",
                ['Стандартный']: "Standard",
                ['Цвета сайта']: "Site colors",
                ['Шрифт']: "Font",
                ['Обычная версия сайта']: "Normal version of the site",

                ['bvi.isvek.ru v1.0.7']: "bvi.isvek.ru v1.0.7",
                ['Белым по черному']: "White on black",
                ['Вернуть стандартные настройки']: "Restore default settings",
                ['Включить Фрейм']: "Enable Frame",
                ['Закрыть панель']: "Close panel",
                ['Зеленым по темно-коричневому']: "Green on dark brown",
                ['Изображения включены']: "Images included",
                ['Изображения выключены']: "Images are off",
                ['Изображения черно-белые']: "Images are black and white",
                ['Коричневым по бежевому']: "Brown on beige",
                ['Межбуквенный интервал двойной']: "Double letter spacing",
                ['Межбуквенный интервал одинарный']: "Single letter spacing",
                ['Межбуквенный интервал полуторный']: "Letter spacing one and a half",
                ['Междустрочный интервал большой']: "Line spacing is large",
                ['Междустрочный интервал средний']: "Line spacing average",
                ['Междустрочный интервал стандартный']: "Line spacing standard",
                ['Настройки']: "Settings",
                ['Обычная версия сайта']: "Normal version of the site",
                ['Скрыть панель']: "Hide panel",
                ['Темно-синим по голубому']: "Navy blue",
                ['Увеличить размер шрифта']: "Increase font size",
                ['Уменьшить размер шрифта']: "Reduce font size",
                ['Черным по белому']: "Black and white",
                ['Шрифт без засечек']: "Sans serif font",
                ['Шрифт с засечками']: "Serif font",
        }

    }
    window.bviOnPanelAdd = function () {

    }
    if (lang == "EN") {
        if ($('.bvi-panel').length) {
            setLang(lang)
        }
        window.bviOnPanelAdd = function () {
            setLang(lang)
        }
    }

    function setLang(lang) {
        $('.bvi-panel *, .bvi-panel-close').each(function(i,e) {
            let text = $(this).clone().children().remove().end().text().trim()
            if (text) {
                $(this).text(glossary[lang][text])
            }

            let title = $(this).clone().children().remove().end().attr('title')
            if (title) {
                $(this).attr('title', glossary[lang][text])
            }
        })
    }


    function bviInit(e) {
        $('head').append(`
            <link rel="stylesheet" href="${pathToStatic}bvi/css/bvi.min.css" type="text/css">
            <link rel="stylesheet" href="${pathToStatic}bvi/css/bvi-font.min.css" type="text/css">
        `)
        scriptLoader([
            `${pathToStatic}bvi/js/responsivevoice.min.js`,
        ], function() {
            scriptLoader([
               `${pathToStatic}bvi/js/js.cookie.min.js`,
            ], function() {
                scriptLoader([
                    `${pathToStatic}bvi/js/bvi.js`,
                ], function() {
                    scriptLoader([
                        `${pathToStatic}bvi/js/bvi-init.js`,
                    ], function() {
                        if (click) {
                           // $('.bvi-open').trigger('click')
                        }
                    });
                });
            });
        });



    }
}

function scriptLoader(scripts, callback) {

    var count = scripts.length;

    function urlCallback(url) {
        return function () {
            count -= count
            if (count <= 0) {
                callback();
            }
        };
    }

    function loadScript(url) {
        var s = document.createElement('script');
        s.setAttribute('src', url);
        s.onload = urlCallback(url);
        document.head.appendChild(s);
    }

    for (var script of scripts) {
        loadScript(script);
    }
};
