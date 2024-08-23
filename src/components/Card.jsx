
import React from 'react'

function Card({pokemon}) {
    const{name}=pokemon
    
  return (

    <div className="relative h-[300px] w-[400px] rounded-xl mt-5 ml-5">
  <img
     src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-on-gradient-1600.png"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-bold text-yellow-500">{name}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Made By Siddharth
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      Visit me
    </button>
  </div>
</div>

  )
}

export default Card
