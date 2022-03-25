import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import sample data

const ListItem = styled.div`
  margin: var(--standard-margin);
  text-align: left;
`;

const FriendsListItem = ({userName}) => {
  return (
    <ListItem>
      {userName}
    </ListItem>
  );
};

export default FriendsListItem;