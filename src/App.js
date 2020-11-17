import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Catalog from './Catalog';
import Footer from './Footer.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewProduct from './ViewProduct.js';
import Sell from './Sell.js';
import Checkout from './Checkout.js';
import Payment from './Payment.js';
import Order from './Order.js';
import Login from './Login.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HQJXtLhJU2bmSqWzeP5pGLZhS2DeMjVnz0pVzKH3uWWq49yTlrJNz1Qn6OjtLgeb6xhJxpRkGyusgfTk3wgmqnC00PL04diB9');

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/catalog'>
            <Header pathname='/catalog'/>
            <Catalog/>
          </Route>
          <Route path='/login'>
            <Header pathname='/login'/>
            <Login/>
          </Route>
          <Route path='/product'>
            <Header pathname='/product'/>
            <ViewProduct
              id = '981108'
              title = 'Levoit Water Filter Pitcher with 1 Standard Filter'
              price = {34.99}
              rating = {5}
              image = 'https://images-na.ssl-images-amazon.com/images/I/61A9DHnnKRL._AC_SY400_.jpg'
            />
          </Route>
          <Route path='/sell'>
            <Header pathname='/sell'/>
            <Sell/>
          </Route>
          <Route path='/cart'>
            <Header pathname='/cart'/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header pathname='/payment'/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/order'>
            <Header pathname='/order'/>
            <Order/>
          </Route>
          <Route path='/'>
            <Header pathname='/'/>
            <Home/>
          </Route>
        </Switch>
        
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
