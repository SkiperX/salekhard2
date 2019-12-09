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
<div class="page__b-intro-simple">
   <div class="b-intro-simple">
      <div class="container"><a class="b-intro-simple__back" href="/novosti/" onclick="window.history.back();">
            <svg class="icon__back" width="14px" height="24px">
               <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#back"></use>
            </svg>
            Назад</a>
         <div class="b-intro-simple__title">Новости
         </div>
      </div>
   </div>
</div>
<div class="page__b-news-inner">
   <div class="b-news-inner">
      <div class="container">

         <div class="row">
			 <div style="display:none;" class="col-md-6">
               <div class="js-left">
                  <div class="b-news-inner__images lightgallery">

                        <a class="b-news-inner__img-link" href="<?= $arResult['DETAIL_PICTURE']['SRC']; ?>">
                           <div class="b-news-inner__img" style="background-image: url(<?= $arResult['DETAIL_PICTURE']['SRC']; ?>)">
                           </div>
                        </a>

                  </div>
               </div>
            </div>
            <div class="col-md-12">
               <div class="b-news-inner__date">
                  <svg class="icon__calendar" width="22px" height="22px">
                     <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#calendar"></use>
                  </svg>
                  <?= $arResult['PROPERTIES']['DATE']['VALUE']; ?>
               </div>
               <div class="b-news-inner__title"><?= $arResult['NAME']; ?>
               </div>
               <div class="b-news-inner__text user-content"><?= $arResult['DETAIL_TEXT']; ?></div>
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

      </div>
   </div>
</div>