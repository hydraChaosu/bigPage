import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import Content from "./layouts/Content";
import "./styles/App.scss";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Content />
            <Contact />
            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
