import React from "react";
import PropTypes  from "prop-types";

const PrimeraApp = ({ saludo }) => {

  return (
    <>
      <h1>{ saludo }</h1>
      <p>Mi primera aplicación en react</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  saludo: 'Soy un saludo'
}

export default PrimeraApp;
