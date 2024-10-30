// pages/api/hotelSearch.js
import Amadeus from 'amadeus';

// Initialize Amadeus SDK with environment variables
const amadeus = new Amadeus({
    clientId: '',
    clientSecret: '',
  });

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { cityCode } = req.query;

    try {
      // Fetch hotels from Amadeus API
    //   const response = await amadeus.referenceData.locations.get({
    //     keyword,
    //     subType: Amadeus.location.airport,
    //     //subType: Amadeus.location.city,
    //   });
    const response = await amadeus.referenceData.locations.hotel.get({
        cityCode,
      });
      // Send the data back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to fetch hotel data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
