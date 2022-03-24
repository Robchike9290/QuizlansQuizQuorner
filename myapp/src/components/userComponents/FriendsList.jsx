import React, {useState} from 'react';
import { mockUserList } from '../../../mockData/mockUsers.js';
import EachFriend from './EachFriend.jsx';

// Pass loggedIn users and use to display online status
// maybe add in a toggle for showing loggedin friends

const FriendsList = (props) => {
  const [showFriends, setShowFriends] = useState(10);
  const [users, setUsers] = useState(mockUserList);
  console.log('🥶🥶🥶🥶', users[0].email);
  const presentUser = users.filter(user => user.email === 'pat@gmail.com');
  console.log(presentUser[0].friends);

  return (
    // {presentUser[0].friends.slice(0, showFriends).map((friendID) => (
    //    <EachFriend friendID = {friendID} />
    //   ))}
    <div>test</div>
  )
}

export default FriendsList;