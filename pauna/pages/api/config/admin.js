import { pool } from "../../../utils/Storage";
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllAdministrador(req, res);
        case "POST":
            console.log(req.body);
            return await saveUserAdmin(req, res);
        case "PUT":
            console.log(req.body);
            return await updateAdmin(req, res)
    }
}
const updateAdmin = async (req, res) => {
    const userID = req.body.UO_identificador;
    console.log(userID);
    const rol = await pool.query("SELECT RL_identificador FROM `pau_gnl_rol` WHERE RL_nombre = 'Usuario'");
    const rolID = rol[0][0].RL_identificador;
    console.log(rolID);
    const disableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 0";
    await pool.query(disableForeignKeyCheckQuery);

    const result = await pool.query("UPDATE `pau_gnl_usuario` SET UO_identificador_rol = ? WHERE UO_identificador = ?",
        [rolID, userID]
    )
    const enableForeignKeyCheckQuery = "SET FOREIGN_KEY_CHECKS = 1";
    await pool.query(enableForeignKeyCheckQuery);

    return res.status(200).json(result)
};


const getAllAdministrador = async (req, res) => {
    const [users] = await pool.query("SELECT * FROM `pau_gnl_usuario` u inner join `pau_gnl_rol` r on u.UO_identificador_rol = r.RL_identificador WHERE r.RL_nombre = 'Administrador'");
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
        CE_correoElectronico,
    } = req.body;


    const rolResult = await pool.query("SELECT RL_identificador FROM `pau_gnl_rol` WHERE RL_nombre = 'Administrador'");
    const UO_identificador_rol = rolResult[0][0].RL_identificador
    console.log(UO_identificador_rol)
    await pool.query("INSERT INTO `pau_gnl_tbl_correoelectronico` SET ?", {
        CE_correoElectronico,
        CE_descripcion: "Correo de administrador"
    });
    
    const resultId = await pool.query("SELECT LAST_INSERT_ID() as id");
    const UO_identificador_correo = resultId[0][0].id;
    console.log(UO_identificador_correo);
    

    const UO_contrasena = await bcrypt.hash(req.body.UO_contrasena, 10);
    const result = await pool
        .query("INSERT INTO `pau_gnl_usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_correo,
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
