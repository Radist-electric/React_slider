import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayHello word="World" />
        <SayFullName name="Alex" surname="Raimov" link="https://vk.com/spacehuman" />
        <SayFullName name="Anna" surname="Raimova" link="https://vk.com" />
        <SayFullName name="Vasya" surname="Petrov" link="https://ok.ru" />
      </div>
    );
  }
}
function SayFullName(props) {
  return (
      <div>
        <h2>Моё имя {props.name}, фамилия - {props.surname}</h2>
        <a href={props.link}>Ссылка на мой профиль </a>
      </div>
    )
}
function SayHello(say) {
  return (
      <h1>Hello, {say.word}!</h1>
    )
}

export default App;
