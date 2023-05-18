import { Fragment } from "react";
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
      <Header />
      <Sidebar />
      <Footer />
    </Fragment>
  );
};

export default App;
