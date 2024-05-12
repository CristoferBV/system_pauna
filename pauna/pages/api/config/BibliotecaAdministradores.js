import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllAdministradores(req, res);
    }
}

const getAllAdministradores = async (req, res) => {
    // solo muestra los datos de estudiantes con prestamos(que tengan un dispositivo asociado)
    const [result] = await pool.query("SELECT u.UO_primer_nombre, u.UO_primer_apellido, u.UO_segundo_apellido, u.UO_identificador, ce.CE_correoElectronico, r.RL_nombre, r.RL_descripcion FROM `pau_gnl_usuario`u INNER JOIN `pau_gnl_tbl_correoelectronico` ce ON u.UO_identificador_correo = ce.CE_idCorreo INNER JOIN `pau_gnl_rol` r ON u.UO_identificador_rol = r.RL_identificador WHERE r.RL_nombre = 'AdminBiblioteca'");
    const [Rol] = await pool.query("SELECT * FROM `pau_gnl_rol`")
    console.log(result)
    return res.status(200).json({ Administradores: result, Roles: Rol });
};

