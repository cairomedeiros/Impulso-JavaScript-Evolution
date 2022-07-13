import { getAllRepos } from "../../features/repos/repoSlice";
import { useSelector } from 'react-redux';


function ReposListing() {

    const repos = useSelector(getAllRepos);
    
    
    return (
      <div>
        {repos.map((repo) => {
          return(
            <div key={repo.id}>
              <h4>{repo.name}</h4>
            </div>
          )
        })}
      </div>

    )
       
    
  }
  
  export default ReposListing;