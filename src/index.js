import './css/styles.css';
import API from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;

let country = '';
let object;
const inputEl = document.querySelector('input');
inputEl.addEventListener('keyup', e => {
  country = e.currentTarget.value;
  API.fetchCountries(country)
    .then(data => {})
    .catch(error => {
      console.log(error);
    });
});
