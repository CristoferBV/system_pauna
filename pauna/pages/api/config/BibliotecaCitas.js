import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllCitas(req, res);
        case "PUT":
            return await updateCita(req, res);
        case "DELETE":
            return await deleteCitas(req, res);
        default:
            return res.status(405).end(); // Método no permitido
    }
}

const deleteCitas = async (req, res) => {
    const { SD_identificador } = req.body; // Obtener el identificador de la cita desde el cuerpo de la solicitud

    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    const deleteCita = "DELETE FROM `pau_btc_tbl_solicitud` WHERE SD_identificador = ?";
    const result = await pool.query(deleteCita, [SD_identificador]);
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
    return res.status(200).json({ Citas: result });
};


const getAllCitas = async (req, res) => {
    try {
        const [citasResult] = await pool.query("SELECT s.SD_identificador, h.HO_fecha, h.HO_hora, u.UO_primer_nombre, u.UO_identificador, c.CA_nombre, t.TP_nombre FROM PAU_BTC_TBL_SOLICITUD s LEFT JOIN PAU_BTC_TBL_ESTUDIANTE e ON s.SD_identificador_usuario = e.EE_idenficador LEFT JOIN PAU_BTC_TBL_CARRERA c ON e.EE_idenficador_carrera = c.CA_identificador LEFT JOIN PAU_BTC_TBL_HORARIO h ON s.SD_identificador_horario = h.HO_identificador LEFT JOIN PAU_BTC_TBL_TIPO t ON s.SD_identificador_tipo = t.TP_identificador LEFT JOIN PAU_GNL_USUARIO u ON e.EE_identificador_usuario = u.UO_identificador");
        const [horarioResult] = await pool.query("SELECT HO_identificador, HO_fecha, HO_hora FROM pau_btc_tbl_horario");
        const [DispositivoResult] = await pool.query("SELECT TP_identificador, TP_nombre FROM pau_btc_tbl_tipo");
        console.log(citasResult);
        console.log(horarioResult);
        return res.status(200).json({ Citas: citasResult, Horario: horarioResult, Dispositivo: DispositivoResult });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error en la obtención de citas.' });
    }
};


const updateCita = async (req, res) => {
    try {
        const { SD_identificador, SD_identificador_horario, SD_identificador_tipo  } = req.body;
        const data = { SD_identificador_horario, SD_identificador_tipo };
        // Realizar la actualización en la base de datos
        const result = await pool.query("UPDATE `pau_btc_tbl_solicitud` SET ? WHERE SD_identificador = ?", [data, SD_identificador]);
        // Enviar una única respuesta al cliente
        return res.status(200).json(result);
    } catch (error) {
        // Manejar errores y enviar una respuesta de error al cliente
        return res.status(500).json({ error: 'Error en la actualización de activos.' });
    }
};
