import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import CardProduct from '../components/cardProduct.jsx';
import CardProductDetails from '../components/cardProduct.Details.jsx';
import ModalShoppingCart from '../components/modal.shoppingCart.jsx';
import { getData } from '../services/services.api.js';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/App.scss';

function App() {
  let [data, setData] = useState([]);
  let [oldComponent, setOldComponent] = useState(null);
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();

  useEffect(()=>{
    getData().then(res=>setData(res));
  }, [data])

  let renderComponent = data.map(e=>{
    let price = new Intl.NumberFormat('es-ES').format(e.precioUnid);
    return <CardProduct img={e.image} title={e.nombre} price={price} cant={e.cantidad} key={e._id} methods={(event)=>{
      if(oldComponent!= null){
        oldComponent.style.display = 'grid';
      }
      let key = e._id;
      navigate(`/${key}`, {replace: true});
      event.currentTarget.style.display = 'none';
      setOldComponent(event.currentTarget);
    }}/>
  })

  const renderModal = ()=>{
    if (!open) {
      setOpen(true);
    }
  }

  const outModal = (ev)=>{
    if (open && ev.target.classList.contains('background-container')) {
      setOpen(false);
    }
  }

  return (
    <div className="App">
      {
        open && <ModalShoppingCart methods={outModal}/>
      }
      <NavBar methods={renderModal} oldComponent={oldComponent}/>
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
