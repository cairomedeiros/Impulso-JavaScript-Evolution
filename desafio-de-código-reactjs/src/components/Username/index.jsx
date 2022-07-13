import { useSelector } from 'react-redux';
import { getUserInfo } from '../../features/repos/repoSlice';
import './style.css';

function Username() {

  const nome = useSelector(getUserInfo);
  
    return (
      <div>
        <h2>{nome.name}</h2>
      </div>
       
    )
  }
  
  export default Username;