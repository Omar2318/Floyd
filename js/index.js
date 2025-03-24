import recorridos from "./functions/recorridos.js";
import algoritmo from './functions/index.js';
const inf = Infinity;

document.addEventListener("DOMContentLoaded", () => {
    const inputDim = document.getElementById("dimension");
    const btnGenerar = document.getElementById("generar");
    const btnResolver = document.getElementById("resolver");
    const tableContainer = document.getElementById("table-container");
    const resultadoContainer = document.getElementById("resultado-container");
    
    btnGenerar.addEventListener("click", () => {
        const dimension = parseInt(inputDim.value);
        if (isNaN(dimension) || dimension <= 0) {
            alert("Ingrese una dimensión válida");
            return;
        }
        
        // Limpiar contenido previo
        tableContainer.innerHTML = "";
        resultadoContainer.innerHTML = "";
        
        const table = document.createElement("table");
        table.border = "1";
        
        for (let i = 0; i < dimension; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < dimension; j++) {
                const cell = document.createElement("td");
                const input = document.createElement("input");
                input.type = "text";
                input.value = 0;
                cell.appendChild(input);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        
        tableContainer.appendChild(table);
        btnResolver.style.display = "block";
    });
    
    btnResolver.addEventListener("click", () => {
        const table = tableContainer.querySelector("table");
        if (!table) return;
    
        const matrix = [];
        for (let row of table.rows) {
            const rowData = [];
            for (let cell of row.cells) {
                const value = cell.firstChild.value;
                rowData.push(isNaN(value) ? inf : parseInt(value));
            }
            matrix.push(rowData);
        }
    
        console.log("Matriz ingresada:", matrix);
    
        const matrizDistancias = matrix;
        const size = matrizDistancias.length;
    
        const { matriz, filCol } = recorridos(size);
        algoritmo(matrizDistancias, matriz, filCol);
    
        console.log("Matriz de Distancias:", matriz);
        console.log("Matriz de Caminos:", filCol);
    
        const generarTabla = (titulo, matriz) => {
            return `
                <h3>${titulo}</h3>
                <table border="1">
                    <tr>
                        <th></th>
                        ${filCol.map(col => `<th>${col}</th>`).join("")}
                    </tr>
                    ${matriz.map((row, i) => `
                        <tr>
                            <th>${filCol[i]}</th>
                            ${row.map(cell => `<td>${cell}</td>`).join("")}
                        </tr>
                    `).join("")}
                </table>
            `;
        };
    
        resultadoContainer.innerHTML = `
            ${generarTabla("Matriz de Distancias", matrizDistancias)}
            ${generarTabla("Matriz de Recorridos", matriz)}
        `;
    });
    
});
