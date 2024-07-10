import { cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';
import { CityName } from '../../types/offer';
import City from '../city/city';

function CitiesList() {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleClick = (name: CityName) => {
    dispatch(setCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleClick} />
      ))}
    </ul>
  );
}

export default CitiesList;
