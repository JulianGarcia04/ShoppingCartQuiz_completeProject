import NavBar from '../components/navbar.jsx';
import Carrousell from '../components/carrousell.jsx';
import CardProduct from '../components/cardProduct.jsx';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carrousell/>
      <section className='containerCardproduts'>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
      </section>
    </div>
  );
}

export default App;
