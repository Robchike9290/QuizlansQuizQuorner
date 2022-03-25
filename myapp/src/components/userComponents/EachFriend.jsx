import React, {useState} from 'react';
import mockUsers from '../../../mockData/mockUsers.js';
import styled from 'styled-components';

const FriendDiv = styled.div`
  overflow: scroll;
`

const EachFriend = (props) => {
  const friendID = props.friend;
  //console.log('👅👅👅friend', props.friend);

  return(
    <FriendDiv>
      {props.friend}
      {/* {mockUsers.friend} */}
    </FriendDiv>
  )
}

export default EachFriend;