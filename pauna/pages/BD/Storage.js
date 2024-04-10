import {createPool} from "mysql2/promise";


const pool= createPool({
  host: "%",
  user:"u871258603_sebasaravi",
  password:"Sebas0112",
  port:3304,
  database:"u871258603_pauna"
})


export  {pool};
