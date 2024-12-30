import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputForm({ onCalculate }) {
  const [nValue, setNValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nValue) {
      onCalculate(parseInt(nValue, 10));
    }
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mb-2">
          <label htmlFor="nInput" className="mr-2 fs-4">Ingresa n:</label>
          <input
            type="number"
            id="nInput"
            className="form-control border border-warning"
            value={nValue}
            onChange={(e) => setNValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary ml-2 mb-2">Calcular</button>
      </form>
    </div>
  );
}

export default InputForm;
