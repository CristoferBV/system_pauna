import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllMaterial(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Color":
                    return await saveColor(req, res)
                case "Brand":
                    return await saveBrand(req, res)
                case "Ubication":
                    return await saveUbication(req, res)

                case "Type":
                    return await saveType(req, res)
                case "Material":
                    await saveMaterial(req, res)
                    await saveMaterialXBrand(req, res)
                    await saveMaterialXColor(req, res)
                    break
            }
        case "PUT":

        case "DELETE":
    }
}



const getAllMaterial = async (req, res) => {
    const sqlMaterial = "SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pm.ML_cantidad" +
        " FROM `pau_adm_tbl_material` pm" +
        " INNER JOIN `pau_adm_tbl_material_x_tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador" +
        " INNER JOIN `pau_adm_tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador;"
    const sqlColor = "SELECT CR_identificador, CR_nombre FROM `pau_adm_tbl_color`;"
    const sqlMarca = "SELECT MC_identificador, MC_nombre FROM `pau_adm_tbl_marca`;"
    const sqlUbicaction = "SELECT UN_identificador, UN_lugar FROM `pau_adm_tbl_ubicacion`;"
    const sqlType = "SELECT TP_identificador, TP_nombre FROM `pau_adm_tbl_tipo`"
    const [materials] = await pool.query(sqlMaterial);
    const [colors] = await pool.query(sqlColor);
    const [brands] = await pool.query(sqlMarca);
    const [ubications] = await pool.query(sqlUbicaction);
    const [types] = await pool.query(sqlType);
    return res.status(200).json({ materials: materials, colors: colors, brands: brands, ubications: ubications, types: types });
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
