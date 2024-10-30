// testAmadeus.js
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
    clientId: 'fP7w4AkhOs8ijJnCGGx5n0Gjf7EROTEr',
    clientSecret: 'eifHBfytod2man4C',
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
