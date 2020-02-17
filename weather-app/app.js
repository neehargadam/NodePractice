const request = require('request');
const url = 'https://api.darksky.net/forecast/b92fef23b5281d4fa85a5e3063dd9680/37.8267,-122.4233'
request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to internet');
    }
    else if (response.body.error) {
        console.log('unable to find location');
    }
    else {
        console.log(response.body.daily.data[0].summary);
    }

    // const data = JSON.parse(response.body);
    // console.log(data.currently);

    //console.log('Its currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain');
    // console.log('Its currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain');
});


const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad%20india.json?access_token=pk.eyJ1IjoibmVlaGFyZ2FkYW0iLCJhIjoiY2s2b2x6eXJxMDVtbDNrcW9kbzBlYmdtbiJ9.huqL8cITp8XZUdMREqIHpA&limit=1'
//const geoUrlErr = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12What.json?access_token=pk.eyJ1IjoibmVlaGFyZ2FkYW0iLCJhIjoiY2s2b2x6eXJxMDVtbDNrcW9kbzBlYmdtbiJ9.huqL8cITp8XZUdMREqIHpA&limit=1'
request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to internet');
    }
    if (response.body.features.length === 0) {
        console.log('location not found');
    }
    else if (response.body.features.length > 0) {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log('Latitude of Hyderabad is ' + latitude);
        console.log('Longitude of Hyderabad is ' + longitude);
    }
});
