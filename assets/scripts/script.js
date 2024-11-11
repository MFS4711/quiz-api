
const apiURL = `https://opentdb.com/api.php?amount=10&category=9&type=boolean`;
    fetch(apiURL)                        // retrieve all data from this url
    .then(function (response) {          // this gets called when the fetch function returns its data
        return response.json();          // convert the relevant part of the page to a JS object
    }).then(function (object) {          // this gets called when the conversion is complete
        console.log(object);
    });