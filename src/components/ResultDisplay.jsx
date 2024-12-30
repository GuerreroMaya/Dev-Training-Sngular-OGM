import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div className="alert alert-warning text-white">
      {result !== null 
        ? <strong>Resultado: {result}</strong> 
        : 'Sin resultado todavía.'}
    </div>
  );
}

export default ResultDisplay;
