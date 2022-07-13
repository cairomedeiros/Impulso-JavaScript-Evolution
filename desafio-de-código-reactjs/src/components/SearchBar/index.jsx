import './style.css';

function SearchBar() {
  
    return (
      <form className="search">
        <input className='inputStyle' type="text" placeholder="Digite um nome de usuário..."/>
        <button type='submit'>Buscar</button>
      </form>
       
    )
  }
  
  export default SearchBar;