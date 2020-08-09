import React, { Component } from "react";
import "./css/reset.css";
import "./css/general.css";
import "./css/typography.css";
import FeaturedArticles from "./components/FeaturedArticles";
import LatestArticles from "./components/LatestArticles";
import SideBanner from "./components/SideBanner";
import CategorySort from "./components/CategorySort";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="mb-45">News</h1>
        <CategorySort />
        <div id="top-section">
          <FeaturedArticles />
          <div className="separator-1" />
          <LatestArticles />
          <div className="separator-2" />
          <SideBanner />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
