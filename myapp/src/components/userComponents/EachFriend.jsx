import React, {useState} from 'react';
import mockUsers from '../../../mockData/mockUsers.js';

const EachFriend = (props) => {
  const friendID = props.friendID;

  return(
    <div>
      {mockUsers.friendID}
    </div>
  )
}

export default EachFriend;