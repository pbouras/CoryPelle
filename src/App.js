import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Toolbar from './Toolbar';
import './theCSS.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyMap from './Map/MyMap';
import { Container } from 'react-bootstrap';
import MyFooter from './Myfooter'
import Welcome from './Welcome';
import Products from './products/bags/products';
import FirstToolbar from './FirstToolbar';
import MainToolbar from './MainToolbar';
import Details from './products/bags/productDetails';
import Company from './General/Company';

function App() {
  return (
    <BrowserRouter>
      <FirstToolbar/>
      <Toolbar/>
      <MainToolbar/>
      <main>
        <br/>
        {/*<Container>*/}
          <Switch className="Container">
            <Route path="/" component={Welcome} exact/>
            <Route path="/MyMap" component={MyMap} exact />
            <Route path="/Company" component={Company} exact />
            <Route path="/products/Bags" component={Products} exact />
            <Route path="/products/Bags/:id" component={Details} exact /> 
          </Switch>
        {/*</Container>*/}
      </main>
      <MyFooter/>
    </BrowserRouter>
    
  );
}

export default App;
