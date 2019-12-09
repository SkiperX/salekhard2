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
// сделано не самым лучшим образом(
?>
 <div class="b-tours-section__filter">
<? foreach ($arResult["ITEMS"] as $arItem) : ?>
        <? foreach ($arItem['LIST'] as $key => $value) : ?>
	 <? if ($key != ''){ ?>
	 <a href="/tury/?set_filter=Фильтр&set_filter=Y&arrFilter_pf%5BTYPE%5D=<?= $key; ?>#b-tours-section-page-block" class="b-tours-section__filter-btn <? if (strpos($_SERVER['REQUEST_URI'],'TYPE%5D='.$key)!== false){?> b-tours-section__filter-btn_active <? } ?>"><?= $value ?></a>
	 <? } else {?>
	 <a href="/tury/#b-tours-section-page-block" class="b-tours-section__filter-btn <? if (strpos($_SERVER['REQUEST_URI'],'TYPE%5D')==false){ ?>b-tours-section__filter-btn_active<? } ?>">Все</a>
	 <? } ?>
        <? endforeach; ?>
    <? endforeach; ?>
     </div>