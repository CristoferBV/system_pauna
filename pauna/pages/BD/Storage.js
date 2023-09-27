import {createPool} from "mysql2";


const pool= createPool({
  host: "localhost",
  user:"root",
  password:"",
  port:3306,
  database:"test"
})

export {pool};
