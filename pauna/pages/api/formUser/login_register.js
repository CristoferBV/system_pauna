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

//Toma los datos del usuario ubicando el correo que se guardó y compara la contraseña que se guardó en la base de datos (se debe desencriptar)
const getUser = async (req, res) => {
    try {
        // Aquí podrías implementar la lógica para obtener usuarios desde la base de datos
        // Por ejemplo, puedes consultar todos los usuarios o un usuario específico y enviar la respuesta
        res.status(200).json({ message: 'Obtener usuarios' });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

//Crea el usuario insertando los datos traidos del lado cliente
const postUser = async (req, res) => {
    console.log(req.body);
    const { UO_identificador,
        UO_primer_nombre,
        UO_segundo_nombre,
        UO_primer_apellido,
        UO_segundo_apellido,
        UO_identificador_rol,
        UO_contrasena } = req.body;

    try {
        // Encripta la contraseña antes de insertarla en la base de datos
        const hashedPassword = await bcrypt.hash(UO_contrasena, 10);

        // Inserta el nuevo usuario en la base de datos utilizando la contraseña encriptada
        const result = await pool.query("INSERT INTO `pau_gnl_usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_rol,
            UO_contrasena: hashedPassword // Guarda la contraseña encriptada
        });

        console.log(result);
        return res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ error: 'Error al registrar usuario' });
    }
};
