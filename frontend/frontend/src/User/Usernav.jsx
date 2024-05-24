import React from 'react'
import schlogo from '../assets/schlogo.png'


function Usernav() {
    
  return (
    <div>
    <header className="bg-white">
        {/* <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-2"> */}
            <div className="flex h-16 ">
            <div className="px-5 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                <img className="h-8" viewBox="0 0 28 24" fill="none" src={schlogo}/>
                <h1>Elimu Bora</h1>
                </a>
            </div>
            </div>
            {/* </div> */}
        </header>
    </div>
  )
}

export default Usernav