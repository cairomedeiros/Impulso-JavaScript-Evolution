import ReposListing from '../ReposListing/index';
import ReposStarred from '../ReposStarred/index';

import './style.css';

function Repositories() {
  
    return (
      <main>
        <ReposListing/>
        <ReposStarred/>
      </main>
       
    )
  }
  
  export default Repositories;