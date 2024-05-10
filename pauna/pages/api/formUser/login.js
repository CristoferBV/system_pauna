import { pool } from '../../../utils/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await postUserIdRol(req, res);
            break;
        default:
            res.status(405).end();
            break;
    }
}

const postUserIdRol = async (req, res) => {
    try {
        const { correo, password, cedula} = req.body;

        const user = await pool.query(` SELECT u.UO_contrasena, u.UO_identificador_rol, u.UO_identificador_correo FROM pau_gnl_usuario u JOIN pau_gnl_tbl_correoelectronico c ON u.UO_identificador_correo = c.CE_idCorreo WHERE u.UO_identificador = ? AND c.CE_correoElectronico = ?`, [cedula, correo]);

        if (user.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const userData = user[0][0];
        
        if (!userData) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const { UO_contrasena, UO_identificador_rol, UO_identificador_correo } = userData;

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const match = await bcrypt.compare(password, UO_contrasena);

        if (!match) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        return res.status(200).json({ UO_identificador_rol });

    } catch (error) {
        console.error('Error al autenticar el usuario:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};
