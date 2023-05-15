import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Angebot from "./routes/angebot/angebot";
import Kunden from "./routes/kunden/kunden";
import DigEuro from "./routes/digEuro/digEuro";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="angebot" element={<Angebot />} />
        <Route path="kunden" element={<Kunden />} />
        <Route path="digEuro" element={<DigEuro />} />
      </Route>
    </Routes>
  );
};

export default App;
