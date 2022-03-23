import React, {useState} from 'react';
import { mockUserList } from '../../../mockData/mockUsers.js';
import EachFriend from './EachFriend.jsx';

// Pass loggedIn users and use to display online status
// maybe add in a toggle for showing loggedin friends

const FriendsList = () => {
  const [showFriends, setShowFriends] = useState(8);
  const [users, setUsers] = useState(mockUserList);
  console.log('🥶🥶🥶🥶', users);
  return (
    // {users.filter(userEmail =>
    //   userEmail === 'pat@gmail.com').friends.slice(0, showFriends).map((friendID) => (
    //    <EachFriend friendID = {friendID} />
    //   ))}
    <div></div>
  )
}

export default FriendsList;