/* import React from 'react';
import ReactDOM from 'react-dom'; */

/* const element = document.createElement('h1');

element.innerText = 'Hola React';

const container = document.getElementById('root');

container.appendChild(element); */

/*
   ++++++++++ EJERCICIO JSX +++++++++
const user = {
  firstName: 'Cosme',
  lastName: 'Fulanito'
};

function getName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hola {getName(user)} desde DOM</h1>;
  }
  return <h1>Hola ¿Quien sos?</h1>;
}

const name = 'Fede';
const element = <div>{getGreeting(user)}</div>;
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');

//ReactDOM.render(_QUE, __DONDE)

ReactDOM.render(<Card />, container);
