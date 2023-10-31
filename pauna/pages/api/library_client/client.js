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
   
};

