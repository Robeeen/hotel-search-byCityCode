import { useState } from 'react';
import DetailsFare from './DetailsFare';

export default function OfferDetails({ hotelid }) {
  const [hotelIds, setHotelIds] = useState(hotelid);
  const [adults, setAdults] = useState('');
  const [details, setDetails] = useState([]);

  //calling api to fetch data
  const displayMore = async (searchParams) =>{
    try{
      const response = await fetch(
        `/api/hotelOffer?${new URLSearchParams(searchParams)}`
      );
      const data = await response.json();
      setDetails(data);
    }catch (error) {
      console.error("Failed to fetch Details:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    displayMore({ hotelIds, adults });
  };
//BRLHRBRB

  return (
    <>
      <div className="ml-10">
        <form onSubmit={handleSubmit}>
        
            <input type="text"
            placeholder="HOTEL ID"
            value= {hotelIds}
            onChange={(e) => setHotelIds(e.target.value)}
            />

            <input type="text"
            placeholder="Adult"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            />

          <button type="submit">Display More</button>
        </form>
      </div>
      <DetailsFare details={details} />
    </>
  );
}
