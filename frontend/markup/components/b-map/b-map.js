export default function (dataJson) {
    let context = 'b-map';
    if ($(`.${context}`).length == 0) {
        return
    }
    var dataJson = dataJson|| null;
    var MapPathToStatic = window.MapPathToStatic || ''
    let maplang = window.MapLanguage || 'ru'
    const glossary = {
        ['ru']: {
          'more': "Читать далее",
          'go': "Проложить маршрут"
        },
        ['eng']: {
            'more': "Read more",
            'go': "Get directions"
        }

    }

    let ExtendedMarkers
    if (dataJson) {
        ExtendedMarkers = JSON.parse(dataJson);
    }
    setTimeout(function () {
        initMap2()
    },3000)

    function initMap2() {


        var centerDesctop = {
            lat: 66.550073,
            lng: 66.602811
        };
        let centerMobile = {
            lat: 66.550073,
            lng: 66.602811
        }
        let centerinit = $(window).width() < 991 && $('.b-main-contacts').length ? centerMobile :  centerDesctop;




        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: centerinit,
            disableDefaultUI:true,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#e7ecf0"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#636c81"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#636c81"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f1f4f6"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#496271"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -70
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c6d3dc"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#898e9b"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": -60
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d3eaf8"
                        }
                    ]
                }
            ]
        });


        var image = '/static/img/general/pin.svg';
        // var marker = new google.maps.Marker({
        //     position: {
        //         lat: 66.550073,
        //         lng: 66.602811
        //     },
        //     icon: image,
        //     map: map,
        //
        // });
        //  marker.setMap(map);
        // var marker2 = new google.maps.Marker({
        //     position: {
        //         lat: 57.135706,
        //         lng: 65.610532
        //     },
        //     icon: image,
        //     map: map,
        //
        // });
        // marker2.setMap(map);


        /**/


        if (ExtendedMarkers && ExtendedMarkers.markers && ExtendedMarkers.markers.length) {
            var markers = [];
            var centeredMarker = true;
            $.each(ExtendedMarkers.markers, function (index, ExtendedMarker) {

                // Set lat and lng
                var myLatLng = new google.maps.LatLng(
                    ExtendedMarker.lat,
                    ExtendedMarker.lng
                );

                // Rich Marker options
                var options = {
                    map: map,
                    flat: true,
                    defaultZI: (Math.round(myLatLng.lat() * -100000) << 5) * 10,
                    position: myLatLng,
                    content: `<div class="b-map__marker" data-id="${ExtendedMarker.id}" data-filter="${ExtendedMarker.filter}">
                                <div class="b-map__marker-pin">
                                    <div class="b-map__marker-ico" style="background-image: url('${ExtendedMarker.bg}')"></div>
                                    <div class="b-map__marker-title">
                                    ${ExtendedMarker.title}
                                    </div>
                                </div>
                              </div>`
                };

                // Add marker on map
                var marker = new RichMarker(options);


                // Cluster Markers
                markers.push(marker);

            });

            // Cluster instance
            var clusterStyles = [
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                },
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                },
                {
                    textColor: '#FFF',
                    textSize: 14,
                    url: 'https://www.alexandrebuffet.fr/codepen/svg/cluster.svg',
                    height: 45,
                    width: 45,
                }
            ];

            var clusterOptions = {
                gridSize: 50,
                styles: clusterStyles,
                maxZoom: 13,
                averageCenter: true,
            };

            var markerCluster = new MarkerClusterer(map, markers, clusterOptions);

            // Center map on markers
            setTimeout(function () {
                // Get bounds
                var bounds = new google.maps.LatLngBounds();

                $.each(markers, function (index, marker) {
                    if (marker.iwOpened) {
                        var test = setInterval(function () {
                            var clusters = markerCluster.getClusters(); // use the get clusters method which returns an array of objects
                            if (clusters.length) {
                                clearInterval(test);
                                for (var i = 0, l = clusters.length; i < l; i++) {
                                    for (var j = 0, le = clusters[i].markers_.length; j < le; j++) {
                                        var marker_found = clusters[i].markers_[j]; // <-- Here's your clustered marker
                                        if (marker.getPosition() === marker_found.getPosition()) {
                                            centeredMarker = marker;
                                        }
                                    }
                                }
                                if (!centeredMarker) {
                                    var bounds2 = new google.maps.LatLngBounds();
                                    bounds2.extend(centeredMarker.getPosition());
                                    map.fitBounds(bounds2);
                                } else {
                                    map.fitBounds(bounds);
                                }
                            }
                        }, 500);
                    }
                    if (marker.getVisible()) {
                        bounds.extend(marker.getPosition());
                    }
                });

                if (!centeredMarker) {
                    //map.setCenter(centeredMarker.getPosition());
                } else {
                    //map.fitBounds(bounds);
                }
            }, 1000);
        }




        map.addListener('click', function(event) {
            var latitude = event.latLng.lat();
            var longitude = event.latLng.lng();
            console.log( latitude + ', ' + longitude );
        });

        $('body').on('click', '.b-map__marker', function (e) {
            let id = $(this).attr('data-id');
            let data = ExtendedMarkers.markers.find(n => n.id == id)
            let $context = $('.b-map__event')

            $('.b-map__marker').removeClass('b-map__marker_active');
            $(this).addClass('b-map__marker_active');
            showMapEvent($context, data)

        })

        $('body').on('click', '.b-event__close', function (e) {
            e.stopPropagation();
            let $context = $('.b-map__event')
            hideMapEvent($context)
            $('.b-map__marker').removeClass('b-map__marker_active');
            return false
        })
        $('.b-main-map__filter-btn').on('click', function (e) {
            $('.b-event__close').trigger('click')
            let filterVal = $(this).attr('data-filter');

            if (filterVal == '*') {
                $('.b-map__marker[data-filter]').css('opacity', '1').css('pointer-events', 'all')
                return
            }
            $('.b-map__marker[data-filter]').css('opacity', '0').css('pointer-events', 'none')
            $('.b-map__marker[data-filter]').each(function (i,e) {
                let filter = $(this).attr('data-filter').split(',').map(n => n.trim())
                console.log(filter.includes('' + filterVal))
                if (filter.includes('' + filterVal)) {
                    $(this).css('opacity', '1').css('pointer-events', 'all')
                }
            })
        })
    }
    function hideMapEvent($context, data) {
        $context.html('');
    }
    function showMapEvent($context, data) {
        $context.html('');
        $context.html(`
        <div class="b-event"  style="background-image: url(${data.bg})">
            <a href="${data.url}" class="b-event__link">
               <div class="b-event__content">
                  <div class="b-event__type">${data.type}
                  </div>
                  <div class="b-event__close">
                     <svg class="icon__close" width="25px" height="25px">
                        <use xlink:href="${MapPathToStatic}svg-symbols.svg#close"></use>
                     </svg>
                  </div>
                  <div class="b-event__date">${data.date}
                  </div>
                  <div class="b-event__title">${data.title}
                  </div>
                  <div class="b-event__info">
                     <div class="row">
                        <div class="col-6">
                           <div class="b-event__loc">
                              <svg class="icon__pin2" width="17px" height="22px">
                                 <use xlink:href="${MapPathToStatic}svg-symbols.svg#pin2"></use>
                              </svg>
                              ${data.loc}
                           </div>
                        </div>
                        <div class="col-6">
                           <div class="b-event__time">
                              <svg class="icon__time" width="18px" height="18px">
                                 <use xlink:href="${MapPathToStatic}svg-symbols.svg#time"></use>
                              </svg>
                              ${data.time}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="b-event__more">
                     ${glossary[maplang].more}
                     <svg class="icon__more" width="14px" height="24px">
                        <use xlink:href="${MapPathToStatic}svg-symbols.svg#more"></use>
                     </svg>
                  </div>
               </div>
            </a>
            <a href="https://yandex.ru/maps/?rtext=~${data.lat},${data.lng}&rtt=mt" class="b-event__go" target="_blank">
                ${glossary[maplang].go}
                 <svg class="icon__more" width="14px" height="24px">
                    <use xlink:href="${MapPathToStatic}svg-symbols.svg#more"></use>
                 </svg>
            </a>
        </div>
        `)
    }

}

