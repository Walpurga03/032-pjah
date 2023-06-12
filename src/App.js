import Navbar from "./components/navbar/navbar";
import Header from "./pages/header/header";
import About from "./pages/about/about";
import Angebot from "./pages/angebot/angebot";
import Kunden from "./pages/kunden/kunden";
import DigEuro from "./pages/digEuro/digEuro";
import Bitcoin from "./pages/bitcoin/bitcoin";
import Blockchain from "./pages/blockchain/blockchain";
import Impressum from "./pages/impressum/impressum";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/angebot" element={<Angebot />} />
        <Route path="/kunden" element={<Kunden />} />
        <Route path="digEuro" element={<DigEuro />} />
        <Route path="bitcoin" element={<Bitcoin />} />
        <Route path="blockchain" element={<Blockchain />} />
        <Route path="impressum" element={<Impressum />} />
      </Route>
    </Routes>
  );
};

export default App;
