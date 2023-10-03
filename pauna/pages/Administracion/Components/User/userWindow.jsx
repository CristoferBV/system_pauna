"user client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function UserWindow({ userAdmins }) {
  console.log(userAdmins);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hola");
    const res = await axios
      .post("/api/config/admin", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [user, setUser] = useState({
    UO_identificador: "",
    UO_primer_nombre: "",
    UO_segundo_nombre: "",
    UO_primer_apellido: "",
    UO_segundo_apellido: "",
    UO_identificador_rol:""
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user.UO_identificador_rol);
  };

  const reloadPage=()=>{
    router.push("/Administracion/Components/User/userWindow");
  }

  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="xl:w-full xl:grid xl:grid-cols-2
            lg:w-full lg:grid lg:grid-cols-1 
            p-36 
            text-3xl font-semibold "
      >
        <form
          onSubmit={handleSubmit}
          className="bg-[#021730] text-center mx-10 
                lg:mb-4"
        >
          <h1 className="text-white p-10">Agrega un administrador</h1>
          <div
            className="p-2
                    lg:p-0"
          >
            <input
              className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
              placeholder="Código"
              name="UO_identificador"
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="p-2
                    lg:p-0"
          >
            <input
              className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
              placeholder="Primer Nombre"
              name="UO_primer_nombre"
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="p-2
                    lg:p-0"
          >
            <input
              className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
              placeholder="Segundo Nombre*"
              name="UO_segundo_nombre"
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="p-2
                    lg:p-0"
          >
            <input
              className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
              placeholder="Primer Apellido"
              name="UO_primer_apellido"
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="p-2
                    lg:p-0"
          >
            <input
              className="bg-white text-black text-center placeholder:text-[#D9D9D9] rounded mb-5"
              placeholder="Segundo Apellido"
              name="UO_segundo_apellido"
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="p-2
                    lg:p-0"
          >
            <select
              className="bg-white text-[#D9D9D9] text-center placeholder:text-[#D9D9D9] rounded"
              value={user.UO_identificador_rol}
              onChange={handleChange}
            >
              <option className=" text-[#D9D9D9] text-center" value="">
                Elige una rol
              </option>
              <option className=" text-[#D9D9D9] text-center" value="R1">
                Administrador
              </option>
              <option className="text-[#D9D9D9] text-center" value="R2">
                Usuario
              </option>
            </select>
          </div>

          <div className="p-2 mt-5">
            <button className="bg-[#3726FD] p-5 text-white " onClick={reloadPage}>
              Añadir
            </button>
          </div>
        </form>
        <div className="bg-[#021730] text-center items-center justify-center mx-10 p-2">
          <h1 className="text-white p-5">Lista de Administradores</h1>
          <div class="overflow-x-auto">
            <table class="table-fixed w-full mt-4">
              <thead class="text-sm md:text-2xl bg-[#132335]">
                <tr
                  class=" text-white md:pr-40 md:pl-40
                            lg:text-xs
                            xl:text-2xl"
                >
                  <th class="p-4">Cédula</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                </tr>
              </thead>
              <tbody className="bg-[#212C39]">
                {userAdmins.map((userAdmin) => (
                  <tr
                    className="sm:text-sm sm:p-4
                    " key={userAdmin.UO_identificador} 
                  >
                    <td className=" p-7 text-white hover:bg-[#021730]">
                      {userAdmin.UO_identificador}
                    </td>
                    <td className=" p-7 text-white hover:bg-[#021730]">
                      {userAdmin.UO_primer_nombre} {userAdmin.UO_segundo_nombre}
                    </td>
                    <td className=" p-7 text-white hover:bg-[#021730]">
                      {userAdmin.UO_primer_apellido}  {userAdmin.UO_segundo_apellido}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-2">
            <button className="bg-[#3726FD] p-5 text-white">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try{
    const { data: userAdmins } = await axios.get(
      "http://localhost:3000/api/config/admin"
    )
    return {
      props: {
        userAdmins,
      },
    };
  }catch(error){
    console.log(error)
  }
};
