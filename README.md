A continuación, te presento una breve descripción de todo el ejercicio de código que he desarrollado:

1. Fórmula “Serie PTF”: La fórmula combina números primos, números triangulares y Fibonacci para calcular un término serie (𝑛).
Formalmente, se definió como: serie(𝑛)=(4×primo(𝑛) − triangular(𝑛−1)) / fibonacci(𝑛+2).
Donde: primo(𝑛) es el n-ésimo número primo, triangular(n−1) se basa en la fórmula (𝑛−1)𝑛 / 2, fibonacci(𝑛+2) es el número de Fibonacci en la posición n+2.

2. Class SeriesCalculator
Con JavaScript, definí una clase que encapsula todos los métodos para: Calcular primos (isPrime, getPrime), Calcular números triangulares (getTriangular), Calcular Fibonacci (getFibonacci), y finalmente, aplicar la fórmula principal en serie(n). Este objeto se puede instanciar para obtener el resultado de la fórmula con distintos valores de 𝑛.

3. Pruebas con Jest
Se crearon 10 casos de prueba (para 𝑛=1 hasta n=10) que validan el método serie(n) de la clase SeriesCalculator. Se verificó que la función no arroje errores y, en algunos casos, comparamos resultados aproximados (por ejemplo, toBeCloseTo(3.4) para n=3).

4. Tres componentes de React
(1) InputForm (visual): un formulario con Bootstrap que recibe un número n.
(2) Calculation (no visual): utiliza useEffect para llamar al método serie(n) de la clase SeriesCalculator y retorna el resultado mediante una prop onResult.
(3) ResultDisplay (visual): muestra el resultado final en pantalla.
Estos componentes se integran en un componente principal (App.jsx) que maneja el estado global y los conecta entre sí.

En conjunto, este ejercicio demuestra:
- Cómo crear una clase de cálculo que aplique la fórmula basada en primos, triangulares y Fibonacci,
- Cómo implementar tests unitarios con Jest,
- Cómo dividir la lógica y la presentación en React,
- Y finalmente, cómo preparar y desplegar todo usando Node.js y los scripts de npm.

