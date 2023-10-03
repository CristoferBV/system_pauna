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
        // Verificar si el rol existe o insertarlo si no existe
        const [row] = await pool.query("SELECT RL_identificador FROM `pau-gnl-rol` WHERE RL_nombre = ?", [
            "Biblioteca" // Reemplaza "nombre_del_rol" con el nombre del rol que corresponde al usuario
        ]);

        let idRol;

        if (row.length > 0) {
            // Si el rol ya existe, obtén su identificador
            idRol = row[0].RL_identificador;
        } else {
            // Si el rol no existe, insértalo y obtén su identificador
            const resultRol = await pool.query("INSERT INTO `pau-gnl-rol` (RL_nombre) VALUES (?)", [
                "Biblioteca" // Reemplaza "nombre_del_rol" con el nombre del rol que corresponde al usuario
            ]);
            idRol = resultRol.insertId;
        }

        // Insertar el usuario en la tabla `pau-gnl-usuario` utilizando el identificador del rol
        const result = await pool.query("INSERT INTO `pau-gnl-usuario` (UO_primer_nombre, UO_identificador_rol) VALUES (?, ?)", [
            UO_primer_nombre,
            idRol
        ]);
        console.log(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar nombre' });
    }

    try {
        // Verificar si el número de teléfono ya existe en la tabla `pau-gnl-tbl_telefono`
        const [phoneRow] = await pool.query("SELECT `TO-idenficador` FROM `pau-gnl-tbl_telefono` WHERE `TO-numero` = ?", [
            TO_numero
        ]);

        let idTelefono;
        var TO_idenficador = "T2";

        if (phoneRow.length > 0) {
            // Si el número de teléfono ya existe, obtén su identificador
            idTelefono = phoneRow[0]['TO-idenficador'];
        } else {
            // Si el número de teléfono no existe, insértalo y obtén su identificador
            const resultTelefono = await pool.query("INSERT INTO `pau-gnl-tbl_telefono` (`TO-idenficador`, `TO-numero`) VALUES (?,?)", [
                idTelefono = TO_idenficador,
                TO_numero
            ]);

            if (resultTelefono.affectedRows === 1) {
                // La inserción fue exitosa
                idTelefono = resultTelefono.insertId;
            } else {
                // La inserción falló, maneja el error adecuadamente
                console.error("Error al insertar teléfono:", resultTelefono);
                return res.status(500).json({ error: 'Error al guardar teléfono' });
            }

            console.log("idTelefono antes:", idTelefono);
            idTelefono = resultTelefono.insertId;
            console.log("idTelefono despues:", idTelefono);
        }

        // Insertar el estudiante en la tabla `pau-btc-tbl_estudiante` utilizando el identificador del teléfono
        const resultEstudiante = await pool.query("INSERT INTO `pau-btc-tbl_estudiante` (`EE_idenficador`, `EE_nivel`, `EE_campus`, `EE_identifacador_telefono`) VALUES (?, ?, ?, ?)", [
            EE_idenficador,
            EE_nivel, // Reemplaza con el valor correcto
            EE_campus, // Reemplaza con el valor correcto
            idTelefono || null // Si idTelefono es null, asigna null a EE_identifacador_telefono
        ]);
    
        console.log(resultEstudiante);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al guardar estudiante' });
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