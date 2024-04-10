import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllMov(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                   
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

const getAllMov = async (req, res) => {
    const sqlMaterial = "SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pm.ML_cantidad" +
        " FROM `pau_adm_tbl_material` pm" +
        " INNER JOIN `pau_adm_tbl_material_x_tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador" +
        " INNER JOIN `pau_adm_tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador;"
    const sqlMovimientosRebajo = "SELECT r.MO_identificador,r.MO_fecha,r.MO_cantidad,m.ML_descripcion,d.DO_nombre FROM pau_adm_movimiento_rebajo r INNER JOIN pau_adm_tbl_material m on m.ML_identificador = r.ML_identificador"+
     " INNER JOIN pau_gnl_tbl_departamento d on d.DO_identificador = r.DO_identificador;"
     const sqlMovimientosAumento = "SELECT r.MA_identificador,r.MA_fecha,r.MA_cantidad,m.ML_descripcion FROM pau_adm_movimiento_aumetos r INNER JOIN pau_adm_tbl_material m on m.ML_identificador = r.ML_identificador;" 
     const [materials] = await pool.query(sqlMaterial); 
    const [rebajos] = await pool.query(sqlMovimientosRebajo);
    const [aumentos] = await pool.query(sqlMovimientosAumento);
    return res.status(200).json({materials: materials,rebajos: rebajos, aumentos: aumentos});
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
    const { tipo,
        MA_cantidad,
        MA_fecha, 
        ML_identificador}= req.body;
    const data = {MA_cantidad,
        MA_fecha,ML_identificador};
    return saveData('pau_adm_movimiento_aumetos',data,res);
}
