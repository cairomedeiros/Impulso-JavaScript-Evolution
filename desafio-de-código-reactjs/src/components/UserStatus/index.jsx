import { useSelector } from 'react-redux';
import { getUserInfo } from '../../features/repos/repoSlice';

function UserStatus() {

  const info = useSelector(getUserInfo);

  console.log(info)

  
    return (
      <div>
        <div className="column">
          <p>Company: {info.company}</p>
          <p>Location: {info.location}</p>
        </div>

        <div className="row">
          <small>Followers: {info.followers}</small>
          <small>Followings: {info.following}</small>
          <small>Gists: {info.public_gists}</small>
          <small>Repos: {info.public_repos}</small>
        </div>
      </div>
       
    )
  }
  
  export default UserStatus;