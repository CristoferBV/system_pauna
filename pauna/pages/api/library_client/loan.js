import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "POST":
            console.log(req.body);
            return await saveLoan(req, res);
    }
}

const saveLoan = async (req, res) => {
    console.log(req.body);
    const {
        UO_identificador,
        UO_primer_nombre,
        UO_segundo_nombre,
        UO_primer_apellido,
        UO_segundo_apellido
    } = req.body;

    try {
        const result = await pool.query("INSERT INTO `pau-gnl-usuario` SET ?", {
            UO_identificador,
            UO_primer_nombre,
            UO_segundo_nombre,
            UO_primer_apellido,
            UO_segundo_apellido,
            UO_identificador_rol: "1"
        });
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar el usuario' });
    }
};