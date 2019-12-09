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
$GLOBALS['arrFilter']['>=PROPERTY_DATE']=$_GET['filter_date1'];
$GLOBALS['arrFilter']['<=PROPERTY_DATE']=$_GET['filter_date2'];
?>
<div class="b-event-map__filter">
   <div class="b-filter b-filter_map">
      <form id="afisha_search" name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="<? echo $arResult["FORM_ACTION"] ?>" method="get">
         <div class="row">
            <div class="col-md-4">
               <div class="b-filter__item">
                  <div class="form-group">
                     <div class="form-label">Дата</div>
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
            <div class="col-md-4">
               <div class="b-filter__item">
                  <div class="form-group">
                     <div class="form-label">Категория</div>
                     <select class="selectric" multiple="multiple" id="sel1" name="arrFilter_pf[SEARCH_WORD][]">
                          <option disabled=" disabled"></option>
                        <? foreach ($arResult["ITEMS"]['PROPERTY_11']['LIST'] as $key => $val) : ?>
                           <option <? foreach ($_GET['arrFilter_pf']['SEARCH_WORD'] as $kv=>$vl){ if ($vl == $key){ ?>selected<? }} ?> value="<?= $key; ?>"><?= $val; ?></option>
                        <? endforeach; ?>
                     </select>
                  </div>
               </div>
            </div>

 				<div class="col-md-4">
<input id="price_1" type="hidden" name="arrFilter_pf[PRICE][LEFT]" size="5" />
		  <input id="price_2" type="hidden" name="arrFilter_pf[PRICE][RIGHT]" size="5" />
               <div class="b-filter__item">
                  <div class="form-group">
                     <div class="form-label">Цена</div>
                     <select  size="4"  id="price_selecrcis" class="selectric price__selectric">
                       <option disabled="disabled"></option>
						 <option <? if ($_GET['arrFilter_pf']['PRICE']['LEFT']==0 && $_GET['arrFilter_pf']['PRICE']['RIGHT']==100){ ?> selected <? } ?> value="0 - 100">0 - 100</option>
                        <option <? if ($_GET['arrFilter_pf']['PRICE']['LEFT']==100 && $_GET['arrFilter_pf']['PRICE']['RIGHT']==100500){ ?> selected <? } ?> value="100 - 100500">100 - 100500</option>
                        <option <? if ($_GET['arrFilter_pf']['PRICE']['LEFT']==100500 && !$_GET['arrFilter_pf']['PRICE']['RIGHT']){ ?> selected <? } ?> value="100500 +">100500 +</option>
                     </select>
                  </div>
               </div>
            </div>

            <div class="col-md-4">
<input id="checkbox_info" type="hidden" name="arrFilter_pf[INFO]" size="20" value="<?= $_GET['arrFilter_pf']['INFO']; ?>" />
               <div class="b-filter__options">
                  <div class="b-filter__options-item">
                     <label class="checkbox">
                       <input id="v_pom" checked="checked" type="checkbox" size="20"/><span>В помещении</span>
                     </label>
                  </div>
               </div>
            </div>
            <div class="col-md-12">
				<a class="b-order__btn afisha-search-btn-reset" href="/karta/">Сбросить</a>
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
if (info_input.attr('value')==''){
$('#v_pom').removeAttr('checked');
}
});

   $('.b-order__btn.afisha-search-btn').click(function() {

	  let price_vals =$('#price_selecrcis').val();
	   //alert(price_vals);
 if ((price_vals != '') && (price_vals != '100500 +') && (price_vals != null)){
var arr_price = price_vals.split(' - ');
$('#price_1').attr('value',arr_price[0]);
$('#price_2').attr('value',arr_price[1]);
	   }
	   if ((price_vals == '100500 +') && (price_vals != '') && (price_vals != null)){
$('#price_1').attr('value','100500');
	   }
let pomeschenie=$('#v_pom');
let fin_input='';
		if (pomeschenie.prop('checked')==true){
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