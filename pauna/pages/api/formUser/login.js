import { pool } from '../../../utils/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await postUserGmail(req, res); // Espera a que se complete la función postUserGmail
            break;
        default:
            res.status(405).end(); // Método no permitido
            break;
    }
}

const postUserGmail = async (req, res) => {
    try {
        const { correo, password } = req.body;

        const user = await pool.query(`
            SELECT 
                u.UO_identificador,
                u.UO_contrasena,
                u.UO_identificador_rol,
                u.UO_identificador_correo
            FROM
                pau_gnl_usuario u  
            JOIN 
                pau_gnl_tbl_correoelectronico c ON u.UO_identificador_correo = c.CE_idCorreo
            WHERE
                c.CE_correoElectronico = ?
        `, [correo]);

        console.log("Resultado de la consulta:", user);

        if (user.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const userData = user[0][0];
        
        if (!userData) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const { UO_contrasena, UO_identificador_rol } = userData;

        console.log("contrasenna login:", password);
        console.log("contrasenna base de datos:", UO_contrasena);

        const match = bcrypt.compare(password, UO_contrasena); // Espera a que se complete la comparación

        if (match) {
            console.log("Contraseña correcta");
            return res.status(200).json({ UO_identificador_rol });
        } else {
            console.log("Error en la contraseña");
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

    } catch (error) {
        console.error('Error al autenticar el usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};
