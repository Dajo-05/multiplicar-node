const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    let data = '';

    for (let i = 0; i < limite + 1; i++) {

        let r = base * i;

        data += `${base} X ${i} = ${r}\n`;
    }

    console.log(data);
}


let creaArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('Por favor Digite un numero');
            return;
        }

        let data = '';

        for (let i = 0; i < limite + 1; i++) {

            let r = base * i;

            data += `${base} X ${i} = ${r}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.tx`);


        });
    })
}

module.exports = {
    creaArchivo,
    listarTabla
}