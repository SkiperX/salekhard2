
import map from '../b-map/b-map';

export default function () {
    let context = 'b-event-map';
    if ($(`.${context}`).length == 0) {
        return
    }

    map(window.bEventMapMarkersJson);
}
