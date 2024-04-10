import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getAllMaterial(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Color":
                    return await saveColor(req, res);
                case "Brand":
                    return await saveBrand(req, res);
                case "Ubication":
                    return await saveUbication(req, res);
                case "Type":
                    return await saveType(req, res);
                case "Material":
                    const returnData = await saveMaterial(req, res);
                        await saveMaterialXBrand(req, res);
                        await saveMaterialXColor(req, res);
                    break;
                case "Rebajo":
                    return await saveRebajo(req, res);
                case "Aumentos":
                    return await saveAumentos(req, res);
            }
        case "PUT":
            return await updateMaterial(req, res);

        case "DELETE":
            return deleteMaterial(req, res);
    }
}

const updateMaterial = async (req, res) => {
    const { ML_identificador, ML_cantidad } = req.body;
    console.log("ML_cantidad:", ML_identificador);
    console.log("ML_cantidad:", ML_cantidad);
    const result = await pool.query(
      "UPDATE `pau_adm_tbl_material` SET ML_cantidad = ML_cantidad + ? WHERE ML_identificador = ?",
      [ML_cantidad, ML_identificador]
    );
    return res.status(200).json(result);
  };

const deleteMaterial = async (req, res) => {
    const ML_identificador = req.body.ML_identificador;

    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const deleteMaterialXBrandQuery = "DELETE FROM `pau_adm_tbl_material_x_tbl_marca` WHERE ML_identificador = ?";
    const resultBrand = await pool.query(deleteMaterialXBrandQuery, [ML_identificador]);

    const deleteMaterialXColorQuery = "DELETE FROM `pau_adm_tbl_material_x_tbl_color` WHERE ML_identificador = ?";
    const resultColor = await pool.query(deleteMaterialXColorQuery, [ML_identificador]);

    const deleteMaterialQuery = "DELETE FROM `pau_adm_tbl_material` WHERE ML_identificador = ?";
    const result = await pool.query(deleteMaterialQuery, [ML_identificador]);
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);

    return res.status(200).json({ resultBrand, resultColor, result });
}

const getAllMaterial = async (req, res) => {
    const sqlMaterial = "SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pm.ML_cantidad, pu.UN_lugar, pt.TP_nombre" +
        " FROM `pau_adm_tbl_material` pm" +
        " INNER JOIN `pau_adm_tbl_material_x_tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador" +
        " INNER JOIN `pau_adm_tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador"+
        " INNER JOIN `pau_adm_tbl_ubicacion` pu ON pu.UN_identificador = pm.ML_identificador_ubicacion"+
        " INNER JOIN `pau_adm_tbl_tipo` pt ON pt.TP_identificador = pm.MO_identificador_tipo;"
    const sqlColor = "SELECT CR_identificador, CR_nombre FROM `pau_adm_tbl_color`;"
    const sqlMarca = "SELECT MC_identificador, MC_nombre FROM `pau_adm_tbl_marca`;"
    const sqlUbicaction = "SELECT UN_identificador, UN_lugar FROM `pau_adm_tbl_ubicacion`;"
    const sqlType = "SELECT TP_identificador, TP_nombre FROM `pau_adm_tbl_tipo`"
    const sqlDepartment = "SELECT DO_identificador, DO_nombre FROM `pau_gnl_tbl_departamento`;"
    const [materials] = await pool.query(sqlMaterial);
    const [colors] = await pool.query(sqlColor);
    const [brands] = await pool.query(sqlMarca);
    const [ubications] = await pool.query(sqlUbicaction);
    const [types] = await pool.query(sqlType);
    const [deparments] = await pool.query(sqlDepartment);
    return res.status(200).json({ materials: materials, colors: colors, brands: brands, ubications: ubications, types: types, deparments: deparments });
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

const saveMaterial = async (req, res) => {
    console.log(req.body);
    const { ML_identificador, ML_descripcion, ML_observacion, ML_cantidad, ML_identificador_ubicacion, MO_identificador_tipo } = req.body;
    const data = { ML_identificador, ML_descripcion, ML_observacion, ML_cantidad, ML_identificador_ubicacion, MO_identificador_tipo }
    console.log(data)
    const { result } = saveData('pau_adm_tbl_material', data, res);
    return result;
};

const saveMaterialXBrand = async (req, res) => {
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    console.log(req.body);
    const { ML_identificador, MC_identificador } = req.body;
    const data = { ML_identificador, MC_identificador }
    const { result } = saveData('pau_adm_tbl_material_x_tbl_marca', data, res);
    console.log(result)
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
};

const saveMaterialXColor = async (req, res) => {
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);
    console.log(req.body);
    const { ML_identificador, CR_identificador } = req.body;
    const data = { ML_identificador, CR_identificador }
    const { result } = saveData('pau_adm_tbl_material_x_tbl_color', data, res);
    console.log(result)
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
};

const saveColor = async (req, res) => {
    console.log(req.body);
    const { tipo, CR_identificador, CR_nombre } = req.body;
    console.log(CR_nombre)
    const data = { CR_nombre }
    console.log(data)
    return saveData('pau_adm_tbl_color', data, res);
};

const saveUbication = async (req, res) => {
    console.log(req.body);
    const { tipo, UN_lugar, UN_descripcion } = req.body;
    const data = { UN_lugar, UN_descripcion }

    return saveData('pau_adm_tbl_ubicacion', data, res);
};

const saveBrand = async (req, res) => {
    console.log(req.body);
    const { tipo, MC_nombre, MC_descripcion } = req.body;
    const data = { MC_nombre, MC_descripcion }

    return saveData('pau_adm_tbl_marca', data, res);
};

const saveType = async (req, res) => {
    console.log(req.body);
    const { tipo, TP_nombre, TP_descripcion } = req.body;
    const data = { TP_nombre, TP_descripcion }

    return saveData('pau_adm_tbl_tipo', data, res);
};

const saveRebajo = async (req, res) => {
    console.log(req.body);
    const { tipo,
        MO_cantidad,
        MO_fecha,
        ML_identificador,
        DO_identificador }= req.body;
    const data = {MO_cantidad,
        MO_fecha,
        ML_identificador,
        DO_identificador};
    return saveData('pau_adm_movimiento_rebajo',data,res);
}
const saveAumentos = async (req, res) => {
    console.log(req.body.ML_identificador);
    console.log(req.body.MA_cantidad);
    const { tipo,
        MA_cantidad,
        MA_fecha, 
        ML_identificador}= req.body;
    const data = {MA_cantidad,
        MA_fecha,ML_identificador};
    return saveData('pau_adm_movimiento_aumetos',data,res);
}
