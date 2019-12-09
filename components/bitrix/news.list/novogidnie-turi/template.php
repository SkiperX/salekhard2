<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
<div class="page__b-tour-slider">
    <div class="b-tour-slider">
        <div class="b-tour-slider__space bvi-hide">
            <div class="b-space">
                <canvas class="b-space__canvas" id="animation-space-canvas"></canvas>
                <canvas id="animation-canvas"></canvas>
                <div class="chuvaMeteoro"></div>
            </div>
        </div>
        <div class="container">
            <div class="text-center">
                <div class="b-tour-slider__pre-title" data-aos="fade-up" data-aos-delay="50">НОВОГОДНИЕ ТУРЫ
                </div>
                <div class="b-tour-slider__title" data-aos="fade-up" data-aos-delay="150">С НАМИ НЕ СОСКУЧИШЬСЯ
                </div>
                <div class="b-tour-slider__text" data-aos="fade-up" data-aos-delay="250">
                    <p>
                        Всегда хотели прокатиться на оленях или посмотреть
                        <br>на северное сияние?
                        <br>Тогда Вы попали куда надо!
                    </p>
				</div><a class="b-tour-slider__btn" href="/tury/" data-aos="fade-up" data-aos-delay="350">Смотреть все</a>
            </div>
            <div class="b-tour-slider__slider" data-aos="fade-up" data-aos-delay="450">
                <div class="b-tour-slider__nav-cont">
                    <div class="b-tour-slider__nav">
                        <div class="swiper-button-prev">
                            <svg class="icon__swiper" width="9px" height="16px">
                                <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#swiper"></use>
                            </svg>

                        </div>
                        <div class="swiper-button-next">
                            <svg class="icon__swiper" width="9px" height="16px">
                                <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#swiper"></use>
                            </svg>

                        </div>
                    </div>
                </div>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

                        <div class="swiper-slide">

                            <a id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="b-tour-slider__slide" href="<?= $arItem['DETAIL_PAGE_URL']; ?>">
                                <div class="b-tour-slider__img bvi-hide" style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>)">
								</div>
                                <div class="b-tour-slider__content">
                                    <div class="b-tour-slider__content-row">
                                        <div class="b-tour-slider__content-col">
                                            <div class="b-tour-slider__name"><?= $arItem['NAME']; ?>
                                            </div>
                                        </div>
                                        <div class="b-tour-slider__content-col">
                                            <div class="b-tour-slider__link">Читать далее
                                                <svg class="icon__more" width="14px" height="24px">
                                                    <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#more"></use>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

<?endforeach;?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>