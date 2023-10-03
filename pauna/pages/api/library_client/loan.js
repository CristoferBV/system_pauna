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
        UO_primer_nombre, //pau-gnl-usuario [LISTO]
        EE_idenficador, //pau-btc-tbl_estudiante  [LISTO]
        CE_correpElectronico, //pau-gnl-tbl_correoelectronico [LISTO]
        CA_nombre, //pau-btc-carrera  [LISTO]
        EE_nivel, //pau-btc-tbl_estudiante  [LISTO]
        TP_nombre, //pau-btc-tbl_tipo [LISTO]
        LP_fechaDevolucion, //pau-btc-tbl_listaprestamo [LISTO]
        EE_campus, //pau-btc-tbl_estudiante  [LISTO]
        TO_numero //pau-gbl-tbl-telefono

    } = req.body;

    try {
        const result = await pool
        .query("INSERT INTO `pau-gnl-usuario` SET ?", {
            UO_primer_nombre
        });
        console.log(result);
        //return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        const result1 = await pool
        .query("INSERT INTO `pau-btc-tbl_estudiante` SET ?", {
            EE_idenficador,
            EE_nivel,
            EE_campus
        });
        console.log(result1);
        //return res.status(200).json(result1);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        const result2 = await pool
        .query("INSERT INTO `pau-gnl-tbl_correoelectronico` SET ?", {
            CE_correpElectronico
        });
        console.log(result2);
        //return res.status(200).json(result2);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        const result3 = await pool
        .query("INSERT INTO `pau-btc-carrera` SET ?", {
            CA_nombre
        });
        console.log(result3);
        //return res.status(200).json(result3);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    } 

    try {
        const result4 = await pool
        .query("INSERT INTO `pau-btc-tbl_tipo` SET ?", {
            TP_nombre
        });
        console.log(result4);
        //return res.status(200).json(result4);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        const result5 = await pool
        .query("INSERT INTO `pau-btc-tbl_listaprestamo` SET ?", {
            LP_fechaDevolucion
        });
        console.log(result5);
        //return res.status(200).json(result5);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        const result6 = await pool
        .query("INSERT INTO `pau-gbl-tbl-telefono` SET ?", {
            TO_numero
        });
        console.log(result6);
        //return res.status(200).json(result6);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    return res.status(200).json({ message: 'Inserciones exitosas en todas las tablas'});
};