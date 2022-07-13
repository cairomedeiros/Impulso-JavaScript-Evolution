import Avatar from '../Avatar/index';
import Username from '../Username/index';
import UserStatus from '../UserStatus/index';
import SearchBar from '../SearchBar/index';

import './style.css';
import { useEffect, useState } from 'react';

import { fetchAsyncRepos, fetchAsyncReposStarred } from '../../features/repos/repoSlice';
import { useDispatch } from 'react-redux';


function Profile() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchAsyncRepos());
   dispatch(fetchAsyncReposStarred());
  }, [dispatch])


    return (
      <header>
        <SearchBar/>
        <Avatar/>
        <Username/>
        <UserStatus/>
      </header>
       
    )
  }
  
  export default Profile;