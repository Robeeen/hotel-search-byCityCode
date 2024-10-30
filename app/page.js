"use client";
// pages/index.js
import { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import HotelList from "./components/HotelList";

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/hotelSearch?${new URLSearchParams(searchParams)}`
      );
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center m-auto">
        <SearchForm onSearch={handleSearch} />
        {loading ? (
          <p className="w-3/4 max-w-3xl m-auto">Loading...</p>
        ) : (
          <HotelList hotels={hotels} />
        )}
      </div>
    </div>
  );
}
