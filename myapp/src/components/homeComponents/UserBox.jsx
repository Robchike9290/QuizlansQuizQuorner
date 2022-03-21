import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mockUserList } from '../../../mockData/mockUsers.js';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 100px;
  text-align: center;
  margin: var(--standard-margin);
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  text-align: right;
  margin: var(--standard-margin);
`;

const IMG = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%
`

const Avatar = styled.div`
  width: 100px
`

const UserBox = () => {
  const [userData, setUserData] = useState(mockUserList[0])

  return (
    <Container>
      <Contents>
      <Avatar>
        <IMG src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"/>
      </Avatar>
        {userData.userName}
      </Contents>
      <Contents>
        {userData.email}
      </Contents>
    </Container>
  );
};

export default UserBox;