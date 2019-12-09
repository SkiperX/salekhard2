'use strict';



import base from 'components/page/page'
import header from 'components/page-header/page-header'
import form from 'static/js/base/send-form';
import svg4everybody from 'svg4everybody/dist/svg4everybody';

import mainMap from 'components/b-main-map/b-main-map';
import mainEventMap from 'components/b-event-map/b-event-map';
import bTourSlider from 'components/b-tour-slider/b-tour-slider';
import bSpace from 'components/b-space/b-space'
import bSnow from 'components/b-snow/b-snow'
import bSnowBig from 'components/b-snow-big/b-snow-big'
import bvi from 'static/js/base/bvi';
import bGallery from 'components/b-gallery/b-gallery'
import bVideo from 'components/b-video/b-video'
import bPhotoSlider from 'components/b-photo-slider/b-photo-slider'
import bPhotoSlider2 from 'components/b-photo-slider2/b-photo-slider2'
import bFilter from 'components/b-filter/b-filter'
import bPdf from 'components/b-pdf/b-pdf'
$(document).ready(function() {
    //pageSlider();
    bvi();
    base();
    header();

    svg4everybody();

    form();
    bTourSlider();
    bSpace();
    bSnow();
    bSnowBig();
    mainMap();
    mainEventMap();
    bGallery();
    bVideo();
    bPhotoSlider();
    bPhotoSlider2();
    bFilter();
    bPdf();

    $("body").css("opacity", "1").addClass("body-ready");
})

