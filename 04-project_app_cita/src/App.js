import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {


  //Arreglo de Citas
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas aactuales y agregue las nuevas

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario/>
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
      </div>
      
    </Fragment>
    
  );  
}

export default App;
