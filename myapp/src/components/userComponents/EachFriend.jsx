import React, {useState} from 'react';
import mockUsers from '../../../mockData/mockUsers.js';

const EachFriend = (props) => {
  const friendID = props.friend;
  //console.log('👅👅👅friend', props.friend);

  return(
    <div>
      {props.friend}
      {/* {mockUsers.friend} */}
    </div>
  )
}

export default EachFriend;