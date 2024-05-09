import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case "GET":
      return await getDevice(req, res);
  }
}

const getDevice = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT TP_nombre FROM pau_btc_tbl_tipo");

        const options = result.map((row) => ({
            value: row['TP_nombre'], // Valor a enviar cuando se seleccione la opción
            label: `${row['TP_nombre']}` // Texto que se mostrará en la opción
        }));

        return res.status(200).json(options);
    } catch (error) {
        console.error('Error al cargar los datos:', error.message);
        return res.status(500).json({ error: 'Error al cargar los datos' });
    }
};
