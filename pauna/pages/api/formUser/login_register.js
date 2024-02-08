import { pool } from '../../BD/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getUser(req, res);
        case "POST":
            return await postUser(req, res);
    }
}

const getUser = async (req, res) => {
    try {
        // Implementa la lógica para obtener usuarios desde la base de datos aquí
        res.status(200).json({ message: 'Obtener usuarios' });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

const postUser = async (req, res) => {
    console.log(req.body);
    const { UO_identificador,
        UO_primer_nombre,
        UO_segundo_nombre,
        UO_primer_apellido,
        UO_segundo_apellido,
        UO_identificador_rol,
        UO_contrasena,
        phoneNumber,
        gmail } = req.body;

    try {
        // Encripta la contraseña antes de insertarla en la base de datos
        const hashedPassword = await bcrypt.hash(UO_contrasena, 10);

        // Inserta el nuevo usuario en la tabla pau_gnl_usuario utilizando la contraseña encriptada
        await pool.query("INSERT INTO `pau_gnl_usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_rol,
            UO_contrasena: hashedPassword // Guarda la contraseña encriptada
        });

        // Inserta el número de teléfono en la tabla pau_gnl_tbl_telefono
        await pool.query("INSERT INTO `pau_gnl_tbl_telefono` SET ?", {
            TO_numero: phoneNumber,
            TO_descripcion: "Numero de estudiante"
        });

        // Inserta el correo electrónico en la tabla pau_gnl_tbl_correoelectronico
        await pool.query("INSERT INTO `pau_gnl_tbl_correoelectronico` SET ?", {
            CE_correoElectronico: gmail,
            CE_descripcion: "Correo de estudiante"
        });

        return res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ error: 'Error al registrar usuario' });
    }
};
