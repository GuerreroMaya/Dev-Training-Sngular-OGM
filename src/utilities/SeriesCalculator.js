class SeriesCalculator {
    // Método para comprobar si un número es primo
    isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
  
    // Método para obtener el n-ésimo primo
    getPrime(n) {
      let count = 0;
      let number = 2;
      while (true) {
        if (this.isPrime(number)) {
          count++;
          if (count === n) {
            return number;
          }
        }
        number++;
      }
    }
  
    // Método para obtener el (n)-ésimo número triangular
    getTriangular(k) {
      // triangular(k) = k * (k + 1) / 2
      return (k * (k + 1)) / 2;
    }
  
    // Método para obtener el (n)-ésimo número de Fibonacci (asumiendo fibonacci(1)=1, fibonacci(2)=1)
    getFibonacci(m) {
      if (m <= 2) return 1;
      let a = 1, b = 1;
      for (let i = 3; i <= m; i++) {
        const c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  
    // Método principal para calcular el término de la serie
    serie(n) {
      // Según la fórmula: (4 * prime(n) - triangular(n-1)) / fibonacci(n+2)
      const primeVal = this.getPrime(n);
      const triangularVal = this.getTriangular(n - 1);
      const fiboVal = this.getFibonacci(n + 2);
  
      const numerator = 4 * primeVal - triangularVal;
      return numerator / fiboVal;
    }
  }
  
  export default SeriesCalculator;
  