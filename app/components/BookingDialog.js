import { useState } from "react";

export default function BookingDialog({}) {
    const [ showButton, setShowButton ] = useState(false);

  return (
    <>
      
      <button type="submit"
       
       className='rounded-sm border border-amber-600 bg-rose-400 mt-10 px-2 py-1'>
        BOOK NOW
      </button>
    </>
  );
}
