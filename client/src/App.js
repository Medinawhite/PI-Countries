//Aqui vamos a setear nuestras rutas

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrincipalPage from "./modules/PricipalPage.js";
import Home from"./modules/Home.js";
import Detail from"./modules/Detail.js";
import CreateActivity from "./modules/CreateActivity.js";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PrincipalPage}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/countries/:id" component={Detail}/>
          <Route exact path="/create" component={CreateActivity}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
