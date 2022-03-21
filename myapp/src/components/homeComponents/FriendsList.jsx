import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsListItem from './homeSubComponents/FriendsListItem.jsx';
import { mockUserList } from '../../../mockData/mockUsers.js';

//OMG KATIE TRY THE VARIABLES i wanna know if it works k sorry I'll leave u be LOL see ya!!!!<3
// OH TRUE I FORGOT BOUT THEM
// one sec
const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 300px;
  //need to look up how to adjust height of box based on content rather than px
  text-align: center;
  margin: var(--standard-margin)
`;
//display list withou bullets (later: ask jemmy)

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState(mockUserList)

  const getFriends = () => {
    axios.get('/FillMeIn')
      .then((response)=> {
        setFriendsList(response.data)
      })
      .catch((error)=> {
        console.error(error)
      })
  }

  //! Commenting this out rn because the request is going to nowhere, but does need to go back in:::::::
  //useEffect(()=> {
  //  getFriends()
  //}, [])

  return (
    <Container>
      <h3>
      Friends List
      </h3>
      <div>
      {friendsList.map((user, idx) => {
        return <FriendsListItem userName={user.userName}/>
      })}
      </div>
      </Container>
  );
};

export default FriendsList;