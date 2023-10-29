import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllMaterial(req, res);
        case "POST":

        case "DELETE":
            await modifyFields(req, res);
            await deleteMaterial(req, res);
            await upToDateFields(req, res); 
    }
}

const addMateiral = async (req, res)=>{

}

const deleteMaterial = async (req, res) => {
    const { ML_identificador, ML_descripcion, ML_observacion, MC_nombre, CD_cantidad, ML_identificador_cantidad, ML_identificador_ubicacion, CD_identificador_unidad} = req.body.material;
    console.log(ML_identificador);
    await pool.query("DELETE FROM `pau_adm-tbl_unidad` WHERE `UD_identificador` = " + CD_identificador_unidad);
    await pool.query("DELETE FROM `pau-adm-tbl_material-x-tbl_marca` WHERE `ML_identificador` = " + ML_identificador);
    await pool.query("DELETE FROM `pau_adm-tbl_unidad` WHERE `UD_identificador` = " + CD_identificador_unidad);
    await pool.query("DELETE FROM `pau_adm-tbl_cantidad` WHERE `CD_identificador` = " + ML_identificador_cantidad);
    await pool.query("DELETE FROM `pau-adm-tbl_material` WHERE `ML_identificador` = " + ML_identificador);
    return res.status(200).json("Exito")
}

const getAllMaterial = async (req, res) => {
    const sql = "SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pc.CD_cantidad"+
    "FROM `pau_adm_tbl_material` pm"+ 
    "INNER JOIN `pau_adm_tbl_material_x_tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador"+ 
    "INNER JOIN `pau_adm-tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador"+ 
    "INNER JOIN `pau_adm_tbl_cantidad` pc ON pc.CD_identificador = pm.ML_identificador_cantidad;"
    const [result] = await pool.query("SELECT pm.ML_identificador, pm.ML_descripcion, pm.ML_observacion, pma.MC_nombre, pc.CD_cantidad, pm.ML_identificador_cantidad, pc.CD_identificador_unidad FROM `pau-adm-tbl_material` pm INNER JOIN `pau-adm-tbl_material-x-tbl_marca` pmxma ON pm.ML_identificador = pmxma.ML_identificador INNER JOIN `pau-adm-tbl_marca` pma ON pmxma.MC_identificador = pma.MC_identificador INNER JOIN `pau-adm-tbl_cantidad` pc ON pc.CD_identificador = pm.ML_identificador_cantidad;");
    console.log(result)
    return res.status(200).json(result);
};

const modifyFields = async (req, res) => {
    await pool.query("ALTER TABLE `pau-adm-tbl_material` DROP FOREIGN KEY Relationship36;");
    await pool.query("ALTER TABLE `pau-adm-tbl_material` DROP FOREIGN KEY Relationship35;");
    await pool.query("ALTER TABLE `pau-adm-tbl_material-x-tbl_marca` DROP FOREIGN KEY Relationship28;");
    await pool.query("ALTER TABLE `pau-adm-tbl_material-x-tbl_marca` DROP FOREIGN KEY Relationship29;");
    await pool.query("ALTER TABLE `pau-adm-tbl_cantidad` DROP FOREIGN KEY Relationship25;");
    await pool.query("ALTER TABLE `pau-adm-tbl_cantidad` DROP FOREIGN KEY Relationship26;");
    return res.status(200).json("Update fields")
}

const upToDateFields = async (req, res) => {
    await pool.query("ALTER TABLE `pau-adm-tbl_material` ADD CONSTRAINT Relationship36 FOREIGN KEY (`ML_identificador_cantidad`) REFERENCES `pau-adm-tbl_cantidad`(CD_identificador);");
    await pool.query("ALTER TABLE `pau-adm-tbl_material` ADD CONSTRAINT Relationship35 FOREIGN KEY (`ML_identificador_ubicacion`) REFERENCES `pau-adm-tbl_ubicacion`(UN_identificador);");
    await pool.query("ALTER TABLE `pau-adm-tbl_material-x-tbl_marca` ADD CONSTRAINT Relationship28 FOREIGN KEY (`ML_identificador`) REFERENCES `pau-adm-tbl_material`(ML_identificador);");
    await pool.query("ALTER TABLE `pau-adm-tbl_material-x-tbl_marca`ADD CONSTRAINT Relationship29 FOREIGN KEY (`MC_identificador`) REFERENCES `pau-adm-tbl_marca`(MC_identificador);");
    await pool.query("ALTER TABLE `pau-adm-tbl_cantidad` ADD CONSTRAINT Relationship25 FOREIGN KEY (`CD_identificador_unidad`) REFERENCES `pau_adm-tbl_unidad`(UD_identificador);");
    await pool.query("ALTER TABLE `pau-adm-tbl_cantidad` ADD CONSTRAINT Relationship26 FOREIGN KEY (`CD_identificador_unidad`) REFERENCES `pau_adm-tbl_unidad`(UD_identificador);");
    return res.status(200).json("Update fields")
}