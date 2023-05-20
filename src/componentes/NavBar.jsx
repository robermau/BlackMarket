import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link as LinkRouter} from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/about', current: false },
  { name: 'About us', href: '/contact', current: false },
  { name: 'Contact', href: '/prueba', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// bg-gray-900
export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-east-bay-900  bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                  
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500.45 168.72" class="w-36 max-w-36 max-h-36 fill-white"><path d="M221.33 166.32V.72h63.6c29.04 0 49.2 18.72 49.2 45.36 0 14.16-6.96 27.12-19.44 34.08 16.56 6.24 26.16 20.4 26.16 38.88 0 27.84-19.68 47.28-49.68 47.28h-69.84zm27.6-95.52h33.12c15.12 0 24.72-9.12 24.72-22.8s-9.6-23.04-24.72-23.04h-33.12V70.8zm0 71.28h36.48c16.8 0 27.84-9.36 27.84-24s-11.04-24-27.84-24h-36.48v48zm103.52-35.28c0-34.8 25.92-61.92 60-61.92 16.8 0 30.96 6.72 39.84 18.24V47.28h25.44v119.04h-25.44v-15.84c-8.64 11.52-23.04 18.24-39.84 18.24-34.08 0-60-27.12-60-61.92zm98.88 0c0-21.36-15.12-36.96-36-36.96s-36.24 15.6-36.24 36.96 15.36 36.72 36.24 36.72 36-15.36 36-36.72zm40.99 0c0-34.8 27.12-61.92 62.64-61.92 29.28 0 49.2 18 56.64 36.96l-24.96 9.6c-4.8-12.48-17.04-21.6-31.68-21.6-20.88 0-36 16.08-36 36.96s15.36 36.96 36 36.96c14.88 0 26.88-8.88 31.68-21.36l24.96 9.36c-7.44 19.2-27.36 36.96-56.64 36.96-35.52 0-62.64-27.12-62.64-61.92zm136.32 59.52V.72h26.64v99.36l46.56-52.8h31.44l-49.44 56.88 51.6 62.16h-32.4l-47.76-56.64v56.64h-26.64zm143.41-.03V0h33.23l58.09 109.65L921.21 0h32.49v166.29h-27.32V46.99L873.46 147h-21.17L799.37 46.99v119.29h-27.32zm196.29-59.52c0-34.8 25.92-61.92 60-61.92 16.8 0 30.96 6.72 39.84 18.24V47.25h25.44v119.04h-25.44v-15.84c-8.64 11.52-23.04 18.24-39.84 18.24-34.08 0-60-27.12-60-61.92zm98.88 0c0-21.36-15.12-36.96-36-36.96s-36.24 15.6-36.24 36.96 15.36 36.72 36.24 36.72 36-15.36 36-36.72zm44.72 59.52V47.25h25.44v16.56c6.72-10.32 18-16.56 34.8-16.56h8.16v26.64h-11.28c-21.6 0-30.48 11.76-30.48 30.24v62.16h-26.64zm83.52 0V.68h26.64v99.37l46.56-52.8h31.44l-49.44 56.88 51.6 62.16h-32.4l-47.76-56.64v56.64h-26.64z"></path><path d="M1295.98 106.77c0-34.8 26.64-61.92 60.48-61.92s59.52 25.92 59.52 61.2c0 2.88 0 6-.48 8.88h-93.12c3.12 19.44 16.56 30.48 35.28 30.48 14.4 0 25.44-7.2 31.68-18l22.08 12.48c-12 18-30.72 28.8-53.76 28.8-35.04 0-61.68-27.36-61.68-61.92zm27.12-11.28h66c-2.4-16.08-14.88-27.6-32.88-27.6-16.56 0-29.28 10.32-33.12 27.6zm159.11 70.8c-27.12 0-40.08-11.76-40.08-36.48V71.73h-19.68V47.25h13.68c3.6 0 6-2.4 6-6.72V17.48h26.64v29.76h31.68v24.48h-31.68v55.44c0 9.36 4.56 14.16 15.36 14.16h16.32v24.96h-18.24zM167.45.72H14.55C6.51.72 0 7.21 0 15.23v136.58c0 8.02 6.51 14.51 14.55 14.51h152.9c8.03 0 14.55-6.5 14.55-14.51V15.23C182 7.22 175.49.72 167.45.72zM99.14 133.69H69.13c-.96 0-1.87-.38-2.55-1.06L18.54 84.59c-.59-.59-.59-1.55 0-2.15L66.58 34.4c.68-.68 1.59-1.06 2.55-1.06h30.01c.82 0 1.23.99.65 1.56L52.25 82.44c-.59.59-.59 1.55 0 2.15l47.54 47.54c.58.58.17 1.56-.65 1.56zm16.04-49.1l47.54 47.54c.58.58.17 1.56-.65 1.56h-30.01c-.96 0-1.87-.38-2.55-1.06L81.47 84.58c-.59-.59-.59-1.55 0-2.15l48.04-48.04c.68-.68 1.59-1.06 2.55-1.06h30.01c.82 0 1.23.99.65 1.56l-47.54 47.54c-.59.59-.59 1.55 0 2.15z"></path></svg>
                  
                 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div> */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
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
  )
}
