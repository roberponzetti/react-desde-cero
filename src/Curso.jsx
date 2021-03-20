import React from 'react';

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://ux.ed.team/img/curso-portada.png" alt="Poster"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/eb52cf60-d29a-4b6d-a8cf-75c902b87fa7.png" alt="Profesor"/>
                </div>
              </div>
              <span className="small">Alexys Lozada</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
          </div>
        </div>
      </article>
);

export default Curso;