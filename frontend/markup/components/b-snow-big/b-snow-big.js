export default function () {
    let context = 'b-snow-big';
    if ($(`.${context}`).length == 0) {
        return
    };
    if ($('body').width() < 768) {
        return
    };
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
        return
    }
    setInterval(function () {
        if ($('.winternetz').length > 15) {
            $('.winternetz').slice(15).remove();
        }
    }, 4000);
    (function ($) {
        //
        // Zachary Johnson
        // https://www.zachstronaut.com/posts/2009/12/21/happy-xmas-winternet.html
        // December 2009
        //

        var ww = 0;
        var wh = 0;
        var maxw = 0;
        var minw = 0;
        var maxh = 0;
        var textShadowSupport = true;
        var xv = 0;
        //var snowflakes = ["\u2744", "\u2745", "\u2746"];
        var snowflakes = ["\u2744", "\u2744", "\u2744"];
        var prevTime;
        var absMax = $('body').width() > 991 ? 9 : 4;
        var flakeCount = 0;
        var sceneCount = 0;

        $(init);

        function init()
        {
            var detectSize = function ()
            {
                ww = $(window).width();
                wh = $(`.${context}`).height();

                maxw = ww + 300;
                minw = -300;
                maxh = wh + 300;
            };

            detectSize();

            $(window).resize(detectSize);

            if (!$('body').css('textShadow'))
            {
                textShadowSupport = false;
            }

            /* Should work in Windows 7 /*
            if (/windows/i.test(navigator.userAgent))
            {
                snowflakes = ['*']; // Windows sucks and doesn't have Unicode chars installed
                //snowflakes = ['T']; //No FF support for Wingdings
            }
            */

            // FF seems to just be able to handle like 50... 25 with rotation
            // Safari seems fine with 150+... 75 with rotation
            var i = 5;
            while (i--)
            {
                addFlake(true);
            }

            prevTime = new Date().getTime();
            //setInterval(move, 50);
            window.requestAnimationFrame(move);
        }

        function addFlake(initial)
        {
            flakeCount++;
            const color = function () {
                if ($(window).scrollTop() < $('.b-main').height()-300) {
                    return 'transparent'
                }
                if ($(window).scrollTop() > $('.b-tour-slider').offset().top) {
                    return '#fff'
                }
                return '#fff'
            }
            console.log(color())
            var sizes = [
                {
                    r: 1.0,
                    css: {
                        fontSize: 50 + Math.floor(Math.random() * 20) + 'px',
                        textShadow: `9999px 0 0 ${color()}`
                    },
                    v: 2
                },
                {
                    r: 0.6,
                    css: {
                        fontSize: 50 + Math.floor(Math.random() * 20) + 'px',
                        textShadow: `9999px 0 2px ${color()}`
                    },
                    v: 6
                },
                {
                    r: 0.2,
                    css: {
                        fontSize: 90 + Math.floor(Math.random() * 30) + 'px',
                        textShadow: `9999px 0 6px ${color()}`
                    },
                    v: 12
                },
                {
                    r: 0.1,
                    css: {
                        fontSize: 90 + Math.floor(Math.random() * 50) + 'px',
                        textShadow: `9999px 0 24px ${color()}`
                    },
                    v: 20
                }
            ];

            var $nowflake = $('<span class="winternetz">' + snowflakes[Math.floor(Math.random() * snowflakes.length)] + '</span>').css(
                {
                    /*fontFamily: 'Wingdings',*/
                    color: '#eee',
                    display: 'block',
                    position: 'fixed',
                    background: 'transparent',
                    width: 'auto',
                    height: 'auto',
                    margin: '0',
                    padding: '0',
                    textAlign: 'left',
                    zIndex: 10
                }
            );

            if (textShadowSupport)
            {
                $nowflake.css('textIndent', '-9999px');
            }

            var r = Math.random();

            var i = sizes.length;

            var v = 0;

            while (i--)
            {
                if (r < sizes[i].r)
                {
                    v = sizes[i].v;
                    $nowflake.css(sizes[i].css);
                    break;
                }
            }

            var x = (-300 + Math.floor(Math.random() * (ww + 300)));

            var y = 0;
            if (typeof initial == 'undefined' || !initial)
            {
                y = -300;
            }
            else
            {
                y = (-300 + Math.floor(Math.random() * (wh + 300)));
            }

            $nowflake.css(
                {
                    left: x + 'px',
                    top: y + 'px'
                }
            );

            $nowflake.data('x', x);
            $nowflake.data('y', y);
            $nowflake.data('v', v);
            $nowflake.data('half_v', Math.round(v * 0.5));

            $('body').append($nowflake);
        }

        function move()
        {
            sceneCount++

            let bviIsInit = $('.bvi-body').length
            if (bviIsInit) {
                $('.winternetz').remove();
            }
            if (Math.random() > 0.8)
            {
                xv += -1 + Math.random() * 2;

                if (Math.abs(xv) > 3)
                {
                    xv = 3 * (xv / Math.abs(xv));
                }
            }

            // Throttle code
            var newTime = new Date().getTime();
            var diffTime = newTime - prevTime;
            prevTime = newTime;

            if (diffTime < 55 && flakeCount < absMax)
            {
                addFlake();
            }
            else if (diffTime > 150)
            {
                $('span.winternetz:first').remove();
                flakeCount--;
            }

            $('span.winternetz').each(
                function ()
                {
                    var x = $(this).data('x');
                    var y = $(this).data('y');
                    var v = $(this).data('v');
                    var half_v = $(this).data('half_v');

                    y += v;

                    x += Math.round(xv * v);
                    x += -half_v + Math.round(Math.random() * v);

                    // because flakes are rotating, the origin could be +/- the size of the flake offset
                    if (x > maxw)
                    {
                        x = -300;
                    }
                    else if (x < minw)
                    {
                        x = ww;
                    }

                    if (y > maxh)
                    {
                        $(this).remove();
                        flakeCount--;

                        addFlake();
                    }
                    else
                    {
                        $(this).data('x', x);
                        $(this).data('y', y);

                        $(this).css(
                            {
                                left: x + 'px',
                                top: y + 'px'
                            }
                        );

                        // only spin biggest three flake sizes
                        if (v >= 6)
                        {
                            $(this).animate({rotate: '+=' + half_v + 'deg'}, 0);
                        }
                    }
                }
            );
            setTimeout(function () {
                window.requestAnimationFrame(move);
            },50)

        }
    })(jQuery);

    (function ($) {
        // Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
        // property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
        // 2009-2011 Zachary Johnson www.zachstronaut.com
        // Updated 2011.05.04 (May the fourth be with you!)
        function getTransformProperty(element)
        {
            // Try transform first for forward compatibility
            // In some versions of IE9, it is critical for msTransform to be in
            // this list before MozTranform.
            var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
            var p;
            while (p = properties.shift())
            {
                if (typeof element.style[p] != 'undefined')
                {
                    return p;
                }
            }

            // Default to transform also
            return 'transform';
        }

        var _propsObj = null;

        var proxied = $.fn.css;
        $.fn.css = function (arg, val)
        {
            // Temporary solution for current 1.6.x incompatibility, while
            // preserving 1.3.x compatibility, until I can rewrite using CSS Hooks
            if (_propsObj === null)
            {
                if (typeof $.cssProps != 'undefined')
                {
                    _propsObj = $.cssProps;
                }
                else if (typeof $.props != 'undefined')
                {
                    _propsObj = $.props;
                }
                else
                {
                    _propsObj = {}
                }
            }

            // Find the correct browser specific property and setup the mapping using
            // $.props which is used internally by jQuery.attr() when setting CSS
            // properties via either the css(name, value) or css(properties) method.
            // The problem with doing this once outside of css() method is that you
            // need a DOM node to find the right CSS property, and there is some risk
            // that somebody would call the css() method before body has loaded or any
            // DOM-is-ready events have fired.
            if
            (
                typeof _propsObj['transform'] == 'undefined'
                &&
                (
                    arg == 'transform'
                    ||
                    (
                        typeof arg == 'object'
                        && typeof arg['transform'] != 'undefined'
                    )
                )
            )
            {
                _propsObj['transform'] = getTransformProperty(this.get(0));
            }

            // We force the property mapping here because jQuery.attr() does
            // property mapping with jQuery.props when setting a CSS property,
            // but curCSS() does *not* do property mapping when *getting* a
            // CSS property.  (It probably should since it manually does it
            // for 'float' now anyway... but that'd require more testing.)
            //
            // But, only do the forced mapping if the correct CSS property
            // is not 'transform' and is something else.
            if (_propsObj['transform'] != 'transform')
            {
                // Call in form of css('transform' ...)
                if (arg == 'transform')
                {
                    arg = _propsObj['transform'];

                    // User wants to GET the transform CSS, and in jQuery 1.4.3
                    // calls to css() for transforms return a matrix rather than
                    // the actual string specified by the user... avoid that
                    // behavior and return the string by calling jQuery.style()
                    // directly
                    if (typeof val == 'undefined' && jQuery.style)
                    {
                        return jQuery.style(this.get(0), arg);
                    }
                }

                // Call in form of css({'transform': ...})
                else if
                (
                    typeof arg == 'object'
                    && typeof arg['transform'] != 'undefined'
                )
                {
                    arg[_propsObj['transform']] = arg['transform'];
                    delete arg['transform'];
                }
            }

            return proxied.apply(this, arguments);
        };
    })(jQuery);

    /*!
    /**
     * Monkey patch jQuery 1.3.1+ to add support for setting or animating CSS
     * scale and rotation independently.
     * https://github.com/zachstronaut/jquery-animate-css-rotate-scale
     * Released under dual MIT/GPL license just like jQuery.
     * 2009-2012 Zachary Johnson www.zachstronaut.com
     */
    (function ($) {
        // Updated 2010.11.06
        // Updated 2012.10.13 - Firefox 16 transform style returns a matrix rather than a string of transform functions.  This broke the features of this jQuery patch in Firefox 16.  It should be possible to parse the matrix for both scale and rotate (especially when scale is the same for both the X and Y axis), however the matrix does have disadvantages such as using its own units and also 45deg being indistinguishable from 45+360deg.  To get around these issues, this patch tracks internally the scale, rotation, and rotation units for any elements that are .scale()'ed, .rotate()'ed, or animated.  The major consequences of this are that 1. the scaled/rotated element will blow away any other transform rules applied to the same element (such as skew or translate), and 2. the scaled/rotated element is unaware of any preset scale or rotation initally set by page CSS rules.  You will have to explicitly set the starting scale/rotation value.

        function initData($el) {
            var _ARS_data = $el.data('_ARS_data');
            if (!_ARS_data) {
                _ARS_data = {
                    rotateUnits: 'deg',
                    scale: 1,
                    rotate: 0
                };

                $el.data('_ARS_data', _ARS_data);
            }

            return _ARS_data;
        }

        function setTransform($el, data) {
            $el.css('transform', 'rotate(' + data.rotate + data.rotateUnits + ') scale(' + data.scale + ',' + data.scale + ')');
        }

        $.fn.rotate = function (val) {
            var $self = $(this), m, data = initData($self);

            if (typeof val == 'undefined') {
                return data.rotate + data.rotateUnits;
            }

            m = val.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/);
            if (m) {
                if (m[3]) {
                    data.rotateUnits = m[3];
                }

                data.rotate = m[1];

                setTransform($self, data);
            }

            return this;
        };

        // Note that scale is unitless.
        $.fn.scale = function (val) {
            var $self = $(this), data = initData($self);

            if (typeof val == 'undefined') {
                return data.scale;
            }

            data.scale = val;

            setTransform($self, data);

            return this;
        };

        // fx.cur() must be monkey patched because otherwise it would always
        // return 0 for current rotate and scale values
        var curProxied = $.fx.prototype.cur;
        $.fx.prototype.cur = function () {
            if (this.prop == 'rotate') {
                return parseFloat($(this.elem).rotate());

            } else if (this.prop == 'scale') {
                return parseFloat($(this.elem).scale());
            }

            return curProxied.apply(this, arguments);
        };

        $.fx.step.rotate = function (fx) {
            var data = initData($(fx.elem));
            $(fx.elem).rotate(fx.now + data.rotateUnits);
        };

        $.fx.step.scale = function (fx) {
            $(fx.elem).scale(fx.now);
        };

        /*

        Starting on line 3905 of jquery-1.3.2.js we have this code:

        // We need to compute starting value
        if ( unit != "px" ) {
            self.style[ name ] = (end || 1) + unit;
            start = ((end || 1) / e.cur(true)) * start;
            self.style[ name ] = start + unit;
        }

        This creates a problem where we cannot give units to our custom animation
        because if we do then this code will execute and because self.style[name]
        does not exist where name is our custom animation's name then e.cur(true)
        will likely return zero and create a divide by zero bug which will set
        start to NaN.

        The following monkey patch for animate() gets around this by storing the
        units used in the rotation definition and then stripping the units off.

        */

        var animateProxied = $.fn.animate;
        $.fn.animate = function (prop) {
            if (typeof prop['rotate'] != 'undefined') {
                var $self, data, m = prop['rotate'].toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
                if (m && m[5]) {
                    $self = $(this);
                    data = initData($self);
                    data.rotateUnits = m[5];
                }

                prop['rotate'] = m[1];
            }

            return animateProxied.apply(this, arguments);
        };
    })(jQuery);
}
