import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GridComp from './components/gridComp';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
      console.log(response.data);
      const starWarsResults = response.data;
      console.log('API data', starWarsResults.results);
      setStarWarsData(starWarsResults.results);
    });
  }, []);




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <GridComp starWarsData= {starWarsData} key={starWarsData} />
    </div>
  );
};

export default App;
