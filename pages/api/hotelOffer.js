import Amadeus from "amadeus";

// Initialize Amadeus SDK with environment variables
const amadeus = new Amadeus({
  clientId: "",
  clientSecret: "",
});

export default async function handler(req, res) {
    if (req.method === "GET")  {
        const { hotelIds, adults, checkInDate, checkOutDate  } = req.query;
    
        try {
          const response = await amadeus.shopping.hotelOffersSearch.get({
            hotelIds,
            adults,
            checkInDate,
            checkOutDate,
          });
           // Send the data back to the client
            res.status(200).json(response.data);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: "Unable to fetch hotel data" });
          }
    }else {
        res.status(405).json({ error: "Method not allowed" });
      }
}
