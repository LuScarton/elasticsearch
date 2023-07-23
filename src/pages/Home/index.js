import {useState} from 'react';
import { Header } from '../../components/Header'
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {

  const[query, setQuery] = useState('');
  const[currentQuery, setCurrentQuery] = useState(null);
  const[page, setPage] = useState('1');

  const handleQuery = async () => {
    setPage('1')
    const queryData = await fetch(`http://localhost:8080/v1/search?query=${query}&page=1`)
    const newQuery = await queryData.json();

    if(newQuery.length){
      setCurrentQuery(newQuery);
    } else {
      setCurrentQuery(null);
    }
  }

  const handlePage = async (newPage) => {

    if(newPage > 0){
      setPage(newPage);
    } else {
      setPage('1')
    }
    
    const queryData = await fetch(`http://localhost:8080/v1/search?query=${query}&page=${newPage}`);
    const newQuery = await queryData.json();

    if (newQuery.length > 0) {
      setCurrentQuery(newQuery);
    } else if (newQuery.length == null) {
      setCurrentQuery(null);
    }
  };


  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input 
            name="query" 
            value={query} 
            onChange={event => setQuery(event.target.value)} 
            placeholder="Digite aqui sua pesquisa e deixe que eu purr-curo pra você!" />
            <button className="buscar" onClick={handleQuery}>Buscar</button>
          </div>
          <hr />
          {currentQuery?.length > 0 ? (<>
            <div>
              <h3 className='dadosPesquisa'>Aproximadamente 100 resultados (0,31 segundos)</h3>
              {currentQuery.map((query) => (
                <ItemList title={query.title} url={query.url} description={query.abs}/>
              ))}
            </div>
              <div className='pages'>
                <table>
                  <tbody>
                    <tr>
                      <td>Me</td>
                      <td>
                        <div className="o-container">
                          <button onClick={() => handlePage(Number(page) - 1)} className="o">o</button>
                          <button onClick={() => handlePage(Number(page))} className="o">o</button>
                          <button onClick={() => handlePage(Number(page) + 1)} className="o">o</button>
                        </div>
                      </td>
                      <td>w</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="number-container">
                          <div className="number">↤</div>
                          <div className="number">{page}</div>
                          <div className="number">↦</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
