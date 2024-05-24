import React from 'react'
import { useNavigate } from 'react-router-dom'


function Unauthorized() {
    const navigate = useNavigate()
    const handleHome = (()=>{
        navigate('/')

    })
  return (
    <div>
  <div className="grid h-screen place-content-center bg-white px-4">
    <div className="text-center">
      <h1 className="text-9xl font-black text-red-500">401!</h1>

      {/* <p className="text-2xl font-bold tracking-tight text-red-500 sm:text-4xl">Uh-oh!</p> */}

      <p className="mt-4 text-2xl text-gray-500">Unauthorized Access! </p>

      <button
       onClick={handleHome}
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </button>
    </div>
  </div>
</div> 
 )
}

export default Unauthorized