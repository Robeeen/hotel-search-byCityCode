// components/SearchForm.js
import { useState } from "react";

export default function SearchForm({ onSearch }) {

  const [cityCode, setCityCode] = useState("");

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
