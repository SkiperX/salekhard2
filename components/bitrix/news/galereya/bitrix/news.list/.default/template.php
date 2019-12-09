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
<div class="news-list">
  <? if ($arParams["DISPLAY_TOP_PAGER"]) : ?>
    <?= $arResult["NAV_STRING"] ?><br />
  <? endif; ?>
  <div id="page__b-gallery-block" class="page__b-gallery">
    <div class="b-gallery">
      <div class="container">
        <div class="b-gallery__title">Галерея
        </div>
        <div class="b-gallery__btns"><a class="b-gallery__btn b-gallery__btn_active" href="#">Фото</a><a class="b-gallery__btn" href="/galereya/video/#page__b-gallery-video-block">Видео</a>
        </div>
        <div class="b-gallery__gallery lightgallery">
          <? foreach ($arResult["ITEMS"] as $arItem) : ?>
            <?
              $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
              $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
              ?>
            <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-gallery__link" href="<?= CFile::GetPath($arItem['PROPERTIES']['IMG']['VALUE']); ?>">
              <div class="b-gallery__img" style="background-image: url(<?= CFile::GetPath($arItem['PROPERTIES']['IMG']['VALUE']); ?>)">
              </div>
            </a>
          <? endforeach; ?>
        </div>
        <? if ($arParams["DISPLAY_BOTTOM_PAGER"]) : ?>
          <br /><?= $arResult["NAV_STRING"] ?>
        <? endif; ?>
      </div>
    </div>
  </div>
</div>