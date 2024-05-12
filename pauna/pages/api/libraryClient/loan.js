import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return getAllLoans(req, res);
    case "POST":
      return saveLoan(req, res);
  }
}

const saveLoan = async (req, res) => {
  //console.log("Body:", req.body);
  try {
    const { cedula, selectedDate, device, comprobanteBecaBlob, comprobanteMatriculaBlob } = req.body;

    // Desactivar llaves foráneas
    await pool.query("SET foreign_key_checks = 0");

    // Buscar en la tabla pau_gnl_usuario
    const usuario = await pool.query(
      "SELECT UO_identificador FROM pau_gnl_usuario WHERE UO_identificador = ?",
      [cedula]
    );

    // Validar si la cédula existe como UO_identificador
    if (usuario.length > 0) {
      const UO_identificador = cedula;

      // Obtener HO_identificador basado en la fecha
      const horario = await pool.query(
        "SELECT HO_identificador FROM pau_btc_tbl_horario WHERE HO_fecha = ?",
        [selectedDate]
      );

      // Validar si se encontró el horario
      if (horario.length > 0 && horario[0].length > 0 && horario[0][0].HO_identificador !== undefined) {
        const HO_identificador = horario[0][0].HO_identificador;

        // Buscar el EE_idenficador relacionado con la cédula en la tabla pau_btc_tbl_estudiante
        const estudiante = await pool.query(
          "SELECT EE_idenficador FROM pau_btc_tbl_estudiante WHERE EE_identificador_usuario = ?",
          [UO_identificador]
        );

        // Validar si existe información de estudiante para el usuario
        if (estudiante.length > 0 && estudiante[0].length > 0 && estudiante[0][0].EE_idenficador !== undefined) {
          const EE_idenficador = estudiante[0][0].EE_idenficador;

          // Buscar el TP_identificador basado en la descripción del dispositivo
          const tipoDispositivo = await pool.query(
            "SELECT TP_identificador FROM pau_btc_tbl_tipo WHERE TP_nombre = ?",
            [device]
          );

          // Validar si se encontró el tipo de dispositivo
          if (tipoDispositivo.length > 0 && tipoDispositivo[0].length > 0 && tipoDispositivo[0][0].TP_identificador !== undefined) {
            const TP_identificador = tipoDispositivo[0][0].TP_identificador;


            // Realizar la operación de inserción en la tabla pau_btc_tbl_solicitud
            await pool.query(
              "INSERT INTO pau_btc_tbl_solicitud (SD_comprobanteBeca, SD_comprobanteMatricula, SD_identificador_horario, SD_identificador_tipo, SD_identificador_usuario) VALUES (?, ?, ?, ?, ?)",
              [comprobanteBecaBlob, comprobanteMatriculaBlob, HO_identificador, TP_identificador, EE_idenficador]
            );

            // Activar llaves foráneas
            await pool.query("SET foreign_key_checks = 1");

            return res.status(200).json({ success: true, EE_idenficador });
          } else {
            res.status(400).json({ error: "No se encontró un tipo de dispositivo válido" });
            return;
          }
        } else {
          res.status(400).json({ error: "No se encontró información válida de estudiante para el usuario" });
          return;
        }
      } else {
        res.status(400).json({ error: "No se encontró un horario válido para la fecha proporcionada" });
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

const getAllLoans = async (req, res) => {
  try {
    // Consulta SQL para obtener solicitudes con detalles de estudiantes relacionados
    const query = `
    SELECT 

      u.UO_primer_nombre,
      u.UO_segundo_nombre,
      u.UO_primer_apellido,
      u.UO_segundo_apellido,
      c.CA_nombre,
      h.HO_fecha,
      u.UO_identificador,
      e.EE_nivel,
      e.EE_campus,
      co.CE_correoElectronico,
      ti.TP_nombre,
      t.TO_numero,
      s.SD_comprobanteBeca,
      s.SD_comprobanteMatricula

    FROM 
        pau_btc_tbl_solicitud s
    JOIN
        pau_btc_tbl_estudiante e ON s.SD_identificador_usuario = e.EE_idenficador
    JOIN
        pau_btc_tbl_tipo ti ON s.SD_identificador_tipo = ti.TP_identificador
    JOIN
        pau_btc_tbl_horario h ON s.SD_identificador_horario = h.HO_identificador
    JOIN 
        pau_gnl_usuario u ON e.EE_identificador_usuario = u.UO_identificador
    JOIN
        pau_btc_tbl_carrera c ON e.EE_idenficador_carrera = c.CA_identificador
    JOIN
        pau_gnl_tbl_correoelectronico co ON u.UO_identificador_correo = co.CE_idCorreo
    JOIN
        pau_gnl_tbl_telefono t ON e.EE_identifacador_telefono = t.TO_idenficador
    `;
    
    // Ejecutar la consulta
    const [solicitud] = await pool.query(query);
    
    // Enviar los préstamos obtenidos como respuesta
    return res.status(200).json(solicitud);
    
  } catch (error) {
    console.error('Error al obtener préstamos:', error);
    return res.status(500).json({ error: 'Error al obtener préstamos' });
  }
};
