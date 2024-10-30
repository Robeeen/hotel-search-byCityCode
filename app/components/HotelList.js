// components/HotelList.js
export default function HotelList({ hotels }) {
    if (!hotels || hotels.length === 0) {
      return <p>No City found.</p>;
    }
  
    return (
      <div>
        {/* {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h3>Name: {hotel.name}</h3>
            <p>SubType: {hotel.subType}</p>
            <p> Detailed Name: {hotel.detailedName}</p>
            <p>Address: {hotel.address.countryName}</p>
            <p>Region: {hotel.address.regionCode}</p>
          </div>
        ))} */}

        {
          hotels.map((hotel) =>(
            <div key={hotel.id}>
            <h3>Hotel ID: {hotel.hotel.hotelId}</h3>
            <p>Name: {hotel.hotel.name}</p>
            
          </div>
          ))
        }


      </div>
    );
  }
  