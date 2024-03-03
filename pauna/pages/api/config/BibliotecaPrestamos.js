import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getAllPrestamos(req, res);
        case "PUT":
            return await updatePrestamos(req, res);
        case "DELETE":
            return await deletePrestamos(req, res);
        default:
            return res.status(405).end(); // Método no permitido
    }
}

const deletePrestamos = async (req, res) => {
    
};


const getAllPrestamos = async (req, res) => {
    try {
        const [PrestamoResult] = await pool.query("SELECT LP_identificador, LP_fechaDevolucion, LP_identificador_activo, LP_identificador_usuario FROM pau_btc_tbl_listaprestamo");
        const [DispositivoResult] = await pool.query("SELECT A.AO_identificador, A.AO_descripcion, A.AO_estado, T.TP_nombre, T.TP_descripcion FROM pau_btc_tbl_activo A INNER JOIN pau_btc_tbl_tipo T ON A.AO_identificador_tipo = T.TP_identificador");
        const [PerifericoResult] = await pool.query("SELECT EA_identificador, EA_nombre, EA_descripcion FROM pau_btc_tbl_periferico");
        console.log(PrestamoResult);
        console.log(PerifericoResult);
        console.log(DispositivoResult);
        return res.status(200).json({Prestamo: PrestamoResult, Dispositivo: DispositivoResult,  Periferico: PerifericoResult });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error en la obtención de citas.' });
    }
};


const updatePrestamos = async (req, res) => {
    
};
