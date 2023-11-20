import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllActivos(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Activo":
                    await saveActivo(req, res);
                case "Tipo":
                    await saveType(req, res);
                    break
            }
        // case "PUT":
        //     return await updateActivos(req, res);

        case "DELETE":
            return deleteActivos(req, res);
        }
}

// const updateActivos = async (req, res) => {
//     const {AO_identificador, AO_descripcion, AO_estado}= req.body;
//     const data= {AO_descripcion, AO_estado}
//     const result = await pool.query("UPDATE `pau_btc_tbl_activo` SET ? WHERE AO_identificador = ?",
//         [data, AO_identificador]
//     )
//     return res.status(200).json(result)
// };

const deleteActivos = async(req, res)=>{
    const AO_identificador = req.body.AO_identificador;

    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const deleteActivo = "DELETE FROM `pau_btc_tbl_activo` WHERE AO_identificador = ?";
    const result = await pool.query(deleteActivo, [AO_identificador]);

    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);

    return res.status(200).json({ Dispositivos: result});
}

const getAllActivos = async (req, res) => {
    const [result] = await pool.query("SELECT a.AO_identificador, t.TP_nombre, a.AO_descripcion, a.AO_estado FROM `pau_btc_tbl_tipo` t INNER JOIN `pau_btc_tbl_activo` a ON a.AO_identificador_tipo = t.TP_identificador");
    const [typeResult] = await pool.query("SELECT TP_identificador, TP_nombre FROM pau_btc_tbl_tipo");
    console.log(result)
    console.log(typeResult)
    return res.status(200).json({ Dispositivos: result, types: typeResult });

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

const saveActivo = async (req, res) => {
    console.log(req.body);
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const { AO_descripcion, AO_estado, AO_identificador_tipo } = req.body;
    const data = { AO_descripcion, AO_estado, AO_identificador_tipo }
    console.log(data)
    const { result } = saveData('pau_btc_tbl_activo', data, res);

    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);
    return result;
};


const saveType = async (req, res) => {
    console.log(req.body);
    const { TP_identificador, TP_nombre, TP_descripcion } = req.body;
    const data = { TP_identificador, TP_nombre, TP_descripcion }
    console.log(data)

    const { result } = saveData('pau_btc_tbl_tipo', data, res);
    return  result;
}