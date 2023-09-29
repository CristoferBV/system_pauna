import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllMaterial(req, res);
        case "POST":
            console.log(req.body);
            return await saveUserAdmin(req, res);
    }
}

const getAllMaterial = async (req, res) => {
    const [result] = await pool.query("SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pc.CD_cantidad FROM `pau-adm-tbl_material` pm INNER JOIN `pau-adm-tbl_material-x-tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador INNER JOIN `pau-adm-tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador INNER JOIN `pau-adm-tbl_cantidad` pc ON pc.CD_identificador = pm.ML_identificador_cantidad;");
    console.log(result)
    return res.status(200).json(result);
};