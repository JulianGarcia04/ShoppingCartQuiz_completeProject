import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import CardProduct from '../components/cardProduct.jsx';
import CardProductDetails from '../components/cardProduct.Details.jsx';
import { getData } from '../services/services.api.js';
import { useEffect, useState } from 'react';
import '../styles/App.scss';

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
      <CardProductDetails imgUrl={'https://www.farmalisto.com.co/146125-large_default/comprar-sal-de-frutas-lua-plus-polvo-citrus-caja-con-6-sobres-precio.jpg'}/>
      <section className='containerCardproduts'>
        {renderComponent}
      </section>
    </div>
  );
}

export default App;
