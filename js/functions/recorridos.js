const letras = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


export default (size)=>{
    const matriz = [];
    let l = 0;
    let n = 0;
    const filCol = [];

    for(let i = 0; i<size;i++){
        for(let j = 0; j < size; j++){
            if(i==0){
                matriz.push([]);
            }
            if(l>=26){
                l = 0;
                n++;
            }

            matriz[j][i] = letras[l] + n;

        }
        filCol.push(letras[l]+n);

        l++;
    }
    return {matriz,filCol};
}

