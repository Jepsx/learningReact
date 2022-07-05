import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.js';
import './index.css';

//High Orden Components
// function App(props){
//     return<h1>{props.saludo}, {props.name}</h1>
// }
// //se empiesa a  nombrar con with por convencion
// function withGreeting(WrappedComponent){
//     return function WrappedComponentWithGreeting(saludo){
//         return function ComponenteDeVerdad(props){
//             return (
//                 <React.Fragment>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>Estamos aconpañando el wrapped component</p>
//                 </React.Fragment>
//             )
//         }
//     }
// }

// const AppWithGreeting = withGreeting(App)('Hello!!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
    // <AppWithGreeting name='Ann'/>

);
