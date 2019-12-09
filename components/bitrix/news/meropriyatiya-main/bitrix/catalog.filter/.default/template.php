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
<div class="col-md-6" data-aos="fade-right">
                    <div class="b-main-events__pre-title">АФИША
                    </div>
                    <div class="b-main-events__title">МЕРОПРИЯТИЯ
                        <br>НА НОВЫЙ ГОД
                    </div><a class="b-main-events__btn" href="/afisha/">Смотреть все</a>
                    <div class="b-main-events__form">
						<form id="afisha_search" name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="/afisha<? echo $arResult["FORM_ACTION"] ?>" method="get">
                        <div class="b-main-events__form-item">
                            <div class="form-label">Что</div>
                            <select name="arrFilter_pf[SEARCH_WORD][]" class="selectric" data-placeholder="Что" multiple="multiple">
                                <option disabled="disabled"></option>
                               <? foreach ($arResult["ITEMS"]['PROPERTY_11']['LIST'] as $key => $val) : ?>
                                    <option value="<?= $key; ?>"><?= $val; ?></option>
                                 <? endforeach; ?>
                            </select>
                        </div>
                        <div class="b-main-events__form-item">
                            <div class="form-group">
                                <div class="form-label">Когда</div>
<input id="data_inp1" type="hidden" name="filter_date1" size="20" value="">
<input id="data_inp2" type="hidden" name="filter_date2" size="20" value="">
                                <div class="form-group__cont form-group__cont_ico-right">
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
?>" class="form-control form-control_blue datepicker-here" data-multiple-dates-separator=" - " data-range="true" data-show-event="click" />
                                    <div class="form-group__ico">
                                        <img src="<?= SITE_TEMPLATE_PATH; ?>/frontend/build/static/img/general/calendar.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
         
                        <div class="b-main-events__form-item">
<input id="checkbox_info" type="hidden" name="arrFilter_pf[INFO]" size="20" value="<?= $_GET['arrFilter_pf']['INFO']; ?>" />
                            <label class="checkbox checkbox_white">
                                 <input id="v_besp"  checked type="checkbox" size="20"/><span>Бесплатно</span>
                            </label>
                        </div>
                        <div class="b-main-events__form-item">
                            <label class="checkbox checkbox_white">
                               <input id="v_pom" checked="checked" type="checkbox" size="20"/><span>В помещении</span>
                            </label>
                        </div>
                        <button class="b-main-events__form-btn main-events_btn" type="submit" name="set_filter" value="<?= GetMessage("IBLOCK_SET_FILTER") ?>">Подобрать
                        </button>
</form>
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

	$('.b-main-events__form-btn.main-events_btn').click(function(){

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