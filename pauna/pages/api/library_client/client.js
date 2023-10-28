import { pool } from "../../BD/Storage";

export default async function handler(req, res) {
    console.log(req.method);
    switch (req.method) {
        case "GET":
            return await getLoan(req, res);
        case "POST":
            console.log(req.body);
            return await saveLoan(req, res);
    }
}

const getAllStudent = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM `pau-btc-tbl_estudiante`");
    console.log(result);
    return res.status(200).json(result);
};

const getLoan = async (req, res) => {
    const [result] = await pool.query("SELECT CONCAT(UO.UO_primer_nombre, ' ', UO.UO_segundo_nombre, ' ', UO.UO_primer_apellido, ' ', UO.UO_segundo_apellido) AS NombreCompleto, EE.EE_idenficador AS Cédula, CE.`CE-correoElectronico` AS Correo, CA.CA_nombre AS Carrera, EE.EE_nivel AS NivelCarrera, COUNT(DISTINCT EA.EA_identificador) AS Dispositivos, LP.LP_fechaDevolucion AS FechaDevolución, EE.EE_campus AS Campus, `TO`.`TO-numero` AS Telefono FROM `pau-gnl-usuario` AS UO INNER JOIN `pau-btc-tbl_estudiante` AS EE ON UO.UO_identificador = EE.EE_identificador_usuario INNER JOIN `pau-gnl-tbl_correoelectronico` AS CE ON EE.EE_identificador_correo = CE.`CE-idCorreo` INNER JOIN `pau-btc-tbl_carrera` AS CA ON EE.EE_idenficador_carrera = CA.CA_identificador LEFT JOIN `pau-btc-tbl_listaprestamo` AS LP ON UO.UO_identificador = LP.LP_identificador_usuario LEFT JOIN `pau-btc-tbl_listaprestamo-x-tbl_periferico` AS EA_LP ON LP.LP_identificador = EA_LP.LP_identificador LEFT JOIN `pau-btc-tbl_periferico` AS EA ON EA_LP.EA_identificador = EA.EA_identificador LEFT JOIN `pau-gnl-tbl_telefono` AS `TO` ON EE.EE_identifacador_telefono = `TO`.`TO-idenficador` GROUP BY UO.UO_identificador, EE.EE_idenficador, CE.`CE-correoElectronico`, CA.CA_nombre, EE.EE_nivel, LP.LP_fechaDevolucion, EE.EE_campus, `TO`.`TO-numero`");
    console.log(result);
    return res.status(200).json(result);
};

const saveLoan = async (req, res) => {
    console.log(req.body);

    const dataUser = {
        UO_identificador: "UO" + 1++,//UO1
        UO_primer_nombre, //Julian
        UO_segundo_nombre, //Daniel
        UO_primer_apellido, //Beita
        UO_segundo_apellido, //Barrantes
        UO_identificador_rol: RL_nombre
    };

    // const dataRol = {
    //     RL_identificador,
    //     RL_nombre, 
    //     RL_descripcion
    // };
    
    // const dataCareer = {
    //     CA_identificador,
    //     CA_nombre, 
    //     CA_descripcion
    // };
    
    // const dataActive = {
    //     AO_identificador,
    //     AO_descripcion,
    //     AO_estado,
    //     AO_identificador_tipo
    // };

    // const dataType = {
    //     TP_identificador,
    //     TP_nombre, 
    //     TP_cantidad,
    //     TP_descripcion
    // };
    
    const dataStudent = {
        EE_idenficador, // inserta ejemplo: 0184945832
        EE_campus, //no inserta dato
        EE_nivel, //no inserta dato
        EE_idenfacador_telefono: TO_numero,
        EE_identificador_correo: CE_correoElectronico,
        EE_idenficador_carrera: CA_nombre,
        EE_identificador_usuario: UO_identificador
    };

    // const dataListaPrestamo = {
    //     LP_identificador,
    //     LP_fechaDevolucion, // 1/10/2023
    //     LP_identificador_activo,
    //     LP_identificador_usuario
    // };

    // const dataCorreo = {
    //     CE_idCorreo,
    //     CE_correoElectronico, //prueba@gmail.com
    //     CE_descripcion
    // };

    // const dataTelefono = {
    //     TO_identificador,
    //     TO_numero, //27718220
    //     TO_descripcion
    // };

    // Realizar la inserción en la primera tabla
    query("INSERT INTO `pau-btc-tbl_estudiante` SET ?", dataStudent, function (error, result1) {
        if (error) {
            console.error("Error en la inserción en tabla1:", error);
        } else {
            console.log("Inserción exitosa en tabla1:", result1);
    
            // Realizar la inserción en la segunda tabla
            query("INSERT INTO `pau-gnl-usuario` SET ?", data2, function (error, result2) {
                if (error) {
                    console.error("Error en la inserción en tabla2:", error);
                } else {
                    console.log("Inserción exitosa en tabla2:", result2);
                    // Continuar con otras inserciones si es necesario
                    
                }
            });
        }
    });
    
    return res.status(200).json(result);
};

