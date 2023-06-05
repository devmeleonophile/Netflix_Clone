import React, { Component } from "react";
import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from "./Banner";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner fetchData={request.fetchNetflixOriginal} />
        <Row
          title="NetflixOrginal"
          fetchUrl={request.fetchNetflixOriginal}
          isLarge
        />
        <Row title="Trending" fetchUrl={request.fetchTrending} />
        <Row title="TopRated" fetchUrl={request.fetchTopRated} />
        <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
        <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
        <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      </div>
    );
  }
}

export default App;
