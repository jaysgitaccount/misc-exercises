const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    makeHTTPRequest('https://pokeapi.co/api/v2/berry/')
        .then(res => processData(res))
        .then(res => displayResults(res))
        .catch(err => console.error(err));
})

function processData(data) {
    return Promise.all(
        data.results.map(item => makeHTTPRequest(item.url))
    )
        .then(res => Promise.all(
            res.map(item => makeHTTPRequest(item.item.url))
        ))
        .then(res => res.map((item, i) => {
            return { name: data.results[i].name, img: item.sprites.default }
        }))
        .catch(err => console.error(err))
}

/**
 * Translate processed data to DOM elements
 * @param {array} array of objects { name, img }
 */
function displayResults(array) {
    const results = document.querySelector('#results');

    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('div');
        let item = array[i];

        card.appendChild(displayText(item.name));
        card.appendChild(displayImage(item.img));

        results.appendChild(card);
    }

    function displayText(text) {
        const label = document.createElement('p');
        label.textContent = [text];
        return label;
    }
    
    function displayImage(url) {
        const image = document.createElement('img');
        image.src = url;
        return image;
    }
}

/**
 * Checks cache to see if the url query already exists. If not, makes
 * a fetch request & stores result in cache
 * @param {string} url 
 * @returns Promise with response.json()
 */
const makeHTTPRequest = async (url) => {
    const cache = await caches.open('cache');
    const existingResult = await cache.match(url);

    if (existingResult === undefined) {
        console.log('Fetching...');
        return fetch(url)
            .then(response => {
                let resCopy = response.clone();
                cache.put(url, response);
                return resCopy;
            })
            .then(response => {
                return response.json();
            })
            .catch(error => console.error(error))
    } else {
        console.log('Cached data found...');
        return existingResult.json();
    }
}