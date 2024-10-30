"use client"
// pages/index.js
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import HotelList from './components/HotelList';

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/hotelSearch?${new URLSearchParams(searchParams)}`);
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error('Failed to fetch hotels:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Hotel Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <HotelList hotels={hotels} />}
    </div>
  );
}
