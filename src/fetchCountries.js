import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v3.1/name/';

export default { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${name}?fields=name,capital,languages,population,flags`
  ).then(response => {
    if (!response.ok) {
      Notify.failure('Oops, there is no country with that name');
      throw new Error(response.status);
    }
    return response.json();
  });
}
