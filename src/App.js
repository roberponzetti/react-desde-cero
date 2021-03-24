import React, {Fragment} from 'react';
import "./styles/styles.scss";
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';
import Course from './Course';
import MainMenu from './MainMenu'
import Historial from './Historial'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/historial/:valor" component={Historial} />
      <Route path="/historial" component={Historial} />
      <Route path="/formulario" component={() => <Formulario name="Pagina de contacto" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
);

export default App;
