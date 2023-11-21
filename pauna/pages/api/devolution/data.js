import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllData(req, res);
        case "DELETE":
            return await deleteData(req, res);
    }
}

const getAllData = async (req, res) => {
    try {
        // Consulta SQL para obtener los datos
        const query = `
        SELECT
          UO.UO_primer_nombre AS PrimerNombreUsuario,
          UO.UO_identificador AS IdentificadorUsuario,
          CA.CA_nombre AS NombreCarrera,
          TP.TP_nombre AS NombreTipo,
          LP.LP_fechaDevolucion AS FechaDevolucion
        FROM
          PAU_GNL_USUARIO UO
          JOIN PAU_BTC_TBL_ESTUDIANTE ES ON UO.UO_identificador = ES.EE_identificador_usuario
          JOIN PAU_BTC_TBL_CARRERA CA ON ES.EE_idenficador_carrera = CA.CA_identificador
          JOIN PAU_BTC_TBL_LISTAPRESTAMO LP ON ES.EE_idenficador = LP.LP_identificador_usuario
          JOIN PAU_BTC_TBL_ACTIVO AO ON LP.LP_identificador_activo = AO.AO_identificador
          JOIN PAU_BTC_TBL_TIPO TP ON AO.AO_identificador_tipo = TP.TP_identificador;
        `;

        // Ejecuta la consulta
        const [result] = await pool.query(query);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteData = async (req, res) => {
    try {
        console.log('Datos recibidos en req.body:', req.body);
        const { UO_identificador } = req.body;

        // Desactivar temporalmente la restricción de clave foránea
        await pool.query('SET foreign_key_checks = 0');

        const deleteRelationQuery = `
            DELETE FROM pau_btc_tbl_listaprestamo_x_tbl_periferico
            WHERE LP_identificador IN (
                SELECT LP.LP_identificador
                FROM pau_btc_tbl_listaprestamo LP
                INNER JOIN pau_btc_tbl_estudiante EE ON LP.LP_identificador_usuario = EE.EE_idenficador
                INNER JOIN pau_gnl_usuario U ON EE.EE_identificador_usuario = U.UO_identificador
                WHERE U.UO_identificador = ?
            );
        `;

        const deleteListaprestamoQuery = `
            DELETE FROM pau_btc_tbl_listaprestamo
            WHERE LP_identificador_usuario IN (
                SELECT LP.LP_identificador_usuario
                FROM pau_btc_tbl_listaprestamo LP
                INNER JOIN pau_btc_tbl_estudiante EE ON LP.LP_identificador_usuario = EE.EE_idenficador
                INNER JOIN pau_gnl_usuario U ON EE.EE_identificador_usuario = U.UO_identificador
                WHERE U.UO_identificador = ?
            );
        `;

        // Ejecuta las consultas de eliminación en transacción
        await pool.query('START TRANSACTION');
        await pool.query(deleteRelationQuery, [UO_identificador]);
        await pool.query(deleteListaprestamoQuery, [UO_identificador]);

        // Activar nuevamente la restricción de clave foránea
        await pool.query('SET foreign_key_checks = 1');

        await pool.query('COMMIT');
        return res.status(200).json({ message: "Datos eliminados con éxito" });
    } catch (error) {
        console.error("Error:", error);
        await pool.query('ROLLBACK');
        await pool.query('SET foreign_key_checks = 1'); // Asegúrate de activar la restricción incluso en caso de error
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

