import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./components/pages/HomePage";
import { FavoritesPage } from "./components/pages/FavoritesPage";
import { DetailsPage } from "./components/pages/DetailsPage";
import { fetchSymbols } from "./components/pages/utils";
import styled from 'styled-components';

const App = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    fetchSymbols(setSymbols)
  }, []);

  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage symbols={symbols} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/details/:symbol" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

const Container = styled('div')`
  padding: 10px 20px;
`