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
<?  if (CModule::IncludeModule("iblock")){
            // ID инфоблока из которого выводим элементы
            $iblock_id = $arResult["ITEMS"][0]['PROPERTIES']['INFO']['LINK_IBLOCK_ID'];
            $props_arr=[
            'NAME',
            'PROPERTY_ICON'
            ];
$types=[];
$my_slider = CIBlockElement::GetList (Array("ID" => "ASC"),Array("IBLOCK_ID" => $iblock_id),false,false,$props_arr); 
while($ar_fields = $my_slider->GetNext()) { 
$types+=[$ar_fields['ID'] => [
'ID'=>$ar_fields['ID'] ,
'название' => $ar_fields['NAME'],
'иконка'=>$ar_fields['PROPERTY_ICON_VALUE'],
]];
} 
} 
?>
<?

$words=[];
foreach($arResult["ITEMS"] as $arItem){
	if ($arItem['PROPERTIES']['SEARCH_WORD']['VALUE']){
		foreach ($arItem['PROPERTIES']['SEARCH_WORD']['VALUE'] as $word){
			array_push($words,$word);
		}

	}
}
$res_words = array_unique($words);?>
<div class="page__b-main-events">
    <div class="b-main-events">
        <div class="container">
            <div class="b-main-events__cloud bvi-hide">
            </div>
            <img class="b-main-events__deer bvi-hide" src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/deer.png" alt="" role="presentation" />
            <div class="row">
                <div class="col-md-6" data-aos="fade-right">
                    <div class="b-main-events__pre-title">АФИША
                    </div>
                    <div class="b-main-events__title">МЕРОПРИЯТИЯ
                        <br>НА НОВЫЙ ГОД
					</div><a class="b-main-events__btn" href="/afisha/">Смотреть все</a>
                    <div class="b-main-events__form">
                        <div class="b-main-events__form-item">
                            <div class="form-label">Что</div>
                            <select class="selectric" data-placeholder="Что" multiple="multiple">
                                <option disabled="disabled"></option>
								<? foreach ($res_words as $form_word): ?>
<option><?= $form_word; ?></option>
<? endforeach; ?>
                             </select>
                        </div>
                        <div class="b-main-events__form-item">
                            <div class="form-group">
                                <div class="form-label">Когда</div>
                                <div class="form-group__cont form-group__cont_ico-right">
                                    <input class="form-control form-control_blue datepicker-here" data-multiple-dates-separator=" - " data-range="true" data-show-event="click" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/calendar.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
<!--
                        <div class="b-main-events__form-item b-main-events__form-item_mb">
                            <div class="form-label">Где</div>
                            <select class="selectric" data-placeholder="Где" multiple="multiple">
                                <option disabled="disabled"></option>
                                <option>Центральная площадь</option>
                           </select>
                        </div>
-->
                        <div class="b-main-events__form-item">
                            <label class="checkbox checkbox_white">
                                <input type="checkbox" checked="" /><span>Бесплатно</span>
                            </label>
                        </div>
                        <div class="b-main-events__form-item">
                            <label class="checkbox checkbox_white">
                                <input type="checkbox" checked="" /><span>В помещении</span>
                            </label>
                        </div>
                        <button class="b-main-events__form-btn" type="submit">Подобрать
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="b-main-events__list">



<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
                        <a id="<?=$this->GetEditAreaId($arItem['ID']);?>" class="b-main-events__item" href="#" data-aos="fade-left" data-aos-delay="100">
                            <div class="b-main-events__top">
								<? $date=str_replace('.','/',$arItem['PROPERTIES']['DATE']['VALUE']); ?>
                                <div class="b-main-events__date"> <?= FormatDateFromDB($date, 'DD MMMM'); ?>
                                </div>
								<? if ($arItem['PROPERTIES']['INFO']['VALUE']): ?>
                                <div class="b-main-events__icons">
									<? foreach ($arItem['PROPERTIES']['INFO']['VALUE'] as $item_t): ?>
                                    <div class="b-main-events__ico js-tooltip" data-tippy-content="<?= $types[$item_t]['название']; ?>">
                                        <img src="<?= CFile::GetPath($types[$item_t]['иконка']); ?>" />
                                    </div>
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
<?endforeach;?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>





