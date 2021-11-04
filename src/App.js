import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notfound from './components/404Page/Notfound';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dahsboard from './components/Dahsboard/Dahsboard';
import AddServices from './components/AddServices/AddServices';
import MyOrder from './components/MyOrder/MyOrder';
import AllOrder from './components/AllOrders/AllOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllServices from './AllServices/AllServices';
import DetailedService from './components/DetailedService/DetailedService';
import ManageOrder from './components/ManageOrder/ManageOrder';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/register'>
          <Register></Register>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/contact'>
          <Contact></Contact>
        </Route>
        <PrivateRoute exact path='/addService'>
          <AddServices></AddServices>
        </PrivateRoute>
        <PrivateRoute exact path='/allOrder'>
          <AllOrder></AllOrder>
        </PrivateRoute>
        <PrivateRoute exact path='/myOrder'>
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute exact path='/user'>
          <Dahsboard></Dahsboard>
        </PrivateRoute>
        <PrivateRoute exact path='/service/:id'>
          <DetailedService></DetailedService>
        </PrivateRoute>
        <PrivateRoute exact path='/manageOrder'>
          <ManageOrder></ManageOrder>
        </PrivateRoute>
        <Route exact path='/services'>
          <AllServices></AllServices>
        </Route>
        <Route >
          <Notfound></Notfound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
