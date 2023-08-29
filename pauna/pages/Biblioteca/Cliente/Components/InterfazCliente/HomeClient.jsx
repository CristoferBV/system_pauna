import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../../../public/LOGO-UNA.png';
import Image from 'next/image';
import Link from 'next/link';



const HomeClient = () => {

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
        <header className="bg-[#CD3E3E] rounded-xl text-white py-5 md:py-7 absolute z-50 w-full md:w-4/5 lg:w-3/4 xl:w-5/6 left-1/2 transform -translate-x-1/2 md:top-36 lg:top-44 xl:top-48 md:h-52 lg:h-58 md:top-[calc(50% + 4rem)] xl:top-[calc(50% + 6rem)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-6 md:mt-11">Bienvenido al apartado biblioteca</h1>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Elija algunos de los servicios!!</h2>
            </div>
          </div>
        </header>
        <main className="main-bg min-h-screen flex-grow relative z-0">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* El cuerpo de la Home */}
          </div>
        </main>
        <footer className="bg-[#FF3333] text-white py-4 text-start">
          <p>Derechos reservados: @Desarrolladores PAUNA 2023</p>
        </footer>
      </div>
    </>
  );
};

export default HomeClient
