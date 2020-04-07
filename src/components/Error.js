import React from 'react';

const Error = ({mensaje}) => {
    return (

        <p className ="alert alert-danger  error">
            Error: {mensaje}
        </p>
      );
}
 
export default Error;