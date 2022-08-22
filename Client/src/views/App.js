import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import CardProduct from '../components/cardProduct.jsx';
import CardProductDetails from '../components/cardProduct.Details.jsx';
import { getData } from '../services/services.api.js';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.scss';

function App() {
  let [data, setData] = useState([]);
  let [oldComponent, setOldComponent] = useState(null);
  let navigate = useNavigate();

  useEffect(()=>{
    getData().then(res=>setData(res));
  }, [])

  let renderComponent = data.map(e=>{
    return <CardProduct img={e.image} title={e.nombre} price={e.precioUnid} key={e._id} methods={(event)=>{
      if(oldComponent!= null){
        oldComponent.style.display = 'grid';
      }
      let key = e._id;
      navigate(`/${key}`, {replace: true});
      event.currentTarget.style.display = 'none';
      setOldComponent(event.currentTarget);
    }}/>
  })
  return (
    <div className="App">
      <NavBar/>
      <Carrousell/>
      <Routes>
        <Route path="/:key" element={<CardProductDetails/>}/>
      </Routes>
      <section className='containerCardproduts'>
        {renderComponent}
      </section>
    </div>
  );
}

export default App;
