import { useSelector } from 'react-redux';
import { getUserInfo } from '../../features/repos/repoSlice';

function Avatar() {

  const user = useSelector(getUserInfo);

  console.log(user);
  
    return (
      <div>
       <img src={user.avatar_url} alt="user img" width="200px"/>
      </div>
       
    )
  }
  
  export default Avatar;