import React, {Fragment} from 'react';
import Curso from './Curso';
import logo from './logo.svg';
import "./styles/styles.scss";

const cursos = [
  {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": 30,
    "profesor": "Robertino Ponzetti"
  },
  {
    "title": "HTML desde cero",
    "image": "algo.jpg",
    "price": 40,
    "profesor": "Gabriel Martin"
  },
  {
    "title": "C# desde cero",
    "image": "algo.jpg",
    "price": 50,
    "profesor": "Otro Profesor"
  },
  {
    "title": "Java desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
    "price": 60,
    "profesor": "Jenifer Paira"
  },
]
const App = () => (
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
      {
        cursos.map(c => <Curso  title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
      }
    </div>
  </Fragment>
);

export default App;
