import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Calculation from "./components/Calculation";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [n, setN] = useState(null);
  const [result, setResult] = useState(null);

  const handleCalculate = (value) => {
    setN(value);
  };

  const handleResult = (calculatedValue) => {
    setResult(calculatedValue);
  };

  return (
    <div className="container text-center my-4">
      <div class="row justify-content-center align-items-center">
        <div class="col-6 col-lg-4">
          <h1 className="mb-4">Calculadora de Serie PTF</h1>
          {/* Componente InputForm para capturar n */}
          <InputForm onCalculate={handleCalculate} />

          {/* Componente No Visual, Calculation */}
          <Calculation n={n} onResult={handleResult} />

          {/* Componente Result Display */}
          <ResultDisplay result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
