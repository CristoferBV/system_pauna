import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllHorario(req, res);
        case "POST":
            return await saveHorarios(req, res);
    }
}

const getAllHorario = async (req, res) => {
    const [result] = await pool.query("SELECT h.HO_fecha, h.HO_hora, h.HO_estado FROM `pau-btc-tbl_horario` h");
    console.log(result)
    return res.status(200).json(result);
};

const saveHorarios = async (req, res) => {
    console.log(req.body);
    const { HO_identificador,
        HO_fecha,
        HO_hora,
        HO_estado} = req.body;

    const result = await pool
        .query("INSERT INTO `pau-tbl-horario` SET ?", {
            HO_identificador,
            HO_fecha,
            HO_hora,
            HO_estado,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return res.status(200).json(result);
};