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
      <div class="b-tours-section__list">
        <div class="b-cards-list">
          <div class="container">
            <div class="b-cards-list__items">
              <? foreach ($arResult["ITEMS"] as $arItem) : ?>
                <?
                  $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                  $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                  ?>
                <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-cards-list__item" href="<?= $arItem['DETAIL_PAGE_URL']; ?>">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="b-cards-list__col-left">
                        <div class="b-cards-list__img-cont">
                          <div class="b-cards-list__img" style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC']; ?>)">
                          </div>
                        </div>
                        <div class="b-cards-list__age-cont">
                          <div class="b-cards-list__age"><?= $arItem['PROPERTIES']['AGE']['VALUE']; ?>+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="b-cards-list__col-right">
                        <? $date_f = str_replace('.', '/', $arItem['PROPERTIES']['DATE_F']['VALUE']);
                          $date_s = str_replace('.', '/', $arItem['PROPERTIES']['DATE_S']['VALUE']);
                          ?>

                        <div class="b-cards-list__date"><?= FormatDateFromDB($date_f, 'DD MMMM'); ?> - <?= FormatDateFromDB($date_s, 'DD MMMM'); ?>
                        </div>
                        <div class="b-cards-list__title"><?= $arItem['NAME']; ?>
                        </div>
                        <div class="b-cards-list__price">
                          <svg class="icon__price" width="27px" height="27px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH ?>/frontend/build/svg-symbols.svg#price"></use>
                          </svg>
                          <span><?= $arItem['PROPERTIES']['PRICE']['VALUE']; ?></span> ₽/человек
                        </div>
                        <div class="b-cards-list__desc"><?= $arItem['PREVIEW_TEXT']; ?></div>
                        <div class="b-cards-list__more">Читать далее
                          <svg class="icon__more" width="14px" height="24px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH ?>/frontend/build/svg-symbols.svg#more"></use>
                          </svg>

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
    </div>
    <div class="b-tours-section__pagination">
      <? if ($arParams["DISPLAY_BOTTOM_PAGER"]) : ?>
        <br /><?= $arResult["NAV_STRING"] ?>
      <? endif; ?>
