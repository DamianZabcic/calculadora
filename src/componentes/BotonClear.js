import React from "react";
import '../css/BotonClear.css';

const BotonClear = (props) => (
  <div 
    className="boton-clear" onClick={props.manejarClear}>
      {props.children} {/* Si no cambia, aca prodria ir Clear en vez de {props.children} y en App.js <BotonClear></BotonClear>*/}
  </div>
)

export default BotonClear;