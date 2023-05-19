import { Fragment } from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./pages/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <input
        type="checkbox"
        class="sidenav__opened"
        id="sidenav__opened"
        autocomplete="off"
      />
      <Navbar />
      <Sidebar />
      <Header />
      <Footer />
    </Fragment>
  );
};

export default App;
