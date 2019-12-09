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

<? if ($arParams["DISPLAY_TOP_PAGER"]) : ?>
  <?= $arResult["NAV_STRING"] ?><br />
<? endif; ?>
<div class="page__b-logos-section">
  <div class="b-logos-section">
    <div class="container">
      <div class="b-logos-section__list">
        <div class="row">
          <? foreach ($arResult["ITEMS"] as $arItem) : ?>
            <?
              $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
              $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
              ?>
            <div class="col-md-4">
              <div id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-logos-section__item"><img src="<?= $arItem['DETAIL_PICTURE']['SRC']; ?>" />
              </div>
            </div>
          <? endforeach; ?>
        </div>
      </div>
    </div>
    <div class="b-logos-section__pagination">
      <? if ($arParams["DISPLAY_BOTTOM_PAGER"]) : ?>
        <br /><?= $arResult["NAV_STRING"] ?>
      <? endif; ?>
    </div>
  </div>
</div>