import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
        case "PUT":
            return await AddAllActivos(req, res);
    }
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT t.TP_nombre, t.TP_cantidad, a.AO_descripcion, a.AO_estado, p.EA_nombre FROM`pau_btc_tbl_listaprestamo` lp INNER JOIN `pau_btc_tbl_activo` a ON lp.LP_identificador = a.AO_identificador INNER JOIN `pau_btc_tbl_tipo` t ON a.AO_identificador_tipo = t.TP_identificador INNER JOIN `pau_btc_tbl_listaprestamo_x_tbl_periferico`lpxp ON lp.LP_identificador = lpxp.LP_identificador INNER JOIN `pau_btc_tbl_periferico` p ON lpxp.EA_identificador = p.EA_identificador");
    console.log(result)
    return res.status(200).json(result);
};

const AddAllActivos = async (req, res) => {
    const { TP_nombre, TP_cantidad, EA_nombre, AO_descripcion, AO_estado } = req.body;

    // Iniciar una transacción
    await pool.query('START TRANSACTION');

    try {
        // Insertar en la tabla pau_btc_tbl_tipo
        await pool.query('INSERT INTO pau_btc_tbl_tipo (TP_nombre, TP_cantidad) VALUES (?, ?)', [TP_nombre, TP_cantidad]);

        // Obtener el último identificador generado
        const [lastTpResult] = await pool.query('SELECT LAST_INSERT_ID() AS lastId');
        const lastTpIdentificador = lastTpResult[0].lastId;

        // Insertar en la tabla pau_btc_tbl_periferico
        await pool.query('INSERT INTO pau_btc_tbl_periferico (EA_nombre) VALUES (?)', [EA_nombre]);

        // Obtener el último identificador generado
        const [lastEaResult] = await pool.query('SELECT LAST_INSERT_ID() AS lastId');
        const lastEaIdentificador = lastEaResult[0].lastId;

        // Insertar en la tabla pau_btc_tbl_activo
        await pool.query('INSERT INTO pau_btc_tbl_activo (AO_descripcion, AO_estado, AO_identificador_tipo, AO_identificador_periferico) VALUES (?, ?, ?, ?)',
            [AO_descripcion, AO_estado, lastTpIdentificador, lastEaIdentificador]);

        // Hacer commit de la transacción
        await pool.query('COMMIT');

        // Envía una respuesta exitosa
        return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
        // Si ocurre un error, hacer un rollback y devolver un error
        await pool.query('ROLLBACK');
        console.error("Error al insertar datos:", error);
        return res.status(500).json({ error: "Error al insertar datos" });
    }
};


