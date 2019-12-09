import map from '../b-map/b-map';

export default function () {
    let context = 'b-main-map';
    if ($(`.${context}`).length == 0) {
        return
    }

    map(window.bMainMapMarkersJson);
}
