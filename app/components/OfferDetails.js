import { useState } from 'react';
import DetailsFare from './DetailsFare';



export default function OfferDetails({ hotelid }) {
  const [hotelIds, setHotelIds] = useState(hotelid);
  const [adults, setAdults] = useState('');
  const [details, setDetails] = useState([]);
  const [checkInDate, setCheckInDate] = useState([]);
  const [checkOutDate, setCheckOutDate] = useState([]);

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
    displayMore({ hotelIds, adults, checkInDate, checkOutDate });
  };
//BRLHRBRB

  return (
    <>
      <div className="ml-10">
        <form onSubmit={handleSubmit}>
        
            <input type="hidden"
            placeholder="HOTEL ID"
            value= {hotelIds}
            onChange={(e) => setHotelIds(e.target.value)}
            className="text-gray-500"
            />

            <input type="text"
            placeholder="Person"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="text-gray-500 active:border-gray-300 outline-yes border border-gray-400 rounded-sm pl-2 py-1 bg-gray-200 w-20"
            />
            
            <input type="date"          
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="text-gray-500 active:border-gray-300 outline-yes border border-gray-400 rounded-sm pl-2 py-1 ml-3 bg-gray-200 w-25 pr-2"

            />

          <input type="date"          
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="text-gray-500 active:border-gray-300 outline-yes border border-gray-400 rounded-sm pl-2 py-1 ml-3 bg-gray-200 w-25 pr-2"

            />


          <button type="submit" className='rounded-sm border border-amber-600 bg-rose-400 ml-5 px-2 py-1'>Display More</button>
        </form>
      </div>
      <DetailsFare details={details} />
    
    </>
  );
}