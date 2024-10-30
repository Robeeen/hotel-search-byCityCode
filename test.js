// testAmadeus.js
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
    clientId: '',
    clientSecret: '',
  });

async function testAmadeusAPI() {
  try {
    const response = await amadeus.referenceData.locations.hotels.byCity.get({
        cityCode: 'PAR',
       // subType: [hotels.HOTEL_LEISURE, hotels.HOTEL_GDS]
    });
    console.log(response.data);
  } catch (error) {
    console.error('Test Error:', error.response?.result || error.message);
  }
}

testAmadeusAPI();
