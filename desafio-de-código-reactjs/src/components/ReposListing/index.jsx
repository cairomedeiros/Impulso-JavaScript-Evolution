import { getAllRepos } from "../../features/repos/repoSlice";
import { useSelector } from 'react-redux';
import './style.css';

function ReposListing() {

    const repos = useSelector(getAllRepos);
    console.log(repos)
    
    
    return (
      <div className="card">
        {repos.map((repo) => {
          return(
            <div className="cardRepo" key={repo.id}>
              <h4>{repo.name}</h4>
              <p className="pRepos">{repo.language}</p>
            </div>
          )
        })}
      </div>

    )
       
    
  }
  
  export default ReposListing;