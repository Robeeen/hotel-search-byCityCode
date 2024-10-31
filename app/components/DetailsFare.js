export default function DetailsFare({details}){
    if (!details || details.length === 0) {
        return 
        (<div className='w-1/4  m-auto pt-2 py-1 px-3 sm:px-3 '>
          <p>No Hotel found.</p>
          </div>);
      }  


    return(

        <div className='w-1/5 mt-5 ml-10 pt-2 py-1 px-3'>
          {details.map((detail, index) => (
            <div key={index}>              
              <p className='text-orange-600 text-base'>Details Name:{detail.hotel.name}</p>
              <p className='text-orange-600 text-base'>Price: {detail.offers[0].price.currency}.{detail.offers[0].price.total}</p>
              <p className='text-orange-600 text-base'>Room: {detail.offers[0].room.typeEstimated.category}</p>
              <p>Description: {detail.offers[0].room.description.text} </p>              
            </div>
          ))}
        </div>

    );
}