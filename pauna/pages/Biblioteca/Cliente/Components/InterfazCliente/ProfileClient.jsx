import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../../public/LOGO-UNA.png";
import Image from "next/image";

const ProfileClient = () => {
  const navigation = [
    { name: "Préstamo", href: "#", current: false },
    { name: "Devolución", href: "#", current: false },
    { name: "Perfil", href: "#", current: false },
    { name: "Inicio", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
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
                        height={300}
                        alt="University"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#FF3333] text-white"
                                : "text-white hover:bg-[#E31919] hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-[#E31919] p-2 text-white hover:bg-[#E31919] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E31919]">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
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
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main className="min-h-screen flex-grow relative z-0">
          <div className="flex justify-center p-7 mt-11">
            <div className="bg-[#D9D9D9] w-10/12 h-44 p-4 flex rounded-xl">
              <div className="bg-[#AEA7A7] rounded-full w-36 h-36 flex items-center justify-center mr-4">
                <Image
                  className="h-9 w-9 mt-2.5 ml-2.5"
                  src={""}
                  width={300}
                  height={300}
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col mt-10 font-bold">
                <p>Nombre</p>
                <p>Correo</p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-9/12 p-6 bg-[#BFBFBF] rounded-md mt-11">
            <div className="text-center font-bold mb-5">
              <h1>Datos de Perfil</h1>
            </div>
            <div className="mx-auto w-full p-4 bg-[#F0ECEC] rounded-md mb-8 md:mb-0 grid md:grid-cols-2 gap-4">
              <div className="col-span-1 md:mb-0">
                <input
                  type="text"
                  className="bg-gray-300 w-full mb-2 p-2 rounded"
                  placeholder="Input 1"
                />
                <input
                  type="text"
                  className="bg-gray-300 w-full mb-2 p-2 rounded"
                  placeholder="Input 2"
                />
              </div>
              <div className="col-span-1 md:mb-0">
                <input
                  type="text"
                  className="bg-gray-300 w-full mb-2 p-2 rounded"
                  placeholder="Input 2"
                />
                <input
                  type="text"
                  className="bg-gray-300 w-full mb-2 p-2 rounded"
                  placeholder="Input 3"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-3 mt-4 sm:mt-8">
            <button className="bg-[#25F63A] hover:bg-[#1EA82E] text-white px-4 py-2 rounded-md">
              Editar
            </button>
            <button className="bg-[#F22E2E] hover:bg-[#D21C1C] text-white px-4 py-2 rounded-md">
              Eliminar
            </button>
          </div>
        </main>

        <footer className="bg-[#FF3333] text-white py-4 text-start">
          <p className="px-4">
            Derechos reservados: @Desarrolladores PAUNA 2023
          </p>
        </footer>
      </div>
    </>
  );
};

export default ProfileClient;
