// En client.js
import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "POST":
            return await saveClientData(req, res);
    }
}

const saveClientData = async (req, res) => {
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

    const result = await pool
        .query("INSERT INTO `pau-btc-tbl_estudiante` SET ?", {
            EE_identificador: "118080475",
            EE_campus: "Campus Coto",
            EE_nivel: "Nivel III",
            EE_identificador_telefono: "T1",
            EE_identificador_correo: "C1",
            EE_idenficador_carrera: "C1",
            EE_identificador_usuario: "1"
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return res.status(200).json(result);
};
