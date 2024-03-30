import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPrestamos(req, res);
        case "POST":
            return await createPrestamo(req, res);
        case "PUT":
            return await updatePrestamos(req, res);
        case "DELETE":
            return await deletePrestamos(req, res);
        default:
            return res.status(405).end(); // Método no permitido
    }
}

const createPrestamo = async (req, res) => {
    try {
        // Imprimir todos los nombres de los campos recibidos en la solicitud
        console.log("Nombres de los campos recibidos:", Object.keys(req.body));

        const { LP_identificador_usuario, LP_fechaDevolucion, EA_identificador, LP_identificador } = req.body;
        
        // Verificar si se reciben todos los datos necesarios
        if (!LP_identificador_usuario || !LP_fechaDevolucion || !EA_identificador) {
            console.log("Faltan datos en la solicitud.");
            return res.status(400).json({ error: 'Faltan datos en la solicitud.' });
        }

        // Verificar si el usuario existe
        console.log("Consulta SQL para verificar usuario:", "SELECT UO_identificador FROM pau_gnl_usuario WHERE UO_identificador = ?", LP_identificador_usuario);
        const [UsuarioResult] = await pool.query("SELECT UO_identificador FROM pau_gnl_usuario WHERE UO_identificador = ?", [LP_identificador_usuario]);
        if (UsuarioResult.length === 0) {
            console.log("Usuario no encontrado:", LP_identificador_usuario);
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        // Obtener el identificador del estudiante asociado al usuario
        console.log("Consulta SQL para obtener identificador de estudiante:", "SELECT EE_idenficador FROM pau_btc_tbl_estudiante WHERE EE_identificador_usuario = ?", LP_identificador_usuario);
        const [EstudianteResult] = await pool.query("SELECT EE_idenficador FROM pau_btc_tbl_estudiante WHERE EE_identificador_usuario = ?", [LP_identificador_usuario]);
        const EE_idenficador = EstudianteResult[0].EE_idenficador;

        // Insertar el préstamo en la tabla pau_btc_tbl_listaprestamo
        console.log("Consulta SQL para insertar préstamo:", "INSERT INTO pau_btc_tbl_listaprestamo (LP_fechaDevolucion, LP_identificador_activo, LP_identificador_usuario) VALUES (?, ?, ?)", [LP_fechaDevolucion, EA_identificador, EE_idenficador]);
        const result = await pool.query("INSERT INTO pau_btc_tbl_listaprestamo (LP_fechaDevolucion, LP_identificador_activo, LP_identificador_usuario) VALUES (?, ?, ?)", [LP_fechaDevolucion, LP_identificador, EE_idenficador]);

        console.log("Resultado de la inserción en la tabla pau_btc_tbl_listaprestamo:", result);

        if (!result.affectedRows) {
            throw new Error("Error al insertar el préstamo en la base de datos.");
        }

        // Obtener el ID del préstamo insertado
        console.log("Consulta SQL para obtener el ID del préstamo insertado:", "SELECT LAST_INSERT_ID() as insertId");
        const [insertIdResult] = await pool.query("SELECT LAST_INSERT_ID() as insertId");
        if (!insertIdResult || !insertIdResult.length || !insertIdResult[0].insertId) {
            throw new Error("Error al obtener el ID del préstamo insertado.");
        }
        const LP_identificador_insertado = insertIdResult[0].insertId;

        // Insertar la relación entre el préstamo y el periférico en la tabla pau_btc_tbl_listaprestamo_x_periferico
        console.log("Consulta SQL para insertar relación préstamo-periférico:", "INSERT INTO pau_btc_tbl_listaprestamo_x_periferico (LP_identificador, EA_identificador) VALUES (?, ?)", [LP_identificador_insertado, EA_identificador]);
        const relationInsertResult = await pool.query("INSERT INTO pau_btc_tbl_listaprestamo_x_tbl_periferico (LP_identificador, EA_identificador) VALUES (?, ?)", [LP_identificador_insertado, EA_identificador]);
        console.log("Resultado de la inserción en la tabla pau_btc_tbl_listaprestamo_x_periferico:", relationInsertResult);

        console.log("Datos de préstamo insertados correctamente.");
        return res.status(200).json({ message: 'Datos de préstamo insertados correctamente.' });
    } catch (error) {
        console.log("Error al insertar datos de préstamo:", error);
        return res.status(500).json({ error: 'Error al insertar datos de préstamo.' });
    }
};


const getAllPrestamos = async (req, res) => {
    try {
        const [PrestamoResult] = await pool.query("SELECT LP_identificador, LP_fechaDevolucion, LP_identificador_activo, LP_identificador_usuario FROM pau_btc_tbl_listaprestamo");
        const [DispositivoResult] = await pool.query("SELECT A.AO_identificador, A.AO_descripcion, A.AO_estado, T.TP_nombre, T.TP_descripcion FROM pau_btc_tbl_activo A INNER JOIN pau_btc_tbl_tipo T ON A.AO_identificador_tipo = T.TP_identificador");
        const [PerifericoResult] = await pool.query("SELECT EA_identificador, EA_nombre, EA_descripcion FROM pau_btc_tbl_periferico");
        console.log(PrestamoResult);
        console.log(PerifericoResult);
        console.log(DispositivoResult);
        return res.status(200).json({ Prestamo: PrestamoResult, Dispositivo: DispositivoResult, Periferico: PerifericoResult });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error en la obtención de préstamos.' });
    }
};

const updatePrestamos = async (req, res) => {
    // Implementa la lógica para actualizar préstamos si es necesario
};
