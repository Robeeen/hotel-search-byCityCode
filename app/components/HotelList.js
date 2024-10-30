// components/HotelList.js
export default function HotelList({ hotels }) {
  if (!hotels || hotels.length === 0) {
    return 
    (<div className='w-1/4  m-auto pt-2 py-1 px-3 sm:px-3 '>
      <p>No City found.</p>
      </div>);
  }

  return (
    <>
      <div className='w-3/4 max-w-3xl mt-5 ml-10 pt-2 py-1 px-3 sm:px-3 border border-solid border-slate-500 rounded-sm'>
        {hotels.map((hotel) => (
          <div key={hotel.hotelId} className='rounded-sm mt-2 mb-3 pt-5 pb-5 py-1 px-3 sm:px-6 border border-solid border-slate-400'>
            {/* <h3>Hotel ID: {hotel.hotel.hotelId}</h3> */}
            <p className='text-orange-600 text-base'>Name: {hotel.name}</p>
            <p className='text-gray-500 text-sm'>ChainCode: {hotel.chainCode}</p>
            <p className='text-gray-500 text-sm'>Hotel ID: {hotel.hotelId}</p>
            <p className='text-gray-500 text-sm'>Latitude: {hotel.geoCode.latitude}</p>
            <p className='text-gray-500 text-sm'>longitude: {hotel.geoCode.longitude}</p>
          </div>
        ))}
      </div>
    </>
  );
}
