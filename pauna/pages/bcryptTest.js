const bcrypt = require('bcryptjs');

async function testBcrypt() {
    // Reemplaza estas líneas con los datos reales que obtienes de la API o de la base de datos
    const passwordFromUserInput = '12345'; // La contraseña que el usuario introduce
    const passwordHashFromDatabase = '$2a$10$A9/N71ha8O5Hs4jjeJ6O8uWT.sBPSn..OuIo19XDdHOXAby6cekbS'; // La contraseña en hash que obtienes de la base de datos

    console.log('Contraseña en texto plano:', passwordFromUserInput);
    console.log('Contraseña en hash:', passwordHashFromDatabase);

    const match = await bcrypt.compare(passwordFromUserInput, passwordHashFromDatabase);
    console.log('Resultado de la comparación:', match);
}

testBcrypt();
