import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "POST":
           return saveLoan(req, res);
    }
}

const saveLoan = async (req, res) => {
    console.log("Body:", req.body);
    try {
        const { cedula } = req.body;

        // Desactivar llaves foráneas
        await pool.query("SET foreign_key_checks = 0");

        // Buscar en la tabla pau_gnl_usuario
        const usuario = await pool.query(
            "SELECT UO_identificador FROM pau_gnl_usuario WHERE UO_identificador = ?",
            [cedula]
        );

        // Validar si la cédula existe como UO_identificador
        if (usuario.length > 0) {
            const UO_identificador = usuario[0].UO_identificador;

            // Buscar el EE_idenficador relacionado con la cédula en la tabla pau_btc_tbl_estudiante
            const estudiante = await pool.query(
                "SELECT EE_idenficador FROM pau_btc_tbl_estudiante WHERE EE_identificador_usuario = ?",
                [UO_identificador]
            );

            // Validar si existe información de estudiante para el usuario
            if (estudiante.length > 0) {
                const EE_idenficador = estudiante[0].EE_idenficador;

                // Realizar la operación de inserción en la tabla pau_btc_tbl_solicitud
                await pool.query(
                    "INSERT INTO pau_btc_tbl_solicitud (SD_comprobanteBeca, SD_comprobanteMatricula, SD_identificador_horario, SD_identificador_tipo, SD_identificador_usuario) VALUES (?, ?, ?, ?, ?)",
                    [null, null, 2, 2, EE_idenficador]
                );

                // Activar llaves foráneas
                await pool.query("SET foreign_key_checks = 1");

                return res.status(200).json({ success: true, EE_idenficador });
            } else {
                res.status(400).json({ error: "No se encontró información de estudiante para el usuario" });
                return;
            }
        } else {
            res.status(400).json({ error: "La cédula no corresponde a un usuario registrado" });
            return;
        }
    } catch (error) {
        console.error("Error al procesar la solicitud de préstamo:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
