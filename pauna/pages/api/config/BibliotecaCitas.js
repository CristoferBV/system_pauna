import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllCitas(req, res);
        case "POST":
            return await acceptCita(req, res);
        case "DELETE":
            return deleteCitas(req, res);

    }

}

const deleteCitas = async (req, res) => {
    const SD_identificador = req.params.id; // Obtener el identificador de los parámetros de la URL

    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const deleteCita = "DELETE FROM `pau_btc_tbl_solicitud` WHERE SD_identificador = ?";
    const result = await pool.query(deleteCita, [SD_identificador]);

    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);

    return res.status(200).json({ Citas: result });
};


const getAllCitas = async (req, res) => {
    const [result] = await pool.query("SELECT s.SD_identificador, h.HO_fecha, h.HO_hora, u.UO_primer_nombre, u.UO_identificador, c.CA_nombre, t.TP_nombre FROM PAU_BTC_TBL_SOLICITUD s LEFT JOIN PAU_BTC_TBL_ESTUDIANTE e ON s.SD_identificador_usuario = e.EE_idenficador LEFT JOIN PAU_BTC_TBL_CARRERA c ON e.EE_idenficador_carrera = c.CA_identificador LEFT JOIN PAU_BTC_TBL_HORARIO h ON s.SD_identificador_horario = h.HO_identificador LEFT JOIN PAU_BTC_TBL_TIPO t ON s.SD_identificador_tipo = t.TP_identificador LEFT JOIN PAU_GNL_USUARIO u ON e.EE_identificador_usuario = u.UO_identificador");
    console.log(result);
    return res.status(200).json({ Citas: result });
};