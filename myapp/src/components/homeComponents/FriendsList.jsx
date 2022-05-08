import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FriendsListItem from './homeSubComponents/FriendsListItem.jsx';
import { mockUserList } from '../../../mockData/mockUsers.js';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  text-align: center;
  margin: var(--standard-margin);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;

const ListTitle = styled.div`
  margin: 10px;
`;

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState(mockUserList);

  const getFriends = () => {
    axios
      .get('/FillMeIn')
      .then((response) => {
        setFriendsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <ListTitle>Friends List</ListTitle>
      <div>
        {friendsList.map((user, idx) => {
          return <FriendsListItem userName={user.userName} />;
        })}
      </div>
    </Container>
  );
};

export default FriendsList;
