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
<? if (CModule::IncludeModule("iblock")) {
    // ID инфоблока из которого выводим элементы
    $iblock_id = $arResult["ITEMS"][0]['PROPERTIES']['INFO']['LINK_IBLOCK_ID'];
    $props_arr = [
        'NAME',
        'PROPERTY_ICON'
    ];
    $types = [];
    $my_slider = CIBlockElement::GetList(array("ID" => "ASC"), array("IBLOCK_ID" => $iblock_id), false, false, $props_arr);
    while ($ar_fields = $my_slider->GetNext()) {
        $types += [$ar_fields['ID'] => [
            'ID' => $ar_fields['ID'],
            'название' => $ar_fields['NAME'],
            'иконка' => $ar_fields['PROPERTY_ICON_VALUE'],
        ]];
    }
}
?>

<div class="col-md-6">
    <div class="b-main-events__list">



        <? foreach ($arResult["ITEMS"] as $arItem) : ?>
            <?
                $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                ?>
            <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" href="<?= $arItem['DETAIL_PAGE_URL']; ?>" class="b-main-events__item" href="<?= $arItem['DETAIL_PAGE_URL']; ?>" data-aos="fade-left" data-aos-delay="100">
                <div class="b-main-events__top">
                    <? $date = str_replace('.', '/', $arItem['PROPERTIES']['DATE']['VALUE']); ?>
                    <div class="b-main-events__date"> <?= FormatDateFromDB($date, 'DD MMMM'); ?>
                    </div>
                    <? if ($arItem['PROPERTIES']['INFO']['VALUE']) : ?>
                        <div class="b-main-events__icons">
                            <? foreach ($arItem['PROPERTIES']['INFO']['VALUE'] as $item_t) : ?>
							<? if ($item_t != 84): ?>
                                <div class="b-main-events__ico js-tooltip" data-tippy-content="<?= $types[$item_t]['название']; ?>">
                                    <img src="<?= CFile::GetPath($types[$item_t]['иконка']); ?>" />
                                </div>
<? endif; ?>
                            <? endforeach; ?>
                        </div>
                    <? endif; ?>
                </div>
                <div class="b-main-events__name"><?= $arItem['NAME']; ?></div>
                <div class="b-main-events__loc">
                    <svg class="icon__loc" width="19px" height="19px">
                        <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#loc"></use>
                    </svg>
                    <?= $arItem['PROPERTIES']['PLACE']['VALUE']; ?>
                </div>
            </a>
        <? endforeach; ?>

    </div>
