<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>
<div class="page__b-news-section">
  <div class="b-news-section">
    <div class="container">
      <div class="b-news-section__title">Новости
      </div>
      <div class="b-news-section__list">
        <div class="b-cards-list b-cards-list_news">
          <div class="container">
            <div class="b-cards-list__items">
              <? foreach ($arResult["ITEMS"] as $arItem) : ?>
                <?
                  $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
                  $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
                  ?>
                <a id="<?= $this->GetEditAreaId($arItem['ID']); ?>" class="b-cards-list__item" href="<?= $arItem["DETAIL_PAGE_URL"] ?>">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="b-cards-list__col-right">
                        <div class="b-cards-list__title"><?= $arItem['NAME']; ?>
                        </div>
                        <div class="b-cards-list__date-news">
                          <svg class="icon__calendar" width="22px" height="22px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#calendar"></use>
                          </svg>
                          <?= $arItem['PROPERTIES']['DATE']['VALUE']; ?>
                        </div>
                        <div class="b-cards-list__desc">
                          <?= $arItem['PREVIEW_TEXT']; ?>
                        </div>
                        <div class="b-cards-list__more">Читать далее
                          <svg class="icon__more" width="14px" height="24px">
                            <use xlink:href="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/svg-symbols.svg#more"></use>
                          </svg>

                        </div>
                      </div>
                    </div>
                    <div class="b-cards-list__img-col col-md-6">
                      <div class="b-cards-list__col-left">
                        <div class="b-cards-list__img-cont">
                          <div class="b-cards-list__img" style="background-image: url(<?= $arItem['PREVIEW_PICTURE']['SRC']; ?>)">
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
    </div>
    <? if ($arParams["DISPLAY_BOTTOM_PAGER"]) : ?>
      <br /><?= $arResult["NAV_STRING"] ?>
    <? endif; ?>
  </div>
</div>