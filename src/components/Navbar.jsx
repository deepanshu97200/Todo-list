import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-indigo-500 text-white py-2 px-4'>
      <div className="logo">
        <span className='font-bold text-xl max-8'>
          iTask
        </span>
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>

    </nav>
  )
}

export default Navbar