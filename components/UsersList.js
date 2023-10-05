import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  
  console.log('did i run')
  return (
    <ul>
      {users.filter((user)=>{
        if(startingLetter === '') return user
        return user.name.charAt(0) == (startingLetter)
      }).map((user)=>{
        
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  );
}

export default UsersList;
