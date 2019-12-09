<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>

<div class="b-main-contacts__soc">
    <? foreach ($arResult["ITEMS"] as $arItem) : ?>
        <?
            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
            ?>
        <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-main-contacts__soc-link" style="background-color:<?= $arItem['PROPERTIES']['COLOR']['VALUE'] ?>;" href="<?= $arItem['PROPERTIES']['LINK']['VALUE']; ?>" target="_blank">
            <img src="<?= CFile::GetPath($arItem['PROPERTIES']['ICON']['VALUE']); ?>" />
        </a>

    <? endforeach; ?>
</div>