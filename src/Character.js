import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import styled from 'styled-components';

const Character = (props) => {

    //Setting up our variables, calling in the information that we need from our characterlist.js file and using another api, and creating styled components//
    const {character}= props;
    const [birthPlanet, setBirthPlanet] = useState('');
    const [enable, setEnable] = useState(false);
    useEffect(() => {
        axios.get(character.homeworld)
            .then(response => {
             setBirthPlanet(response.data.name);
            })
        .catch(error => console.error('No Information Received'))
    },[]);
    const toggleOn = () =>{
        setEnable(!enable);
    }
    const StyledFlexContainer = styled.div`
        display: block;
        margin: 0.25%; 
        background-color: #f49446;
        width: 70%;
        opacity: 85%;
        border: 2px solid #94a4b3;
    `
    const StyledCharacterInformation = styled.div`
        display: flex;
        justify-content: space-between;
        color: black;
        text-shadow: 1px 1px 5px #fff;
    `
    const StyledButton = styled.button`
        background-color: #f49446;
        color: black;
        border: none;
        font-weight: bold;
    `
    const StyledInformation = styled.p`
        font-weight: bold;
    `
    //*****************************//
        return (
        <StyledFlexContainer>
            <StyledCharacterInformation>
                <h2>{character.name}</h2>
                <StyledButton onClick = {toggleOn} className = 'learnMoreCharacter'>Learn More</StyledButton>
            </StyledCharacterInformation>
            {enable && <StyledInformation>{character.name} was born in the year {character.birth_year} on the planet of {birthPlanet}. They identify as {character.gender}, have {character.hair_color} and {character.eye_color} eyes. Weighing in with a mass of approximately {character.mass} kilograms.
            </StyledInformation>}
        </StyledFlexContainer>
        
     )}

export default Character;