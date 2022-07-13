import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../features/repos/repoSlice';
import logo from '../../assets/user.png';

function Avatar() {

  const user = useSelector(getUserInfo);
  console.log(user)

    return (
      <div>
        {user.id != null ? (<img src={user.avatar_url} alt="user" width="200px"/>):(<img src={logo} alt="user" width="200px"/>)}
       
      </div>
       
    )
  }
  
  export default Avatar;