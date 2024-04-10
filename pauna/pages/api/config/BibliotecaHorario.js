import { pool } from "../../../utils/BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllHorario(req, res);
        case "POST":
            const type = req.body.tipo;
            switch (type) {
                case "Horario":
                    await saveHorarios(req, res);
                    break;
            }
            break;
        case "PUT":
            return await updateHorarios(req, res); 

        case "DELETE":
            return deleteHorarios(req, res);
    }
}

    const deleteHorarios = async(req, res)=>{
        const HO_identificador = req.body.HO_identificador;
        const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
        await pool.query(disableForeignKeyCheckQuery);
        const deleteHorario = "DELETE FROM `pau_btc_tbl_horario` WHERE HO_identificador = ?";
        const result = await pool.query(deleteHorario, [HO_identificador]);
        const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
        await pool.query(enableForeignKeyCheckQuery);
        return res.status(200).json({ Horarios: result});
    }

    const updateHorarios = async (req, res) => {
        try {
            const {HO_identificador, HO_fecha, HO_hora, HO_estado} = req.body;
            const data = {HO_fecha, HO_hora, HO_estado};
            // Realizar la actualización en la base de datos
            const result = await pool.query("UPDATE `pau_btc_tbl_horario` SET ? WHERE HO_identificador = ?", [data, HO_identificador]);
            // Enviar una única respuesta al cliente
            return res.status(200).json(result);
        } catch (error) {
            // Manejar errores y enviar una respuesta de error al cliente
            return res.status(500).json({ error: 'Error en la actualización de activos.' });
        }
    };

const getAllHorario = async (req, res) => {
    const [result] = await pool.query("SELECT h.HO_identificador, h.HO_fecha, h.HO_hora, h.HO_estado FROM `pau_btc_tbl_horario` h");
    // const [dateResult] = await pool.query("SELECT HO_identificador, HO_fecha FROM pau_btc_tbl_horario");
    console.log(result)
    return res.status(200).json(result);
};

const saveData = async (table, data, res) => {
    try {
        console.log(data);
        const result = await pool.query(`INSERT INTO ${table} SET ?`, data);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar los datos.' });
    }
};

const saveHorarios = async (req, res) => {
    console.log(req.body);
    const { HO_fecha, HO_hora, HO_estado } = req.body;
    const data = { HO_fecha, HO_hora, HO_estado }
    console.log(data)

    const result = await saveData('pau_btc_tbl_horario', data, res);
    return  result;
}
