import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncUser, fetchAsyncRepos, fetchAsyncReposStarred } from '../../features/repos/repoSlice';

import './style.css';

function SearchBar() {
  const dispatch = useDispatch("");

  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUser(term));
    dispatch(fetchAsyncRepos(term));
    dispatch(fetchAsyncReposStarred(term));

    setTerm("");
  }
  
    return (
      <form className="search" onSubmit={submitHandler}>
        <input 
        className='inputStyle' 
        type="text"
        value={term}
        placeholder="Digite um nome de usuário..."
        onChange={(e) => 
          setTerm(e.target.value)
        }/>
        <button className="searchButton" type='submit'>Search</button>
        
      </form>
       
    )
  }
  
  export default SearchBar;