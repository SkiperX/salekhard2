<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<div class="page__b-intro">
<div class="b-intro" style="background-image: url(<?= $arResult['DETAIL_PICTURE']['SRC']; ?>)">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="b-intro__title"><?= $arResult['NAME']; ?>
                    </div><a class="b-intro__btn" href="#order_area">Заказать</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="page__b-event-info">
    <div class="b-event-info b-event-info_tour">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="b-event-info__col-right">
                        <div class="b-event-info__title">Информация
                            <br>о мероприятии
                        </div>
                        <div class="b-event-info__text"><?= $arResult['DETAIL_TEXT']; ?> </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="b-event-info__white">
                        <div class="b-event-info__list">
                            <div class="b-event-info__item">
                                <div class="b-event-info__ico">
                                    <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i3.svg" />
                                </div>
                                <div class="b-event-info__val"><b><?= $arResult['PROPERTIES']['PRICE']['VALUE'] ?></b> ₽/человек
                                </div>
                            </div>
                            <div class="b-event-info__item">
                                <div class="b-event-info__ico">
                                    <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i4.svg" />
                                </div>
                                <div class="b-event-info__val"><?= $arResult['PROPERTIES']['PLACE']['VALUE'] ?>
                                </div>
                            </div>
                            <div class="b-event-info__item">
                                <div class="b-event-info__ico">
                                    <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i5.svg" />
                                </div>
                                <? $date_f = str_replace('.', '/', $arResult['PROPERTIES']['DATE_F']['VALUE']);
                                $date_s = str_replace('.', '/', $arResult['PROPERTIES']['DATE_S']['VALUE']);
                                ?>
                                <div class="b-event-info__val"><?= FormatDateFromDB($date_f, 'DD MMMM'); ?> - <?= FormatDateFromDB($date_s, 'DD MMMM'); ?>
                                </div>
                            </div>
                            <div class="b-event-info__item">
                                <div class="b-event-info__ico">
                                    <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i6.svg" />
                                </div>
                                <div class="b-event-info__val"><?= $arResult['PROPERTIES']['TIME']['VALUE'] ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-event-info__slider">
                <div class="b-photo-slider2">
                    <div class="swiper-container">
                        <div class="swiper-wrapper lightgallery">
                            <? foreach ($arResult['PROPERTIES']['IMAGES']['VALUE'] as $img) : ?>
                                <div class="swiper-slide">
                                    <div class="b-photo-slider2__slide">
                                        <a class="b-photo-slider2__link" href="<?= CFile::GetPath($img); ?>">
                                            <div class="b-photo-slider2__img" style="background-image: url(<?= CFile::GetPath($img); ?>)">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            <? endforeach; ?>
                        </div>
                    </div>
                    <div class="swiper-button-next swiper-button-white">
                        <svg class="icon__swiper" width="9px" height="16px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#swiper"></use>
                        </svg>

                    </div>
                    <div class="swiper-button-prev swiper-button-white">
                        <svg class="icon__swiper" width="9px" height="16px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#swiper"></use>
                        </svg>

                    </div>
                </div>
            </div>
            <div id="order_area" class="b-event-info__title b-event-info__title_bottom">Оформление заказа
            </div>
            <div class="b-event-info__form">
                <div class="b-order">
					<div id="form_finish" class="b-event-info__title"></div>
                    <form id="tury_form" action="/local/php_interface/forms/init.php" method="POST">
 					<input type="hidden" name="item" value="<?= $arResult['NAME']; ?>" />
					<input type="hidden" name="page" value="<?= $arResult['DETAIL_PAGE_URL']; ?>" />
                        <div class="b-order__item">
                            <div class="form-group">
                                <div class="form-label">ФИО</div>
                                <div class="form-group__cont form-group__cont_ico form-group__cont_ico-left">
                                    <input required name="name" class="form-control" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i7.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-order__item">
                            <div class="form-group">
                                <div class="form-label">Телефон</div>
                                <div class="form-group__cont form-group__cont_ico form-group__cont_ico-left">
                                    <input id="form_phone_field_input" required name="phone" class="form-control" type="tel" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minlength="18" maxlength="18" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i8.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-order__item">
                            <div class="form-group">
                                <div class="form-label">E-mail</div>
                                <div class="form-group__cont form-group__cont_ico form-group__cont_ico-left">
                                    <input id="email_frieldssad" required name="email" class="form-control" type="email" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i10.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-order__item">
                            <div class="form-group">
                                <div class="form-label">Количество участников</div>
                                <div class="form-group__cont form-group__cont_ico form-group__cont_ico-left">
                                    <input required name="members" class="form-control" type="number" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i7.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-order__item">
                            <div class="form-group">
                                <div class="form-label">Количество детей до 18 лет</div>
                                <div class="form-group__cont form-group__cont_ico form-group__cont_ico-left">
                                    <input name="kids" class="form-control" type="number" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/content/i7.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="b-order__btn" type="submit">Отправить
                        </button>
                        <div class="b-order__politica">
                            <label class="checkbox checkbox_light-text">
                                <input required type="checkbox" checked="" /><span>Отправляя информацию, вы соглашаетесь с <a href='/politika-konfidentsialnosti/' target="_blank">обработкой персональных данных</a></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
$(function() {
      $('#tury_form').submit(function(e) {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          console.log('success');
		  $('#tury_form').remove();
$('#form_finish').text('Ваша заявка принята!');
        }).fail(function() {
          console.log('fail');
$('#tury_form').remove();
$('#form_finish').text('Произошла ошибка(');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });


</script>