// components/SearchForm.js
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  //const [keyword, setKeyword] = useState('');
  const [cityCode, setCityCode] = useState("");
  // const [checkInDate, setCheckInDate] = useState('');
  // const [checkOutDate, setCheckOutDate] = useState('');
  // const [adults, setAdults] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ cityCode });
  };

  return (
    <>
      <div className='ml-10'>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between max-w-[400px] scale-75 sm:scale-100 max-auto mt-5 mb-10 border border-black"
        >
          <input
            type="text"
            placeholder="3 Letter IATA City Code"
            value={cityCode}
            onChange={(e) => setCityCode(e.target.value)}
            className="pl-4 outline-none"
          />
          {/* <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      /> */}
          {/* <input
        type="number"
        min="1"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
      /> */}
          <button
            type="submit"
            className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white bg-slate-900 text-white "
          >
            Search Hotels
          </button>
        </form>
      </div>
    </>
  );
}
