export default (matriz,recorridos,filCol)=>{
    const size = matriz.length;

    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            if(i==j)
                continue;
            for(let k = 0; k<size;k++){
                if(k==j)
                    continue;
                
                const suma = matriz[j][i] + matriz[i][k];
                const interseccion = matriz[j][k];
                
                if(suma<interseccion){
                    matriz[j][k] = suma;
                    const letra = filCol[i];
                    recorridos[j][k] = letra;
                }
            }
           
        }
    }
}