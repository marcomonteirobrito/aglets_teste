import './App.css';
import api from './services';

// Components
import OrderDetails from "./components/OrderDetails"
import Invoice from "./components/Invoice"
import List from './components/List';
import Itens from './components/Items';

function App() {
 

 return (
    <div className="App">
      <OrderDetails />
      <Invoice />
      <List />
      <Itens />
    </div>
  );
}

export default App;
