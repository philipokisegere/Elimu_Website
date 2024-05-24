import React from 'react'
import schlogo from '../assets/schlogo.png'


function Nav() {
  return (
    <div>
    <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <img className="h-8" viewBox="0 0 28 24" fill="none" src={schlogo}/>
                </a>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/academics"> Academics </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/news"> News and Updates </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/staff"> Our Team</a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/programmes"> Our Programmes </a>
                    </li>

                    <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/payments"> Payments </a>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="signin"
                >
                    Login
                </a>

                <div className="hidden sm:flex">
                    <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/signup"
                    >
                    Register
                    </a>
                </div>
                </div>

                <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Nav