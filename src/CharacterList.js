//Importing the necessary things into this document//
import styled from 'styled-components';
import Character from './Character.js';
//*****************************//

const CharacterList = (props) => {

    //Setting up our variables, calling in the information that we need from our app.js file, and creating styled components//
    const {characterList} = props;
    const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `
    //*****************************//

    //Seperating our individual characters and sending our individual character information to our character.js file and implementing the layout of our styled componenets//
    return (
    <StyledContainer>
        {characterList.map((characterObject)=> {
            return ( 
             <Character character = {characterObject}/>)
    })}
    </StyledContainer>
)}

//*****************************//

//Sending this info to app.js//
export default CharacterList;
//*****************************//