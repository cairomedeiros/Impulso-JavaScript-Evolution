import { useState, useEffect } from 'react';

import ReposListing from '../ReposListing/index';
import ReposStarred from '../ReposStarred/index';

import { fetchAsyncRepos, fetchAsyncReposStarred } from '../../features/repos/repoSlice';

import { useDispatch } from 'react-redux';

import './style.css';

function Repositories() {

  const [show, setShow] = useState(true);
  
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchAsyncRepos());
    dispatch(fetchAsyncReposStarred());
    }, [dispatch]);

    

    return (
      <main>
        
        <button type='button' onClick={() => setShow(true)}>
          Repos
        </button>

        <button type='button' onClick={() => setShow(false)}>
          favoritos
        </button>

        {show ? (<ReposListing/>):(<ReposStarred/>)}
        
      </main>
       
    )
  }
  
  export default Repositories;