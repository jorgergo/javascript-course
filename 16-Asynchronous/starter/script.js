'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// https://countries-api-836d.onrender.com/countries/name/${country}
// https://countries-api-836d.onrender.com/countries/alpha/${neighbour}

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg}. (${response.status})`); // Returns an rejected promise
    }
    return response.json(); // Returns a fulfilled promise
  });
};

const getCountryAndNeighbourData = function (country) {
  // Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryAndNeighbourData('mexico');
// });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   error => reject(error)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      renderError('Country not found');
      console.log(`${err} 💥💥💥`);
    })
    .finally((countriesContainer.style.opacity = 1));
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return response.json();
//     })
//     .then(data => {
//       if (!data.countryName) {
//         throw new Error('Country not found on those coordinates.');
//       }
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       getCountryData(data.countryName);
//     })
//     .catch(err => {
//       renderError('Country not found');
//       console.log(`${err} 💥💥💥`);
//     });
// };

// btn.addEventListener('click', whereAmI);

const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// whereAmI();

// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   const string = await whereAmI();
//   try {
//     console.log(`2: ${string}`);
//   } catch (error) {
//     console.error(`2: ${error.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

///////////////////////////////////////
// Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       renderError('Country not found');
//       console.log(`${err} 💥💥💥`);
//     })
//     .finally((countriesContainer.style.opacity = 1));
// };

// const whereAmI = function (lat, lng) {
//   return fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return response.json();
//     })
//     .then(data => {
//       if (!data.countryName) {
//         throw new Error('Country not found on those coordinates.');
//       }
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       getCountryData(data.countryName);
//     })
//     .catch(err => {
//       renderError('Country not found');
//       console.log(`${err} 💥💥💥`);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log('Test End');

// logs Test Start
// Timeout goes to Web API, waits for 0 seconds and gets passed to the task queue
// Promise goes to WEB API, the reaction (callback) goes to the microtask queue
// logs Test End
// the event loop checks the call stack, it's empty, then it checks the microtasks queue and passes the callback from the promise to the call stack
// logs resolved promise 1
// the event loop checks the call stack, it's empty, then it checks the microtasks queue, it's empty, at last, it checks the task queue, and it passes the callback from the timeout to the call stack
// logs 0 sec timer

*/

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening... 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else reject(new Error('You lost your money 💩'));
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success2'),
//   Promise.reject('F en el chat'),
//   Promise.resolve('Success3'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any([
//   // Promise.resolve('Success'),
//   Promise.resolve('Success2'),
//   Promise.reject('F en el chat'),
//   Promise.resolve('Success3'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
