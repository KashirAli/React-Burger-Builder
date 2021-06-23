import react from 'react';
import Layout from '../Component/Layout/Layout'
import Checkout from './Checkout/Checkout'
import './App.css';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" exact  component={BurgerBuilder}/>
        
        </Switch>
        
      </Layout>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
