import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllAdministrador(req, res);
        case "POST":
            console.log(req.body);
            return await saveUserAdmin(req, res);
    }
}

const getAllAdministrador = async (req, res) => {
    const [users] = await pool.query("SELECT * FROM `pau_gnl_usuario` u inner join `pau_gnl_rol` r on u.UO_identificador_rol = r.RL_identificador");
    const [rol] = await pool.query("SELECT * FROM `pau_gnl_rol`");
    return res.status(200).json({userAdmins:users, rols:rol});
};


const saveUserAdmin = async (req, res) => {
    console.log(req.body);
    const { UO_identificador,
        UO_primer_nombre,
        UO_segundo_nombre,
        UO_primer_apellido,
        UO_segundo_apellido,
        UO_identificador_rol,
        UO_contrasena } = req.body;

    const result = await pool
        .query("INSERT INTO `pau_gnl_usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_rol,
            UO_contrasena
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return res.status(200).json(result);
};
