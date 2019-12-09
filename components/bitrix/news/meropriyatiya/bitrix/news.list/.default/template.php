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
            <div class="b-events-section__list">
                <div class="b-cards-list b-cards-list_events">
                    <div class="container">
                        <div class="b-cards-list__items">
                            <? foreach ($arResult["ITEMS"] as $arItem) : ?>
                                <?
                                    $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                                    $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                                    ?>
                                <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-cards-list__item" href="<?= $arItem['DETAIL_PAGE_URL']; ?>">
                                    <div class="row no-gutters">
                                        <div class="col-md-5">
                                            <div class="b-cards-list__col-right">
                                                <div class="b-cards-list__top">
                                                    <? $date = str_replace('.', '/', $arItem['PROPERTIES']['DATE']['VALUE']); ?>

                                                    <div class="b-cards-list__date"><?= FormatDateFromDB($date, 'DD MMMM'); ?>
                                                    </div>
                                                    <div class="b-cards-list__icons">

                                                        <? if ($arItem['PROPERTIES']['INFO']['VALUE']) : ?>
                                                            <? foreach ($arItem['PROPERTIES']['INFO']['VALUE'] as $item_t) : ?>
														<? if ($item_t != 84): ?>
                                                                <div class="b-cards-list__ico js-tooltip" data-tippy-content="<?= $types[$item_t]['название']; ?>">
                                                                    <img src="<?= CFile::GetPath($types[$item_t]['иконка']); ?>" />
                                                                </div>
														<? endif; ?>
                                                            <? endforeach; ?>
                                                        <? endif; ?>
                                                    </div>
                                                </div>
                                                <div class="b-cards-list__title"><?= $arItem['NAME']; ?>
                                                </div>
                                                <div class="b-cards-list__info">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="b-cards-list__loc">
                                                                <svg class="icon__pin2" width="17px" height="22px">
                                                                    <svg class="icon__pin2" width="17px" height="22px">
                                                                        <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#pin2"></use>
                                                                    </svg>

                                                                </svg><?= $arItem['PROPERTIES']['PLACE']['VALUE']; ?>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="b-cards-list__time">
                                                                <svg class="icon__time" width="18px" height="18px">
                                                                    <svg class="icon__time" width="18px" height="18px">
                                                                        <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#time"></use>
                                                                    </svg>

                                                                </svg><?= $arItem['PROPERTIES']['TIME']['VALUE']; ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="b-cards-list__desc"><?= $arItem['PREVIEW_TEXT']; ?> </div>
                                                <div class="b-cards-list__more">Читать далее
                                                    <svg class="icon__more" width="14px" height="24px">
                                                        <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#more"></use>
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="b-cards-list__img-col col-md-7">
                                            <div class="b-cards-list__col-left">
                                                <div class="b-cards-list__img-cont">
                                                    <div class="b-cards-list__img" style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC']; ?>)">
                                                    </div>
													<? if ($arItem['PROPERTIES']['AN_TEXT']['VALUE']): ?> <div class="b-cards-list__type"><?= $arItem['PROPERTIES']['AN_TEXT']['VALUE']; ?>
                                                    </div>
<? endif;  ?>
                                                </div>
                                                <div class="b-cards-list__age-cont">
                                                    <div class="b-cards-list__age"><?= $arItem['PROPERTIES']['AGE']['VALUE']; ?>+
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            <? endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
            <? if ($arParams["DISPLAY_BOTTOM_PAGER"]) : ?>
                <br /><?= $arResult["NAV_STRING"] ?>
            <? endif; ?>
        </div>
    </div>
</div>