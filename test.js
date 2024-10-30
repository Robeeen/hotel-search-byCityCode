// testAmadeus.js
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
    clientId: '',
    clientSecret: '',
  });

async function testAmadeusAPI() {
  try {
    const response = await amadeus.referenceData.locations.get({
        keyword: 'Paris',
        subType: Amadeus.location.city,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Test Error:', error.response?.result || error.message);
  }
}

testAmadeusAPI();
