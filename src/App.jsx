import React, { useMemo } from "react";
import "./App.css";
import Data from "../resources/countryData.json";
import { useState } from "react";
export default function App() {
  const [filterData, setFilterData] = useState("");
  const [showSugg, setShowSugg] = useState(true);
  const handleSearch = (event) => {
    setFilterData(event.target.value);
  };
  const filteredData = useMemo(() => {
    return Data.filter((data) =>
      data.name.toLowerCase().includes(filterData.toLowerCase())
    );
  }, [filterData, showSugg]);
  const handleKey = (event) => {
    console.log(event.key);
  };
  return (
    <div className="input-field">
      <div>
        <input
          type="search"
          onKeyDown={handleKey}
          onChange={handleSearch}
          placeholder="Search"
        />
      </div>
      <ul>
        {filterData &&
          filteredData.map((data) => <li key={data.code}>{data.name}</li>)}
      </ul>
    </div>
  );
}
