import { useEffect, useRef } from 'react';
import { City, Location } from '../../types/offer';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Marker, Icon } from 'leaflet';

const URL_MARKER_DEFAULT = 'img/pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  locations: Location[];
  place?: 'cities' | 'property';
}

function Map({city, locations, place = 'cities'}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, locations]);

  return (
    <section className={`${place}__map map`} ref={mapRef}></section>
  );
}

export default Map;
