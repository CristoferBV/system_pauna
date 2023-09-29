import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllStudent(req, res);
        case "POST":
            console.log(req.body);
            return await saveLoan(req, res);
    }
}

const getAllStudent = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM `pau-btc-tbl_estudiante`");
    console.log(result);
    return res.status(200).json(result);
};

const getTelefonoId = async (numero) => {
    // Consulta SQL para obtener el ID del teléfono según el número
    const [result] = await pool.query("SELECT TO-idenficador FROM `pau-gnl-tbl_telefono` WHERE TO-numero = ?", [numero]);
    return result[0].TO-idenficador;
};

const getCorreoId = async (correo) => {
    // Consulta SQL para obtener el ID del correo electrónico según la dirección de correo
    const [result] = await pool.query("SELECT CE-idCorreo FROM `pau-btc-tbl_correoelectronico` WHERE CE-correoElectronico = ?", [correo]);
    return result[0].CE-idCorreo;
};

const getCarreraId = async (nombre) => {
    // Consulta SQL para obtener el ID de la carrera según el nombre
    const [result] = await pool.query("SELECT CA_identificador FROM `pau-btc-tbl_carrera` WHERE CA_nombre = ?", [nombre]);
    return result[0].CA_identificador;
};

const getUsuarioId = async (identificador) => {
    // Consulta SQL para obtener el ID del usuario según el identificador
    const [result] = await pool.query("SELECT UO_identificador FROM `pau-gnl_usuario` WHERE UO_identificador = ?", [identificador]);
    return result[0].UO_identificador;
};

const saveLoan = async (req, res) => {
    console.log(req.body);
    const {
        EE_identificador,
        EE_campus,
        EE_nivel,
        EE_identificador_telefono,
        EE_identificador_correo,
        EE_idenficador_carrera,
        EE_identificador_usuario
    } = req.body;

    // Obtener los identificadores correspondientes
    const telefonoId = await getTelefonoId(EE_identificador_telefono);
    const correoId = await getCorreoId(EE_identificador_correo);
    const carreraId = await getCarreraId(EE_idenficador_carrera);
    const usuarioId = await getUsuarioId(EE_identificador_usuario);

    // Construir el objeto para la inserción
    const studentData = {
        EE_identificador,
        EE_campus,
        EE_nivel,
        EE_identificador_telefono: telefonoId,
        EE_identificador_correo: correoId,
        EE_idenficador_carrera: carreraId,
        EE_identificador_usuario: usuarioId
    };

    const result = await pool
        .query("INSERT INTO `pau-btc-tbl_estudiante` SET ?", studentData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return res.status(200).json(result);
};
