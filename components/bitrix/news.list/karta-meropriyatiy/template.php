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
<div class="page__b-main-map">
	<?
$search=[];
$k=1;
foreach ($arResult['ITEMS'] as $arItem){
$search+=[$k=>$arItem['PROPERTIES']['SEARCH_MAP']['VALUE']];
$k++;
}
$words= array_unique($search);
//print_r($words);

$events=[];
$i=0;
$fil=0;
foreach ($arResult['ITEMS'] as $arItem){

	foreach ($words as $key=>$val){
		if ($arItem['PROPERTIES']['SEARCH_MAP']['VALUE'] == $val){
$fil=$key;
		}
	}

$date=str_replace('.','/',$arItem['PROPERTIES']['DATE']['VALUE']);

$events+=[$i=>[
 	  'id' => $i,
      'lat' => $arItem['PROPERTIES']['LAT']['VALUE'],
      'lng' => $arItem['PROPERTIES']['LNG']['VALUE'],
      'title' => $arItem['NAME'],
      'type' => $arItem['PROPERTIES']['TYPE']['VALUE'],
      'date' => FormatDateFromDB($date, 'DD MMMM'),
      'loc' => $arItem['PROPERTIES']['PLACE']['VALUE'],
      'time'=>$arItem['PROPERTIES']['TIME']['VALUE'],
      'bg' => $arItem['PREVIEW_PICTURE']['SRC'],
	  'url' => '/afisha/'.$arItem['DETAIL_PAGE_URL'],
      'filter' => $fil,
]];
$i++;
	//echo $fil;
} ?>


<div class="page__b-main-map">
                    <div class="b-main-map">
                        <div class="b-main-map__container container">
                            <div class="text-center">
                                <div class="b-main-map__pre-title">КАРТА МЕРОПРИЯТИЙ
                                </div>
                                <div class="b-main-map__title">ВСЕ СОБЫТИЯ В ОДНОМ МЕСТЕ
                                </div>
                            </div>
                            <div class="b-main-map__filter bvi-hide">
                                <div class="b-main-map__filter-btn" data-filter="*">Все
                                </div>
								<? foreach ($words as $key=>$val): ?>
                                <div class="b-main-map__filter-btn" data-filter="<?= $key; ?>"><?= $val ?>
                                </div>
<? endforeach; ?>
                            </div>
                        </div>
                        <div class="container">
<? $asd=["markers"=>$events];
$markets=json_encode($asd);?>
                            <script>
								var MapPathToStatic = '/local/templates/salekhard/frontend/build/'
								var MapLanguage='ru';
                                  var bMainMapMarkersJson = '<?= $markets; ?>'
                            </script>
                            <div class="b-main-map__map bvi-hide">
                                <div class="b-map">
                                    <div class="b-map__map" id="map">
                                    </div>
                                    <div class="b-map__event">
                                    </div>
                                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlxtMO06u8V-z6oKyV9kjZevSs-vQ9Ato&amp;callback"></script>
                                    <script src="https://cdn.jsdelivr.net/npm/rich-marker@0.0.1/index.min.js"></script>
                                    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer_compiled.js"></script>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="text-center"><a class="b-main-map__btn" href="#">Скачать карту мероприятий</a>
                            </div>
                        </div>
                    </div>
                </div>

