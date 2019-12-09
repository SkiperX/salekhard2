<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
 <div class="container">
                    <div class="page-header__row">
                        <div class="page-header__col-left">
                            <a class="page-header__glass js-bvi-init bvi-open" href="#" title="Версия для слабовидящих">
                                <svg class="icon__glass1" width="45px" height="15px">
                                    <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#glass1"></use>
                                </svg>
                            </a>
<?$APPLICATION->IncludeComponent(
	"bitrix:search.form",
	"search",
	Array(
		"COMPONENT_TEMPLATE" => "search",
		"PAGE" => "#SITE_DIR#search/index.php",
		"USE_SUGGEST" => "N"
	)
);?>
                         
                            <div class="page-header__menu">
								<a class="page-header__menu-link" href="/">ГЛАВНАЯ</a>
								<? if ($arResult && count($arResult)>3): ?>
								<? for ($i=0;$i<3; $i++){?>
<a id="<?=$this->GetEditAreaId($arResult[$i]['ID']);?>" class="page-header__menu-link" href="<?=$arResult[$i]["LINK"]?>"><?=$arResult[$i]["TEXT"]?></a>
								<? } ?>
								<? endif; ?>
                            </div>
                        </div>
                        <div class="page-header__col-logo">
                            <a class="page-header__logo bvi-hide" href="/">
                                <img class="page-header__logo-full" src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/logo.svg" alt="" role="presentation" />
                                <img class="page-header__logo-small" src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/logo2.png" alt="" role="presentation" />
                            </a>
                        </div>
                        <div class="page-header__col-right">
<div class="page-header__menu">
<? if ($arResult && count($arResult)>3): ?>
	<? for ($i=3;$i<count($arResult); $i++){?>
<a id="<?=$this->GetEditAreaId($arResult[$i]['ID']);?>" class="page-header__menu-link" href="<?=$arResult[$i]["LINK"]?>"><?=$arResult[$i]["TEXT"]?></a>
			<? } ?>
<? endif; ?>
                            </div>
                            <div class="page-header__lang">
                                <select class="selectric country-change">
                                    <option>RU</option>
                                    <option>EN</option>
                                </select>
                            </div>
                            <div class="page-header__burger">
                                <div class="gamburger js-menu"><span class="gamburger-line1"></span><span class="gamburger-line2"></span><span class="gamburger-line3"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>