import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import CardProduct from '../components/cardProduct.jsx';
import { getData } from '../services/services.api.js';
import '../styles/App.scss';
import { useEffect, useState } from 'react';

function App() {
  let [data, setData] = useState([]);

  useEffect(()=>{
    getData().then(res=>setData(res));
  }, [])

  let renderComponent = data.map(e=>{
    return <CardProduct img={e.image} title={e.nombre} price={e.precioUnid} key={e._id}/>
  })

  return (
    <div className="App">
      <NavBar/>
      <Carrousell/>
      <section className='containerCardproduts'>
        {renderComponent}
      </section>
    </div>
  );
}

export default App;
