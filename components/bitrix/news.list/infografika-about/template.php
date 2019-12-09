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
<div class="b-about__icons">
    <div class="container">
        <div class="b-ico-list">
            <div class="b-ico-list__items">
                <div class="row">
                    <? foreach ($arResult["ITEMS"] as $arItem) : ?>
                        <?
                            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                            ?>
                        <div id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-ico-list__item-col col-md-3">
                            <div class="b-ico-list__ico">
								<div><?= htmlspecialcharsBack($arItem['PROPERTIES']['VALUE']['VALUE']['TEXT']); ?></div>
                            </div>
                            <div class="b-ico-list__text"><?= $arItem['NAME']; ?>
                            </div>
                            <div class="b-ico-list__name"> <?= $arItem['PROPERTIES']['INFO']['VALUE']; ?></div>
                        </div>
                    <? endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>