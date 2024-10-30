// components/HotelList.js
export default function HotelList({ hotels }) {
  if (!hotels || hotels.length === 0) {
    return <p>No City found.</p>;
  }

  return (
    <>
      <div className='w-3/4 max-w-3xl m-auto pt-5 py-1 px-3 sm:px-6 border border-solid border-black'>
        {hotels.map((hotel) => (
          <div key={hotel.hotelId} className='mt-2 pt-5 pb-5 py-1 px-3 sm:px-6 border border-solid border-black'>
            {/* <h3>Hotel ID: {hotel.hotel.hotelId}</h3> */}
            <p>Name: {hotel.name}</p>
            <p>ChainCode: {hotel.chainCode}</p>
            <p>Hotel ID: {hotel.hotelId}</p>
          </div>
        ))}
      </div>
    </>
  );
}
