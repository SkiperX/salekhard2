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

<div class="b-history__slider">
    <div class="b-photo-slider">
        <div class="swiper-container">
            <div class="swiper-wrapper lightgallery">

            <?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
                <div class="swiper-slide">
					<div class="b-photo-slider__slide"><a id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="b-photo-slider__link" href="<?= CFile::GetPath($arItem['PROPERTIES']['IMG']['VALUE']); ?>">
                            <div class="b-photo-slider__img" style="background-image: url(<?= CFile::GetPath($arItem['PROPERTIES']['IMG']['VALUE']); ?>)">
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
