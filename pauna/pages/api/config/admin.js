import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAll(req, res);
        case "POST":
            console.log(req.body);
            return await saveUserAdmin(req, res);
    }
}

const getAll = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM `pau-gnl-rol`");
    console.log(result);
    return res.status(200).json(result);
};

const saveUserAdmin = async (req, res) => {
    console.log(req.body);
    const { RL_identificador, RL_nombre, RL_descripcion } = req.body;

    const result = await pool
        .query("INSERT INTO `pau-gnl-rol` SET ?", {
            RL_identificador,
            RL_nombre,
            RL_descripcion,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return res.status(200).json(result);
};
