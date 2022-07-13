import Avatar from '../Avatar/index';
import Username from '../Username/index';
import UserStatus from '../UserStatus/index';
import SearchBar from '../SearchBar/index';

import './style.css';
import { useEffect, useState } from 'react';

import { fetchAsyncUser } from '../../features/repos/repoSlice';
import { useDispatch } from 'react-redux';

function Profile() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchAsyncUser());
  }, [dispatch])

    return (
      <header>
        <SearchBar/>
          <div className='informations'>
            <Avatar/>

            <div className='username'>
              <Username/>
              <UserStatus/>
            </div>
          </div>
      </header>
       
    )
  }
  
  export default Profile;