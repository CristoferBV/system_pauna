import { pool } from '../../../utils/Storage';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            return await postUser(req, res);
    }
}

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
        gmail,
        carrera,
        campus,
        nivelCarrera, 
    } = req.body;

    try {

        // Inserta el correo electrónico en la tabla pau_gnl_tbl_correoelectronico
        await pool.query("INSERT INTO `pau_gnl_tbl_correoelectronico` SET ?", {
            CE_correoElectronico: gmail,
            CE_descripcion: "Correo de estudiante"
        });

        // Obtén el ID del correo electrónico recién insertado
        const correoResult = await pool.query("SELECT LAST_INSERT_ID() as id");
        const correoId = correoResult[0][0].id;

        // Encripta la contraseña antes de insertarla en la base de datos
        const hashedPassword = await bcrypt.hash(UO_contrasena, 5);

        // Inserta el nuevo usuario en la tabla pau_gnl_usuario utilizando la contraseña encriptada
        await pool.query("INSERT INTO `pau_gnl_usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_correo: correoId, //nuevo
            UO_identificador_rol,
            UO_contrasena: hashedPassword // Guarda la contraseña encriptada
        });

        // Obtén el ID del usuario recién insertado (es el mismo que UO_identificador)
        const usuarioId = UO_identificador;
        
        // Inserta el número de teléfono en la tabla pau_gnl_tbl_telefono
        await pool.query("INSERT INTO `pau_gnl_tbl_telefono` SET ?", {
            TO_numero: phoneNumber,
            TO_descripcion: "Numero de estudiante"
        });

        // Obtén el ID del teléfono recién insertado
        const telefonoResult = await pool.query("SELECT LAST_INSERT_ID() as id");
        const telefonoId = telefonoResult[0][0].id;

        //Insertar todos los datos de estudiante
        await pool.query("INSERT INTO `pau_btc_tbl_estudiante` SET ?", {
            EE_campus: campus,
            EE_nivel: nivelCarrera,
            EE_identifacador_telefono: telefonoId,
            EE_idenficador_carrera: carrera,
            EE_identificador_usuario: usuarioId
        })

        return res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ error: 'Error al registrar usuario' });
    }
};