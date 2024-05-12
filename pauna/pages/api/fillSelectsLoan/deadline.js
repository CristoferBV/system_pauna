import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getDeadLine(req, res);
    }
}

const getDeadLine = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT HO_identificador, HO_fecha, HO_hora FROM pau_btc_tbl_horario");

        const options = result.map((row) => ({
            value: row['HO_identificador'], // Valor a enviar cuando se seleccione la opción
            label: `${new Date(row['HO_fecha']).toLocaleDateString()} - ${row['HO_hora']}` // Concatenación de fecha y hora
        }));

        return res.status(200).json(options);
    } catch (error) {
        console.error('Error al cargar los datos:', error.message);
        return res.status(500).json({ error: 'Error al cargar los datos' });
    }
};



