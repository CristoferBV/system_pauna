import { pool } from '../../BD/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await postUserGmail(req, res);
    }
}

 const postUserGmail = async (req, res) => {
    try {
        const {userGmail, userPassword} = req.body //Llegan dos datos Correo y Contrasenna

        console.log("Datos de API:" , req.body)

        try {

            const cedula = await pool.query(`
                SELECT 
                    u.UO_identificador
                FROM
                    pau_gnl_usuario u  
                JOIN
                    pau_btc_tbl_estudiante e ON u.UO_identificador = e.EE_identificador_usuario
                JOIN 
                    pau_gnl_tbl_correoelectronico c ON e.EE_identificador_correo = c.CE_idCorreo
                WHERE
                    c.CE_correoElectronico = ?
            `, [userGmail])

            const correo = await pool.query(
                `SELECT 
                    c.CE_correoElectronico
                FROM
                    pau_gnl_usuario u  
                JOIN
                    pau_btc_tbl_estudiante e ON u.UO_identificador = e.EE_identificador_usuario
                JOIN 
                    pau_gnl_tbl_correoelectronico c ON e.EE_identificador_correo = c.CE_idCorreo
                WHERE
                    c.CE_correoElectronico = ?
            `, [userGmail]);

            const contrasenna = await pool.query( `
                SELECT 
                    u.UO_contrasena
                FROM
                    pau_gnl_usuario u  
                JOIN
                    pau_btc_tbl_estudiante e ON u.UO_identificador = e.EE_identificador_usuario
                JOIN 
                    pau_gnl_tbl_correoelectronico c ON e.EE_identificador_correo = c.CE_idCorreo
                WHERE
                    c.CE_correoElectronico = ?
            `, [userGmail]);

            if (userPassword === contrasenna && userGmail === correo) {
                const idRolResult = await pool.query(`
                    SELECT 
                        u.UO_identificador_rol
                    FROM
                        pau_gnl_usuario u  
                    JOIN
                        pau_btc_tbl_estudiante e ON u.UO_identificador = e.EE_identificador_usuario
                    JOIN 
                        pau_gnl_tbl_correoelectronico c ON e.EE_identificador_correo = c.CE_idCorreo
                    WHERE
                        u.UO_identificador = ?
                `, [cedula]);
            
                const idRol = idRolResult[0].UO_identificador_rol; // Obtiene el valor de idRol del resultado
            
                // Enviar el dato idRol al cliente
                return res.status(200).json({ message: 'Obtener id del correo', idRol });
            }
            
        } catch (error) {
            console.error('Error al encontrar correo:', error);
            return res.status(500).json({ error: 'Error al encontrar correo' });
        }

        // Implementa la lógica para obtener el dato del id de correp desde la base de datos aquí
        res.status(200).json({ message: 'Obtener id del correo' });
    } catch (error) {
        console.error('Error al obtener el id del correo:', error);
        res.status(500).json({ error: 'Error al obtener el id del correo' });
    }
};