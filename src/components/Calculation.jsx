import { useEffect } from 'react';
import SeriesCalculator from '../utilities/SeriesCalculator';

function Calculation({ n, onResult }) {
  useEffect(() => {
    if (typeof n === 'number' && n > 0) {
      const calculator = new SeriesCalculator();
      const value = calculator.serie(n);
      onResult(value);
    }
  }, [n, onResult]);

  return null; 
}

export default Calculation;
