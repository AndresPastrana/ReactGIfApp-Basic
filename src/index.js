import React from "react";
import ReactDOM from "react-dom";

import { Padre } from "./components/07-tarea-memo/Padre";
// import CallBackHook from "./components/06-useMemo/CallBackHook";
// import MemoHook from "./components/06-useMemo/MemoHook";
// import LayoutEffect from "./components/05-useLayotEffect/LayoutEffect";
// import CasoDeUsoUseRef from "./components/04-useRef/CasoDeUsoUseRef";
// import App from './App'
// import CounterApp from './components/01-useState/CounterApp';
// import CounterHookApp from './components/01-useState/CounterHookApp';
// import { SimpleForm } from './components/02-useEfect/SimpleForm';
// import Quote from "./components/03-examples/Quote";

import "./index.css";

const divRoot = document.querySelector("#app");

// ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" />  , divRoot );
ReactDOM.render(<Padre />, divRoot);
