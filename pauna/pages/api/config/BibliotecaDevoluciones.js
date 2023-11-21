import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllDevoluciones(req, res);
    }
}

const getAllDevoluciones = async (req, res) => {
    const [result] = await pool.query("SELECT UO.UO_primer_nombre AS PrimerNombreUsuario, UO.UO_identificador AS IdentificadorUsuario, CA.CA_nombre AS NombreCarrera, TP.TP_nombre AS NombreTipo, LP.LP_fechaDevolucion AS FechaDevolucion FROM PAU_GNL_USUARIO UO JOIN PAU_BTC_TBL_ESTUDIANTE ES ON UO.UO_identificador = ES.EE_identificador_usuario JOIN PAU_BTC_TBL_CARRERA CA ON ES.EE_idenficador_carrera = CA.CA_identificador JOIN PAU_BTC_TBL_LISTAPRESTAMO LP ON ES.EE_idenficador = LP.LP_identificador_usuario JOIN PAU_BTC_TBL_ACTIVO AO ON LP.LP_identificador_activo = AO.AO_identificador JOIN PAU_BTC_TBL_TIPO TP ON AO.AO_identificador_tipo = TP.TP_identificador");
    console.log(result)
    return res.status(200).json({ Devoluciones: result });
};
