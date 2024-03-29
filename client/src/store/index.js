//Esto va servir para crear un estado golobal y poder usralo en cualquier parte de la aplicaion.
import {createStore, applyMiddleware} from 'redux'
import reducers from "./reducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)),)

export default store