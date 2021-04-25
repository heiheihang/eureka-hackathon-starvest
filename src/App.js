import logo from './logo.svg';
import './App.css';
import jeans1 from './jeans1.jpeg';
import jeans2 from './jeans2.jpeg';
import t1 from './t1.jpeg';
import t2 from './t2.jpeg';
import l1 from './l1.jpeg';
import l2 from './l2.jpeg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  function Shop1() {
    return<div>
      <h2>Bull Jeans</h2>
      <div className="item">
        <div>
        <div className="item-name">
          Tight Jeans
        </div>
        <div className="item-description">
          Very tight jeans for cool people
        </div>
        <img className="item-pic" src={jeans1} alt="Logo" />
        </div>
        <div className="col2">
        <Button className="item-btn" variant="primary">3 Tickets</Button>
        </div>
      </div>
      <div className="item">
        <div>
        <div className="item-name">
          Thin Jeans
        </div>
        <div className="item-description">
          Very thin jeans for cool people
        </div>
        <img className="item-pic" src={jeans2} alt="Logo" />
        </div>
        <div className="col2">
        <Button className="item-btn" variant="primary">4 Tickets</Button>
        </div>
      </div>
    </div>
  }
  function Shop2() {
    return <div>
    <h2>Cool Tops</h2>
    <div className="item">
      <div>
      <div className="item-name">
        Colorful T-shirts
      </div>
      <div className="item-description">
        Colorful t-shirts
      </div>
      <img className="item-pic" src={t1} alt="Logo" />
      </div>
      <div className="col2">
      <Button className="item-btn" variant="primary">2 Tickets</Button>
      </div>
    </div>
    <div className="item">
      <div>
      <div className="item-name">
        White T
      </div>
      <div className="item-description">
        Very white T for cool people
      </div>
      <img className="item-pic" src={t2} alt="Logo" />
      </div>
      <div className="col2">
      <Button className="item-btn" variant="primary">4 Tickets</Button>
      </div>
    </div>
  </div>
  }
  function Shop3() {
    return <div>
    <h2>Sharp Cuts</h2>
    <div className="item">
      <div>
      <div className="item-name">
        Thin Leather
      </div>
      <div className="item-description">
        Good leather for leathercraft
      </div>
      <img className="item-pic" src={l1} alt="Logo" />
      </div>
      <div className="col2">
      <Button className="item-btn" variant="primary">8 Tickets</Button>
      </div>
    </div>
    <div className="item">
      <div>
      <div className="item-name">
        Nice Leather
      </div>
      <div className="item-description">
        Nice leather for bags
      </div>
      <img className="item-pic" src={l2} alt="Logo" />
      </div>
      <div className="col2">
      <Button className="item-btn" variant="primary">6 Tickets</Button>
      </div>
    </div>
  </div>
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="two-col">
            <div className="col1">
              <div class="container">

                <div class="shop-container">
                  <div class="shop-name">
                    Bull Jeans
                  </div>
                  <div class="shop-description">
                    Jeans for bullish young adults👖
                  </div>
                  <Link to="/shop1">Support</Link>
                  <div class="sep"></div>
                  <ProgressBar now={60} />
                </div>
                <div class="shop-container">
                  <div class="shop-name">
                    Cool Tops
            </div>
                  <div class="shop-description">
                    Cool Tshirts for the youngsters👕
            </div>
                  <Link to="/shop2">Support</Link>
                  <div class="sep"></div>
                  <ProgressBar now={80} />
                </div>
                <div class="shop-container">
                  <div class="shop-name">
                    Sharp Cuts
            </div>
                  <div class="shop-description">
                    Leathercrafts for the stylists👜
            </div>
                  <Link to="/shop3">Support</Link>
                  <div class="sep"></div>
                  <ProgressBar now={50} />
                </div>
              </div>
            </div>
            <div className="col2">
              <Switch>
                <Route path="/shop1">
                  <Shop1 />
                </Route>
                <Route path="/shop2">
                  <Shop2 />
                </Route>
                <Route path="/shop3">
                  <Shop3 />
                </Route>
              </Switch>
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
