import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return await getDevice(req, res);
  }
}

const getDevice = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT TP.TP_identificador, TP.TP_descripcion FROM pau_btc_tbl_tipo TP LEFT JOIN pau_btc_tbl_activo AO ON TP.TP_identificador = AO.AO_identificador_tipo WHERE AO.AO_identificador_tipo = TP.TP_identificador")

        const options = result.map((row) => ({
            value: row['TP_identificador'], // Valor a enviar cuando se seleccione la opción
            label: `${row['TP_identificador']} - ${row['TP_descripcion']}` // Texto que se mostrará en la opción
        }));

        return res.status(200).json(options);
    } catch (error) {
        console.error('Error al cargar los datos:', error.message);
        return res.status(500).json({ error: 'Error al cargar los datos' });
    }
};

