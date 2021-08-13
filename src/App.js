import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterList from './CharacterList.js';
// import './App.css';

const App = () => {

  //Creating my state data and my styled components//
  const [characterList, setCharacterList]= useState([]);
  const StyledApp = styled.div`
    text-align: center;
  `
  const StyledHeader = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  `
  //*****************************//

  //Getting my character array from the given API using the get method from axios making sure that it only tries to get the information once//
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      console.log(response.data);
      setCharacterList(response.data)
    })
    .catch(error => console.error('No Information Received'))
    },[]);
    //*****************************//


    //Setting up the flow of how the app is presented on the screen with styled components//
  return (
    <StyledApp>
      <StyledHeader>Characters</StyledHeader>
      <CharacterList characterList = {characterList}></CharacterList>
    </StyledApp>
  );
}
    //*****************************//
export default App;
