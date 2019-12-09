
export default class Base {
    constructor() {

    }
    static setHeight($e) {
        function a($e) {
            var h = 0;
            $e.css('height', '');
            $($e).each(function(e) {
                if ($(this).outerHeight(true) > h) {
                    h = $(this).outerHeight(true);
                }
            });
            $($e).outerHeight(h);
        }
        a($e);
        $(window).resize(function () {
            a($e);
        });
        $e.find('img').load(function () {
            a($e);
        })
    }
    static animTitle($e) {
        if ($('body').width() < 1024) {
            return
        }
        this.splitText($e)
        TweenMax.staggerFrom($e.find('.letter'), 0.4, {
            y: "+=105%",
            ///opacity: 0,
            delay: 0.3

        }, 0.05);

    }
    static splitText($e) {
        var t = $e.text();
        t = t.split(' ');

        t = t.map(function (n) {
            n = n.split('');
            n = n.map(function (e) {
                return '<span class="letter">' + e + '</span>'
            })
            n = n.join('');
            if (!n == '') {
                return '<span class="word">' + n + '</span> '
            }

        })
        t = t.join('')
        $e.html(t);
    }
    static animContent($e, t, d) {
        if ($('body').width() < 1024) {
            return
        }
        if (t == undefined) {
            t = 0.6
        }
        if (d == undefined) {
            d = 0.85
        }
        TweenMax.staggerFrom($e, t, {
            y: "+=30",
            opacity: 0,
            delay: d,
            ease: Power0.easeOut,
            //ease: Quad.easeOut,
        }, t / $e.length);
    }
    static parallaxHover($e, parent) {
        if ($('body').width() < 1024) {
            return
        }

        // ПЕРЕМЕННЫЕ: координаты мыши
        window.MOUSE_clientX = 0;	// координата X мыши относительно окна
        window.MOUSE_clientY = 0;	// координата Y мыши относительно окна

        // СОБЫТИЕ: движение мыши над документом
        document.onmousemove = function(objEvent) {
            if (document.all) { // только для IE
                window.MOUSE_clientX = window.event.x;
                window.MOUSE_clientY = window.event.y;
            } else { // для остальных браузеров
                window.MOUSE_clientX = objEvent.clientX;
                window.MOUSE_clientY = objEvent.clientY;
            }

        }

        function parallaxBox() {
            if (window.MOUSE_clientX == undefined) {
                //
            }
            var yPer = window.MOUSE_clientY / ( $(window).height()/100);
            var xPer = window.MOUSE_clientX / ( $(window).width()/100);

            var $xPercent =  window.MOUSE_clientX / ($('body').width()/100) - 50;
            var $yPercent = window.MOUSE_clientY / ($('body').width()/100) - 50;
            var d = -10;
            var d2 = -10;
            $e.css('transform', 'translate(' + d2/100*$xPercent + '%, ' + d2/100*$yPercent + '%)');

            requestAnimationFrame(parallaxBox);
        }
        requestAnimationFrame(parallaxBox);
        /*setTimeout(function(e) {
            var $p = $e.closest(parent);
            $p.mousemove(function(e){

                var $xPercent = e.clientX / ($('body').width()/100) - 50;
                var $yPercent = e.clientY / ($('body').width()/100) - 50;
                var d = -10;
                var d2 = -10;
                $e.css('transform', 'translate(' + d2/100*$xPercent + '%, ' + d2/100*$yPercent + '%)');
            });
        }, 700)*/

    }
    static addScripts(scripts, callback) {
        var loaded = {}; // Для загруженных файлов loaded[i] = true
        var counter = 0;

        function onload(i) {
            if (loaded[i]) return; // лишний вызов onload/onreadystatechange
            loaded[i] = true;
            counter++;
            if (counter == scripts.length) callback();
        }

        for (var i = 0; i < scripts.length; i++)(function(i) {
            var script = addScript(scripts[i]);

            script.onload = function() {
                onload(i);
            };

            script.onreadystatechange = function() { // IE8-
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    setTimeout(this.onload, 0); // возможны повторные вызовы onload
                }
            };

        }(i));
        function addScript(src) {
            var script = document.createElement('script');
            script.src = src;
            var s = document.getElementsByTagName('script')[0]
            s.parentNode.insertBefore(script, s);
            return script;
        }

    }
    static addScripts(scripts, callback) {
        var loaded = {}; // Для загруженных файлов loaded[i] = true
        var counter = 0;

        function onload(i) {
            if (loaded[i]) return; // лишний вызов onload/onreadystatechange
            loaded[i] = true;
            counter++;
            if (counter == scripts.length) callback();
        }

        for (var i = 0; i < scripts.length; i++)(function(i) {
            var script = addScript(scripts[i]);

            script.onload = function() {
                onload(i);
            };

            script.onreadystatechange = function() { // IE8-
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    setTimeout(this.onload, 0); // возможны повторные вызовы onload
                }
            };

        }(i));
        function addScript(src) {
            var script = document.createElement('script');
            script.src = src;
            var s = document.getElementsByTagName('script')[0]
            s.parentNode.insertBefore(script, s);
            return script;
        }

    }
    static random(min, max) {
        return (Math.random() * (max - min)) + min;
    }
}
