import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllMaterial(req, res);
        case "POST":

        case "PUT":

        case "DELETE":
            await modifyFields(req, res);
            await deleteMaterial(req, res);
            await upToDateFields(req, res);
    }
}

const saveMateiral = async (req, res) => {

}


const getAllMaterial = async (req, res) => {
    const sqlMaterial = "SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pc.CD_cantidad" +
        " FROM `pau_adm_tbl_material` pm" +
        " INNER JOIN `pau_adm_tbl_material_x_tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador" +
        " INNER JOIN `pau_adm-tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador" +
        " INNER JOIN `pau_adm_tbl_cantidad` pc ON pc.CD_identificador = pm.ML_identificador_cantidad;"
    const sqlColor = "SELECT CR_identificador, CR_nombre FROM `pau_adm_tbl_color`;"
    const sqlMarca = "SELECT MC_identificador, MC_nombre FROM `pau_adm_tbl_marca`;"
    const sqlUbicaction = "SELECT UN_identificador, UN_lugar FROM `pau_adm_tbl_ubicacion`;"
    const sqlType = "SELECT TP_identificador, TP_nombre FROM `pau_adm_tbl_tipo`"
    {/*const [materials] = await pool.query(sqlMaterial);*/ }
    const [colors] = await pool.query(sqlColor);
    const [brands] = await pool.query(sqlMarca);
    const [ubications] = await pool.query(sqlUbicaction);
    const [types] = await pool.query(sqlType);
    return res.status(200).json({colors:colors, brands:brands, ubications: ubications, types:types});
};
