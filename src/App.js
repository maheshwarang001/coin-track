import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";
import Footer from "./components/Footer";

function App() {

  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then(response => {
      setCoins(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin/:coinId" element={<Coin />}>
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
