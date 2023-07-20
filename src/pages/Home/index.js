import {useState} from 'react';
import { Header } from '../../components/Header'
import background from '../../assets/background.png';
import pointerRight from '../../assets/pointerRight.png';
import pointerLeft from '../../assets/pointerLeft.png';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {

  const[query, setQuery] = useState('');
  const[currentQuery, setCurrentQuery] = useState(null);
  const[url, setUrl] = useState(null);
  const[time, setTime] = useState(null);
  const[results, setResults] = useState(null);
  const[page, setPage] = useState(null);

  const handleQuery = async () => {
    const queryData = await fetch(`http://localhost:8080/v1/search?query=${query}&page=${page}`)
  }

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
            <button>Buscar</button>
          </div>
          <hr />
          <div>
            <h3 className='dadosPesquisa'>Aproximadamente 100 resultados (0,31 segundos)</h3>
            <ItemList title="teste" url="teste.com" description="teste"/>
            <ItemList title="teste" url="teste.com" description="teste"/>
            <ItemList title="teste" url="teste.com" description="teste"/>
            <ItemList title="teste" url="teste.com" description="teste"/>
            <ItemList title="teste" url="teste.com" description="teste"/>
          </div>
          <div className='pages'>
            <table>
              <tbody>
                <tr>
                  <td>Me</td>
                  <td>
                  <div className="o-container">
                      <div className="o">o</div>
                      <div className="o">o</div>
                      <div className="o">o</div>
                      <div className="o">o</div>
                      <div className="o">o</div>
                      <div className="o">o</div>
                    </div>
                  </td>
                  <td>w</td>
                  <img src={pointerRight} className="pointerRight" alt="Seta para direita" />
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="number-container">
                      <div className="number">1</div>
                      <div className="number">2</div>
                      <div className="number">3</div>
                      <div className="number">4</div>
                      <div className="number">5</div>
                      <div className="number">6</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
