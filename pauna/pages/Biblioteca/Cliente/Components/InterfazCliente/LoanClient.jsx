
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../../../public/LOGO-UNA.png';
import LogoBombilla from '../../../../../public/bombilla.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react'
import Link from 'next/link';
import Axios from 'axios';


export default function LoanClient({ userStudent }) {
  console.log(userStudent);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    const res = await axios
      .post("/api/config/client", student)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [student, setStudent] = useState({
    EE_identificador: "",
    EE_campus: "",
    EE_nivel: "",
    EE_identificador_telefono: "",
    EE_identificador_correo: "",
    EE_idenficador_carrera: "",
    EE_identificador_usuario: "1"
  });

  const handleChange = ({ target: { name, value } }) => {
    setStudent({ ...student, [name]: value });
    console.log(student.EE_identificador_usuario)
  };

  const router = useRouter();
  const { section } = router.query;

  const [active , setActive] = useState('');

  const navigation = [
    { name: 'Préstamo', section: 'LoanClient', current: false },
    { name: 'Devolución', section: 'DevolutionClient', current: false },
    { name: 'Perfil', section: 'ProfileClient', current: false },
    { name: 'Inicio', section: 'HomeClient', current: false }
  ];  

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="min-h-full relative">
        <Disclosure as="nav" className="bg-[#FF3333]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-[#E31919] rounded-full w-14 h-14">
                      <Image
                      className="h-9 w-9 mt-2.5 ml-2.5"
                      src={Logo}
                      width={300}
                      height = {300}
                      alt="University"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link legacyBehavior key={item.name} href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`} onClick={() => setActive(item.section)}>
                          <a
                            key={item.name}
                            href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                            className={classNames(
                              item.current
                                ? 'bg-[#FF3333] text-white'
                                : 'text-white hover:bg-[#E31919] hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      </div>
                    </div>
                  </div>
                  <Link href={'/LoginAndRegister/Login/Login'}>
                    <button className='bg-[#FF3333] text-white
                                  :text-white hover:bg-[#E31919] hover:text-white
                                rounded-md px-3 py-2 text-sm font-medium'>
                      Cerrar Sesión
                    </button>
                  </Link>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-[#E31919] p-2 text-white hover:bg-[#E31919] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E31919]">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-2 pt-12 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={`/Biblioteca/Cliente/Components/InterfazCliente/${item.section}`}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="text-center py-10">
          <div className="mx-auto w-11/12 h-28 bg-gray-400 rounded-md p-4 flex items-center justify-center">
            <div className="mr-2">
              <Image src={LogoBombilla} width={40} height={40} alt="Icon" />
            </div>
            <p className="text-xl font-bold">Llene todos los campos correspondientes</p>
          </div>
        </header>

        <main className="min-h-screen flex-grow relative z-0">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario de solicitudes</h1>
          <div className="mx-auto w-11/12 p-4 bg-[#D9D9D9] rounded-md mb-8 md:mb-0">
            <div className="bg-[#BFBFBF] rounded-md p-6 grid md:grid-cols-3 gap-4">

              {/* Columna 1 */}
              <div className="col-span-1 md:mb-0">
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Nombre completo</label>
                  <input type="text" className="p-2 w-full border rounded-md" name="" onChange={handleChange} />
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Cédula</label>
                  <input type="email" className="p-2 w-full border rounded-md" name="" onChange={handleChange}/>
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Correo</label>
                  <input type="tel" className="p-2 w-full border rounded-md" name="" onChange={handleChange}/>
                </div>
              </div>

              {/* Columna 2 */}
              <div className="col-span-1 md:mb-0">
              <div className="mb-8">
                  <label className="block font-semibold mb-1">Carrera</label>
                  <select className="p-2 w-full border rounded-md" name="" onChange={handleChange}>
                    <option value="">-Seleccionar opción-</option>
                    <option value="opcion1">
                      Ingeniería en Sistemas de Información{" "}
                    </option>
                    <option value="opcion2">Administración</option>
                    <option value="opcion3">Enseñanza del Inglés</option>
                    <option value="opcion4">Planificación</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Nivel de carrera</label>
                  <select className="p-2 w-full border rounded-md" name="" onChange={handleChange}>
                    <option value="">-Seleccionar opción-</option>
                    <option value="opcion1">Nivel I</option>
                    <option value="opcion2">Nivel II</option>
                    <option value="opcion3">Nivel III</option>
                    <option value="opcion4">Nivel IV</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Dispositivos</label>
                  <select className="p-2 w-full border rounded-md" name="" onChange={handleChange}>
                    <option value="">-Seleccionar opción-</option>
                    <option value="opcion1">Laptop</option>
                    <option value="opcion2">Tablet</option>
                  </select>
                </div>
              </div>

              {/* Columna 3 */}
              <div className="col-span-1">
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Fechas de prestamos</label>
                  <select className="p-2 w-full border rounded-md" name="" onChange={handleChange}>
                    <option value="">-Seleccionar opción-</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Campus</label>
                  <select className="p-2 w-full border rounded-md" name="" onChange={handleChange}>
                    <option value="">-Seleccionar opción-</option>
                    <option value="opcion1">Campus Coto</option>
                    <option value="opcion2">Campus Pérez Zeledón</option>
                    <option value="opcion3">Campus Omar Dengo</option>
                    <option value="opcion4">Campus Benjamín Núñez</option>
                    <option value="opcion5">Campus Liberia</option>
                    <option value="opcion6">Campus Sarapiquí</option>
                    <option value="opcion7">Campus Nicoya</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block font-semibold mb-1">Telefono</label>
                  <input type="input" className="p-2 w-full border rounded-md" name="" onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-[#E31919] text-white rounded-md px-4 py-2 font-medium hover:bg-[#FF3333]" onSubmit={handleSubmit}>
                Aceptar
              </button>
            </div>
          </div>
        </main>
        <footer className="bg-[#FF3333] text-white py-4 text-start">
          <p className="px-4">Derechos reservados: @Desarrolladores PAUNA 2023</p>
        </footer>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try{
    const { data: userStudent } = await axios.get(
      "http://localhost:3000/api/config/client"
    )
    return {
      props: {
        userStudent,
      },
    };
  }catch(error){
    console.log(error)
  }
};

