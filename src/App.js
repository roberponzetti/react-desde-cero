import React, {Fragment} from 'react';
import Curso from './Curso';
import logo from './logo.svg';
import "./styles/styles.scss";

//const App = () => <h1>Hola Mundo desde -> App.js</h1> //App se podria llamar de otra manera pero por buena practica lo ponemos asi
const App = () => (
  // <Fragment>
  //   <div className="saludo">
  //     <h1>Hola mundo</h1>
  //     <p>Hola saludando desde el parrafo</p>
  //   </div>
  //   <div>
  //     <h2>Hola mundo2</h2>
  //     <p>Hola saludando desde el parrafo2</p>
  // </div>
  // </Fragment>
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://fondosmil.com/fondo/19293.jpg"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Jenifer Paira</p>
            <p> Mi sistema de cursos</p>
            <a href="https://ed.team" className="button">LOGIN</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
      <Curso/>
    </div>
  </Fragment>
);

export default App;
