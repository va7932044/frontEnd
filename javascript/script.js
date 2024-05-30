document.getElementById('createArrayBtn').addEventListener('click', function() {
    // Crear un arreglo con 10 números aleatorios entre 1 y 100
    let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    console.log("Arreglo inicial:", arr);

    // Calcular la suma de todos los números del arreglo
    let sum = arr.reduce((acc, num) => acc + num, 0);

    // Calcular el promedio de todos los números del arreglo
    let average = sum / arr.length;

    // Encontrar el número máximo y el número mínimo del arreglo
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    // Eliminar el primer y el último elemento del arreglo
    arr.shift();
    arr.pop();

    // Agregar un nuevo elemento al final del arreglo
    arr.push(Math.floor(Math.random() * 100) + 1);

    // Ordenar el arreglo de menor a mayor
    arr.sort((a, b) => a - b);

    // Invertir el orden del arreglo
    arr.reverse();

    // Mostrar el contenido del arreglo en la consola, indicando la posición de cada elemento
    arr.forEach((num, index) => console.log(`Posición ${index + 1}: ${num}`));

    // Mostrar los resultados en HTML
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="result-item">Arreglo inicial: ${arr}</div>
        <div class="result-item">Suma: ${sum}</div>
        <div class="result-item">Promedio: ${average.toFixed(2)}</div>
        <div class="result-item">Máximo: ${max}</div>
        <div class="result-item">Mínimo: ${min}</div>
        <div class="result-item">Arreglo después de eliminar el primer y último elemento, agregar un nuevo número, ordenar y revertir: ${arr}</div>
    `;
});
