import { pool } from '../../BD/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await postUserGmail(req, res);
    }
}

const postUserGmail = async (req, res) => {

    /* QUEDA HACER VALIDACION CON EL CORREO TAMBIEN PARA QUE NO ME DEJE LOGUEAR SI NO ES EL CORRECTO*/

    /* HACER NUEVA API DE QUE SOLO USE LA CONTRASENNA COMO VALIDACION */

    try {
        const { correo, password } = req.body; // Llegan dos datos: Correo y Contraseña

        console.log("Datos de API:", req.body);
        console.log("constrasenna desde login: ", password)

        const user = await pool.query(`
            SELECT 
                u.UO_identificador,
                u.UO_contrasena,
                u.UO_identificador_rol
            FROM
                pau_gnl_usuario u  
            JOIN
                pau_btc_tbl_estudiante e ON u.UO_identificador = e.EE_identificador_usuario
            JOIN 
                pau_gnl_tbl_correoelectronico c ON e.EE_identificador_correo = c.CE_idCorreo
            WHERE
                c.CE_correoElectronico = ?
        `, [correo]);


        if (user.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        //console.log("Datos user:", user)

        const userData = user[0][0]; // Obtén el primer elemento del primer conjunto de resultados
        const { UO_identificador, UO_contrasena, UO_identificador_rol } = userData;

        console.log("contrasenna: ", UO_contrasena);
        console.log("id rol: ", UO_identificador_rol);
        console.log("id usuario: ", UO_identificador);

        // Desencriptar la contraseña almacenada antes de compararla
        const match = bcrypt.compare(password, UO_contrasena);  //EL PROBLEMA ESTA AQUI YA QUE NO DA TRUE LA RESPUESTA, LO QUE SIGNIFICA QUE ALGUNA CONTRASENNA ES INCORRECTA
                                                                //const match = bcrypt.compare(password, UO_contrasena); 2.0
        if (!match) {
            return res.status(401).json({ error: 'Contraseña incorrecta' }); //ESTA VALIDACION SE CUMPLE POR ENDE ESTA DANDO FALSO match Y NO SE PUEDE AVANZAR
        }

        // Enviar el dato idRol al cliente
        return res.status(200).json({ UO_identificador_rol });

    } catch (error) {
        console.error('Error al autenticar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
