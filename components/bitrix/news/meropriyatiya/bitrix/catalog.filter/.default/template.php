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
global $afisha_date1;
global $afisha_date2;
$GLOBALS['arrFilter']['>=PROPERTY_DATE']=$_GET['filter_date1'];
$GLOBALS['arrFilter']['<=PROPERTY_DATE']=$_GET['filter_date2'];

//if ($_GET['arrFilter_pf']['DATE']){
//$GLOBALS['afisha_date1']=$_GET['arrFilter_pf']['DATE'];

//$GLOBALS['arrFilter']['PROPERTY'] += array(
//		">=PROPERTY_DATE" => '2019-11-29',
//	);
//	}

?>
<div class="page__b-events-section">
   <div class="b-events-section">
      <div class="container">
         <div class="b-events-section__title">Мероприятия
         </div>
         <div class="b-events-section__filter">
            <div class="b-filter">
               <form id="afisha_search" name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="<? echo $arResult["FORM_ACTION"] ?>" method="get">
                  <? foreach ($arResult["ITEMS"] as $arItem) :
                     if (array_key_exists("HIDDEN", $arItem)) :
                        echo $arItem["INPUT"];
                     endif;
                  endforeach; ?>
                  <div class="row">
                     <div class="col-md-4">
                        <div class="b-filter__item">
                           <div class="form-group">
                              <div class="form-label">Что</div>
                              <select multiple name="arrFilter_pf[SEARCH_WORD][]" size="6" class="selectric" multiple="multiple" id="sel">
                                 <option disabled="disabled"></option>
                                 <? foreach ($arResult["ITEMS"]['PROPERTY_11']['LIST'] as $key => $val) : ?>
								  <option <? foreach ($_GET['arrFilter_pf']['SEARCH_WORD'] as $kv=>$vl){ if ($vl == $key){ ?>selected<? }} ?> value="<?= $key; ?>"><?= $val; ?></option>
                                 <? endforeach; ?>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="b-filter__item">
                           <div class="form-group">
                              <div class="form-label">Когда</div>
                              <div class="form-group__cont form-group__cont_ico-right">
<input id="data_inp1" type="hidden" name="filter_date1" size="20" value="">
<input id="data_inp2" type="hidden" name="filter_date2" size="20" value="">
									<!--<input id="data_inp" type="hidden" name="arrFilter_pf[DATE]" size="20" value="">-->
								 <input id="data_input_vals" value="<? 
if ($_GET['filter_date1'] == $_GET['filter_date2'] && $_GET['filter_date1']!=''){ 
echo  date("d.m.Y", strtotime($_GET['filter_date1'])); 
}
if ($_GET['filter_date1'] && $_GET['filter_date2'] && ($_GET['filter_date1'] != $_GET['filter_date2'])){ 
echo  date("d.m.Y", strtotime($_GET['filter_date1'])); 
echo ' - ';
echo  date("d.m.Y", strtotime($_GET['filter_date2'])); 
}

?>" class="form-control datepicker-here" data-multiple-dates-separator=" - " data-range="true" data-show-event="click" />

<div class="form-group__ico"><img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/calendar-blue.svg" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-4">
                        <div class="b-filter__options">
						<input id="checkbox_info" type="hidden" name="arrFilter_pf[INFO]" size="20" value="<?= $_GET['arrFilter_pf']['INFO']; ?>" />
                           <div class="b-filter__options-item checkbox__item_b">
                              <label class="checkbox">
                                <input id="v_besp"  checked type="checkbox" size="20"/><span>Бесплатно</span>
                              </label>
                           </div>
                           <div class="b-filter__options-item checkbox__item_v">
                              <label class="checkbox">
                                 <input id="v_pom" checked="checked" type="checkbox" size="20"/><span>В помещении</span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-12">
						<a href="/afisha/" class="b-order__btn afisha-search-btn-reset">Сбросить</a>
                        <button class="b-order__btn afisha-search-btn" type="submit" name="set_filter" value="<?= GetMessage("IBLOCK_SET_FILTER") ?>">Поиск</button>
                     </div>
                  </div>
               </form>
               <div class="b-filter__tags">
               </div>
            </div>
         </div>
<script>
	$(document).ready(function(){
let info_input=$('#checkbox_info');
		if (info_input.attr('value')!=''){
			if ((info_input.attr('value').length == 2) && (info_input.attr('value') == 36)){
$('#v_besp').removeAttr('checked');
			}
			if ((info_input.attr('value').length == 2) && (info_input.attr('value') == 84)){
$('#v_pom').removeAttr('checked');
			}
		}
if (info_input.attr('value')==''){
$('#v_besp').removeAttr('checked');
$('#v_pom').removeAttr('checked');
}
});


$('.b-order__btn.afisha-search-btn').click(function(){
let besplatno=$('#v_besp' );
let pomeschenie=$('#v_pom');
let fin_input='';
		if ((besplatno.prop('checked')==true)&&(pomeschenie.prop('checked')==true)){
fin_input='84,36';
		}
if ((besplatno.prop('checked')==true)&&(pomeschenie.prop('checked')==false)){
fin_input='84';
		}
if ((besplatno.prop('checked')==false)&&(pomeschenie.prop('checked')==true)){
fin_input='36';
		}
let info_input=$('#checkbox_info');
info_input.attr('value',fin_input);

let date= $('#data_input_vals').val();
		//alert(date);
		if ((date != '') && (date.length <= 10) ){
var arr = date.split('.');
var date_s=arr[2]+'-'+arr[1]+'-'+arr[0];
			//alert(date_s);
$('#data_inp1').attr('value',date_s);
$('#data_inp2').attr('value',date_s);
		}

if ((date != '') && (date.length > 14) ){
var arr_dates = date.split(' - ');

var date_first = arr_dates[0].split('.');
var date_second = arr_dates[1].split('.');

var date_first_val=date_first[2]+'-'+date_first[1]+'-'+date_first[0];
var date_second_val=date_second[2]+'-'+date_second[1]+'-'+date_second[0];

$('#data_inp1').attr('value',date_first_val);
$('#data_inp2').attr('value',date_second_val);
	//alert(date_first_val + date_second_val);
		}
});

		  </script>