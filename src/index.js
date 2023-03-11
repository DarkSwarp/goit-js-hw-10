import './css/styles.css';
import API from './fetchCountries.js';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

let countryName = '';
let countryMarkup = '';
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');
listEl.style.listStyleType = 'none';

inputEl.addEventListener(
  'input',
  debounce(e => {
    countryName = inputEl.value.trim();
    if (countryName) {
      changeHandle();
    }
    listEl.innerHTML = '';
  }, DEBOUNCE_DELAY)
);

function changeHandle() {
  API.fetchCountries(countryName)
    .then(countries => {
      if (countries.length > 10) {
        excess();
        return;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        forArrayCountries(countries);
        return;
      }
      forOneCountry(countries);
    })
    .catch(error => {
      console.log(error);
    });
}

function excess() {
  listEl.innerHTML = '';
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function forArrayCountries(countries) {
    countryMarkup = countries.map((country) => {
      return `<li><img src="${country.flags.svg}" style="width: 30px; height: 15px;"></<span>${country.name.common}</span></li>`;
  }).join("");
//   for (const country of countries) {
//     countryMarkup =
//       countryMarkup +
//       `<li><img src="${country.flags.svg}" style="width: 30px; height: 15px;"></<span>${country.name.common}</span></li>`;
//   }
  listEl.innerHTML = countryMarkup;
}

function forOneCountry(countries) {
  const valueOfKeys = Object.values(countries[0].languages).join(', ');
  countryMarkup = `<li><img src="${countries[0].flags.svg}" style="width: 40px; height: 20px;"></<span>${countries[0].name.common}</span><p>Capital: ${countries[0].capital}</p><p>Population: ${countries[0].population}</p><p>Languages: ${valueOfKeys}</p></li>`;
  listEl.innerHTML = countryMarkup;
}
