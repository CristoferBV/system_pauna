import { pool } from "../../../utils/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getCareer(req, res);
    }
}

const getCareer = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT CA_identificador, CA_nombre FROM pau_btc_tbl_carrera");

        const options = result.map((row) => ({
            value: row['CA_identificador'], // Valor a enviar cuando se seleccione la opción
            label: row['CA_nombre'] // Texto que se mostrará en la opción
        }));

        return res.status(200).json(options);
    } catch (error) {
        console.error('Error al cargar los datos:', error.message);
        return res.status(500).json({ error: 'Error al cargar los datos' });
    }
};
