import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from './components/Header';
import Home from "./components/Home"
import Product from "./components/Product"
function App() {
  return (
<Router>
  <div class="app">
 
 <Switch>
<Route path="/checkout">
  <h1>checkout</h1>
</Route>

<Route path="/">
  <Header/>
  <Home/>


</Route>

<Route path="/login">
  <h1>Login page</h1>
</Route>
 </Switch>
  </div>
</Router>

    );
}

export default App;
