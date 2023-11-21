import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPerifericos(req, res);
        case "POST":
            const type = req.body.tipo
            switch (type) {
                case "Periferico":
                    await savePeriferico(req, res);
                    break
            }
        case "DELETE":
            return deletePerifericos(req, res);
        }
    }

    const deletePerifericos = async(req, res)=>{
        const EA_identificador = req.body.EA_identificador;

        const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
        await pool.query(disableForeignKeyCheckQuery);

        const deletePeriferico = "DELETE FROM `pau_btc_tbl_periferico` WHERE EA_identificador = ?";
        const result = await pool.query(deletePeriferico, [EA_identificador]);

        const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
        await pool.query(enableForeignKeyCheckQuery);

        return res.status(200).json({ Perifericos: result});
    }

    const getAllPerifericos = async (req, res) => {
        const [result] = await pool.query("SELECT  p.EA_identificador, p.EA_nombre, p.EA_descripcion FROM `pau_btc_tbl_periferico` p ");
        console.log(result)
        return res.status(200).json({ Perifericos: result });
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

    const savePeriferico = async (req, res) => {
        console.log(req.body);
        const { EA_identificador, EA_nombre, EA_descripcion } = req.body;
        const data = { EA_identificador, EA_nombre, EA_descripcion }
        console.log(data)

        const { result } = saveData('pau_btc_tbl_periferico', data, res);
        return  result;
    }