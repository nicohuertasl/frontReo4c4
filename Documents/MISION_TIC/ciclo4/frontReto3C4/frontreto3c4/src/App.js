
import './App.css';
import Login from './Login.js';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Perfil from './Perfil';
import Order from './Order';
import Ordersalesman from './Ordersalesman';
import Orderdetails from './Orderdetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    
    <Container fluid="md" className="main-header">
      <Header />
      <Login />
      <hr />
      <h1>My profile</h1>
      <Perfil />
      <hr />
      <h1>Purchase Order</h1>
      <Order />
      <h1>Order by Salesman</h1>
      <Ordersalesman />
      <h1>Order Details</h1>
      <Orderdetails />
    </Container>
    
  );
}

export default App;
