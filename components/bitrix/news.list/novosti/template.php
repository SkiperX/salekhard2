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
<div class="page__b-main-news">
    <div class="b-main-news">
        <div class="container">
            <div class="text-center">
                <div class="b-main-news__pre-title" data-aos="fade-up" data-aos-delay="50">НОВОСТИ
                </div>
                <div class="b-main-news__title" data-aos="fade-up" data-aos-delay="150">БУДЬ В КУРСЕ
                </div>
                <div class="b-main-news__text" data-aos="fade-up" data-aos-delay="250">
                    <p>
                        Всегда хотели прокатиться на оленях или посмотреть
                        <br>на северное сияние?
                        <br>Тогда Вы попали куда надо!
                    </p>
				</div><a class="b-main-news__btn" href="/novosti/" data-aos="fade-up" data-aos-delay="350">Смотреть все</a>
            </div>
            <div class="b-main-news__list" data-scrollax-parent="true" data-aos="fade-up" data-aos-delay="450">
                <div class="row">
				<? $j=0; ?>
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
                    <div class="col-lg-4">
						<a id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="b-main-news__item" href="<?= $arItem['DETAIL_PAGE_URL']; ?>" data-scrollax="properties: {translateY: '<? if($j==1){ ?>-30%<? } else { ?> 30% <? } ?>'}">
                            <div class="b-main-news__img-cont bvi-hide">
                                <div class="b-main-news__img" style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>)">
                                </div>
                            </div>
                            <div class="b-main-news__ornament">
                                <div class="b-main-news__ornament-bg bvi-hide">
                                </div>
								<? $date=str_replace('.','/',$arItem['PROPERTIES']['DATE']['VALUE']); ?>
                                <div class="b-main-news__date"> <?= FormatDateFromDB($date, 'DD MMMM'); ?>
                                </div>
                            </div>
                            <div class="b-main-news__content">
                                <div class="b-main-news__name"><?= $arItem['NAME']; ?>
                                </div>
                                <div class="b-main-news__desc"><?= $arItem['PREVIEW_TEXT']; ?>
                                </div>
                                <div class="b-main-news__link">Читать далее
                                    <svg class="icon__more" width="14px" height="24px">
                                        <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#more"></use>
                                    </svg>

                                </div>
                            </div>
                        </a>
                    </div>
<? $j++; ?>
<?endforeach;?>

                </div>
            </div>
        </div>
    </div>
</div>


