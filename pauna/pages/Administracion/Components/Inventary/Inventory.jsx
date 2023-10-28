"use client";
import Buttons from "./InvButtons";
import Link from "next/link";
import axios from "axios";

export default function Inventary({ materials }) {
  console.log(materials);
  return (
    <>
      <div className="bg-white sm:bg-white md:bg-white lg:bg-white xl:bg-white">
        <div
          className="grid grid-cols-3 sm:grid-cols-1 sm:text-center 
                m:min-h-min p-10 md:flex items-center justify-center text-white text-2xl font-semibold
                lg:p-2 "
        >
          <div
            className="
                    sm:m-4
                    md:mr-10"
          >
            <button className="bg-[#3726FD] md:w-auto p-5 hover:bg-[#4333F9]">
              Superior
            </button>
          </div>
          <div
            className="sm:m-4
                    md:mr-10"
          >
            <button className="bg-[#3726FD] md:w-auto p-5 hover:bg-[#4333F9]">
              Inferior
            </button>
          </div>
          <div
            className="sm:m-4
                    md:mr-10"
          >
            <button className="bg-[#3726FD] md:w-auto p-5  hover:bg-[#4333F9]">
              Auditorio
            </button>
          </div>
        </div>

        <div
          className="bg-[#021730] w-3/4 mx-40 text-center
                md:p-20 text-2xl font-semibold
                lg:text-lg"
        >
          <div
            className="sm:mr-10 sm:text-center sm:p-2 sm:text-sm
                    md:mr-20 md:text-left md:mx-auto md:text-xs
                    lg:text-xl"
          >
            <input
              className="bg-[#3726FD] p-5 text-white placeholder-white"
              placeholder="Buscar..."
            ></input>
          </div>
          <div
            className="xl:pt-10 xl:mr-50 
                    lg:pt-5 lg:mx-auto lg:text-xs"
          >
            <table
              className="table-fixed text-white
                        lg:w-full"
            >
              <thead
                className="bg-[#132335] sm:text-sm
                            md:mx-auto md:text-xs
                            lg:text-base
                            xl:text-2xl
                            "
              >
                <tr
                  className="xl-text-2xl 
                                md:pr-40 md:pl-40 md:text-md
                                "
                >
                  <th
                    className="
                                    "
                  >
                    Nombre
                  </th>
                  <th>Código</th>
                  <th>Marca</th>
                  <th>Cantidad</th>
                  <th>Observaciones</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-[#212C39]">
                {materials.map((material) => (
                  <tr
                    className="
                                md:text-xs md:text-white
                                lg:text-xs lg:m-auto lg:p-auto
                                xl:p-2 xl:text-xl
                                2xl:p-4 2xl:text-2xl"
                  >
                    <td
                      className="
                                    "
                    >{material.ML_descripcion}</td>
                    <td className=" ">{material.ML_identificador}</td>
                    <td className=" ">{material.MC_nombre}</td>
                    <td className=" ">{material.CD_cantidad}</td>
                    <td className="">{material.ML_observacion}</td>
                    <td>
                      <Buttons material={material}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="../../../../Administracion/Components/Inventary/InvAnnadir">
            <div className="pt-20 text-white text-left">
              <button className="bg-[#3726FD] md:w- p-6  hover:bg-[#4333F9]">
                Añadir
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  try {
    const { data: materials } = await axios.get(
      "http://localhost:3000/api/material/view"
    );
    return {
      props: {
        materials,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
