import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsListItem from './subsubcomponents/FriendsListItem.jsx'
//import sample data

//OMG KATIE TRY THE VARIABLES i wanna know if it works k sorry I'll leave u be LOL see ya!!!!<3
// OH TRUE I FORGOT BOUT THEM
// one sec
const Container = styled.div`
  //border: 1mm outset #5b96c2;
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 500px;
  //need to look up how to adjust height of box based on content rather than px
  text-align: center;
`;
//display list withou bullets (later: ask jemmy)
//${--blue} TRY THIS WITH JEMMY BC IDK HOW

const FriendsList = () => {
  return (
    <Container>
      <h4>
      Friends List
      </h4>
      <FriendsListItem />
      </Container>
  );
};

export default FriendsList;