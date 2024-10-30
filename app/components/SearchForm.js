// components/SearchForm.js
import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  //const [keyword, setKeyword] = useState('');
  const [cityCode, setCityCode ] = useState('');
  // const [checkInDate, setCheckInDate] = useState('');
  // const [checkOutDate, setCheckOutDate] = useState('');
  // const [adults, setAdults] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ cityCode  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City Code"
        value={cityCode}
        onChange={(e) => setCityCode(e.target.value)}
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
      <button type="submit">Search Hotels</button>
    </form>
  );
}
