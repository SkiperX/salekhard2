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
$this->setFrameMode(true);?>
   <div class="page-header__search bvi-hide">
<form class="page-header__search-form" action="<?=$arResult["FORM_ACTION"]?>">
 <div class="page-header__search-cont">
	<?if($arParams["USE_SUGGEST"] === "Y"):?><?$APPLICATION->IncludeComponent(
				"bitrix:search.suggest.input",
				"",
				array(
					"NAME" => "q",
					"VALUE" => "",
					"INPUT_SIZE" => 15,
					"DROPDOWN_SIZE" => 10,
				),
				$component, array("HIDE_ICONS" => "Y")
	);?><?else:?>
<input class="page-header__search-control" type="text" name="q" value=""/>
<?endif;?>
 <button name="s" type="submit" class="page-header__search-btn">
                                            <svg class="icon__search" width="19px" height="19px">
                                                <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#search"></use>
                                            </svg>

                                        </button>
	</div>
</form>
</div>
