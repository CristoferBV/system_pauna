import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllAdministradores(req, res);
        case "POST":
            return await crearAdmin(req, res);
        // case "PUT":
        //     return await updateAdmin(req, res)
        // case "DELETE":
        //     return await deleteAdmin(req, res)
    }
}

const getAllAdministradores = async (req, res) => {
    // solo muestra los datos de estudiantes con prestamos(que tengan un dispositivo asociado)
    const [adminUsers] = await pool.query("SELECT u.UO_primer_nombre, u.UO_primer_apellido, u.UO_segundo_apellido, u.UO_identificador, ce.CE_correoElectronico, r.RL_nombre, r.RL_descripcion FROM `pau_gnl_usuario`u INNER JOIN `pau_gnl_tbl_correoelectronico` ce ON u.UO_identificador_correo = ce.CE_idCorreo INNER JOIN `pau_gnl_rol` r ON u.UO_identificador_rol = r.RL_identificador WHERE r.RL_nombre = 'AdminBiblioteca'");
    const [rol] = await pool.query("SELECT * FROM `pau_gnl_rol`");
    return res.status(200).json({admins:adminUsers, rols:rol});
};

const crearAdmin = async (req, res) => {
    try {
        const { UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            CE_correoElectronico,
        } = req.body;
    
        const rolResult = await pool.query("SELECT RL_identificador FROM `pau_gnl_rol` WHERE RL_nombre = 'AdminBiblioteca'");
        const UO_identificador_rol = rolResult[0][0].RL_identificador
        
        await pool.query("INSERT INTO `pau_gnl_tbl_correoelectronico` SET ?", {
            CE_correoElectronico,
            CE_descripcion: "Correo de administrador"
        });
        
        const resultId = await pool.query("SELECT LAST_INSERT_ID() as id");
        const UO_identificador_correo = resultId[0][0].id;
        
        
    
        const UO_contrasena = await bcrypt.hash(req.body.UO_contrasena, 10);
        await pool
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
            .catch(function (error) {
                return res.status(500).json("Error al ingresar el usuario");
            });
        return res.status(200).json("Usuario administrador ingresado correctamente");
    } catch (error) {
        return res.status(500).json("Error interno del servidor");
    }
    
};