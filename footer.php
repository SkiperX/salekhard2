 		</div>
        <div class="page__footer">
			<div class="page-footer <? if (!CSite::InDir('/index.php')){ ?>page-footer_mt<? } ?>">
                <div class="page-footer__mask">
                </div>
                <div class="container">
                    <div class="page-footer__row">
                        <div class="page-footer__left-col">
							<div class="page-footer__menu"><a class="page-footer__menu-link" href="#">О проекте</a><a class="page-footer__menu-link" href="/afisha/">Афиша</a><a class="page-footer__menu-link" href="/tury/">Туры</a>
                            </div>
                        </div>
                        <div class="page-footer__logo-col">
                            <a class="page-footer__logo" href="/">
								<img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static//img/general/logo.svg" />
                            </a>
                        </div>
                        <div class="page-footer__right-col">
							<div class="page-footer__menu"><a class="page-footer__menu-link" href="/novosti/">Новости</a><a class="page-footer__menu-link" href="/galereya/">Галерея</a><a class="page-footer__menu-link" href="/kontakty/">Контакты</a>
                            </div>
                        </div>
                    </div>
                    <div class="page-footer__copy">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="page-footer__copy-text">© 2019 — 2021 Салехард
                                </div>
                            </div>
                            <div class="col-md-6"><a class="page-footer__link" href="/politika-konfidentsialnosti/">Политика конфиденциальности</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="page-up bvi-hide">
            <div class="page-up__inner">
                <svg class="icon__up" width="21px" height="24px">
                    <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#up"></use>
                </svg>

                <div class="page-up__text">Наверх</div>
            </div>
        </a>
          <script>
$('body').on('change', '.country-change', function () {
        var href = $(this).val();
	if (href=='EN')  window.location.href = 'https://en.salekhardnewyear.ru/';
    });
</script>
		<script src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/js/vendor.js"></script>
		<script src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/js/main.js"></script>
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(56439565, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/56439565" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
    </body>
</html>