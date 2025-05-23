export default function () {

    if ($('.b-space').length == 0) {
        return
    }
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if (isIE11) {
        return
    }
    $(function(){

        var canvas, gl,
            ratio,
            vertices,
            velocities,
            freqArr,
            cw,
            ch,
            colorLoc,
            thetaArr,
            velThetaArr,
            velRadArr,
            boldRateArr,
            drawType = 0,
            numLines = 40000,
            iconNumLines = 40000,
            contentWidth,
            contentHeight,
            canvasSpace,
            canvas2,
            ctx2,
            ctx,
            maxStars = 1500,
        starsCount = 0,
            stars = [],
            hue = 217;

        var target = [];
        var iconTarget = [];
        var randomTargetXArr = [],
            randomTargetYArr = [];
        var requestAnimationFrameId;
        var coefficient = .4;
        var targetCoefficient = .02;

        function initAnimationScene() {
            //    Get the canvas element
            canvas = document.getElementById("animation-canvas");
            contentWidth = canvas.parentNode.offsetWidth;
            contentHeight = canvas.parentNode.offsetHeight;
            canvas.width = contentWidth;
            canvas.height = contentHeight;
            canvasSpace = document.getElementById("animation-space-canvas");
            canvasSpace.width = contentWidth;
            canvasSpace.height = contentHeight;
            initStarsAnimation();
            startStarsAnimation();
        }

        function timer() {
            if (drawType < 2) {
                drawType += 1;

                if (drawType < 2) {
                    setTimeout(timer, 1500);
                } else {
                    setTimeout(timer, 1200);
                }
                return;
            }

            if (drawType == 2) {
                canvas.parentNode.className += ' active';
                startStarsAnimation();
                drawIconScene();
            }
        }

        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }
            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
        }

        var Star = function() {
            this.orbitRadius = random(maxOrbit(contentWidth, contentHeight));

            if (this.orbitRadius < 200 && starsCount%2 != 0) {
                this.orbitRadius = random(maxOrbit(250, 1000));
            }
            if (this.orbitRadius < 200 && starsCount%3 != 0) {
                this.orbitRadius = random(maxOrbit(250, 1000));
            }
            if (this.orbitRadius < 40 && starsCount%2 != 0) {
                this.orbitRadius = random(maxOrbit(250, 1000));
            }
            this.radius = 2;
            this.orbitX = contentWidth / 2;
            this.orbitY = contentHeight / 2;
            this.timePassed = random(0, maxStars);
            this.speed = 0.0001;
            this.alpha = random(2, 10) / 10;
            starsCount++;
            stars[starsCount] = this;
        }

        Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);
            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            }
            ctx.globalAlpha = this.alpha;
            // draw the cached gradient canvas image
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        }

        function starsAnimation() {
            ctx.clearRect(0, 0, contentWidth, contentHeight);
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = 'transparent';
            ctx.fillRect(0, 0, contentWidth, contentHeight);
            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
            };
            requestAnimationFrame(starsAnimation);
        }

        function initCanvasCachedGradient() {
            // START CANVAS CACHED GRADIENT
            canvas2 = document.createElement('canvas');
            var w2 = canvas2.width = 100;
            var h2 = canvas2.height = 100;
            ctx2 = canvas2.getContext("2d");
            // draw a big beefy gradient in the center of the dummy canvas
            var gradientCache = ctx2.createRadialGradient(
                w2 / 2,
                h2 / 2,
                0,
                w2 / 2,
                h2 / 2,
                w2 / 2
            );
            gradientCache.addColorStop(0, '#e8d304');
            gradientCache.addColorStop(1, '#e8d304');
            ctx2.fillStyle = gradientCache;
            ctx2.beginPath();
            ctx2.arc(w2 / 2, h2 / 2, w2 / 2, 0, Math.PI * 2);
            ctx2.fill();
            // END CANVAS CACHED GRADIENT
        }

        function initStarsAnimation() {
            ctx = canvasSpace.getContext('2d');
            for (var i = 0; i < maxStars; i++) {
                new Star();
            }
            initCanvasCachedGradient();
        }

        function startStarsAnimation() {
            starsAnimation();
        }

        function onResizeHandler(event) {
            contentWidth = canvas.parentNode.offsetWidth;
            contentHeight = canvas.parentNode.offsetHeight;

            canvas.width = contentWidth;
            canvas.height = contentHeight;

            canvasSpace.width = contentWidth;
            canvasSpace.height = contentHeight;
        }

        $(function(event, data) {
            initAnimationScene();
        });

    });

//meteoros
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
    var numeroAleatorio = 5000;

    setTimeout(function(){
        carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro(){
        setTimeout(carregarMeteoro, numeroAleatorio);
        numeroAleatorio = getRandomArbitrary(5000, 10000);
        var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
        document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
        setTimeout(function(){
            document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
        }, 1000);
    }
    //end meteoros



    //$('.b-space__canvas').hide();
    let scrollPosition = 0;
    let windowHeight = ($(window).height()/4*3);
    let mapOffeset = $('.b-main-map').offset().top;
    let sliderOffset = $('.b-tour-slider').offset().top

    $(window).scroll(function () {
        scrollPosition = $(window).scrollTop()
    })
    function showSpace() {
        if (scrollPosition  > mapOffeset) {
            $('.b-space').css('opacity', '0')
        }
        if (scrollPosition + windowHeight < sliderOffset) {
            $('.b-space').css('opacity', '0')
        }

        else {
            $('.b-space').css('opacity', '1')
        }
        window.requestAnimationFrame(showSpace);
    }
    window.requestAnimationFrame(showSpace);


}
