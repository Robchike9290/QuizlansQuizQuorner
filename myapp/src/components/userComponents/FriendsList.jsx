import React, {useState, useEffect} from 'react';
import { mockUserList } from '../../../mockData/mockUsers.js';
import EachFriend from './EachFriend.jsx';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: var(--standard-border-radius);
  background-color: var(--blue);
  height: 300px;
  //need to look up how to adjust height of box based on content rather than px
  text-align: center;
  margin: var(--standard-margin);
  box-shadow: var(--standard-shadow);
  padding: var(--standard-padding);
`;


const FriendsList = (props) => {

  return (
    <Container>
      Friends
    {props.friends.map((friend) => {
      return <EachFriend friend={friend} key={friend}/>
    })}
    </Container>
  )
}

export default FriendsList;