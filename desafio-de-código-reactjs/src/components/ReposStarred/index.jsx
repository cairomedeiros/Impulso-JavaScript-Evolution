import { getAllReposStarred } from '../../features/repos/repoSlice';
import { useSelector } from 'react-redux';

function ReposStarred() {
  const reposStarred = useSelector(getAllReposStarred);
  console.log(reposStarred)


    return (
      <div>
        {reposStarred.map((starred)=> {
          return(
            <div key={starred.id}>
              <h1>{starred.name}</h1>
            </div>
          )
        })}
        
      </div>
       
    )
  }
  
  export default ReposStarred;