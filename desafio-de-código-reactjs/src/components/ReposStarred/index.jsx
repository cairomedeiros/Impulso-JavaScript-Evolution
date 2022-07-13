import { getAllReposStarred } from '../../features/repos/repoSlice';
import { useSelector } from 'react-redux';

function ReposStarred() {
  const reposStarred = useSelector(getAllReposStarred);
  console.log(reposStarred)


    return (
      <div className='card'>
        {reposStarred.map((starred)=> {
          return(
            <div className="cardRepo" key={starred.id}>
              <h4>{starred.name}</h4>
            </div>
          )
        })}
        
      </div>
       
    )
  }
  
  export default ReposStarred;