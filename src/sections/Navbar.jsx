import React, { useState } from 'react'

function Navigation() {
  return (<ul className='nav-ul'>
    <li className='nav-li'>
      <a href="#home" className='navlink'>home</a>
    </li>

    <li className='nav-li'>
      <a href="#about" className='navlink'>About</a>
    </li>

    <li className='nav-li'>
      <a href="#work" className='navlink'>Work</a>
    </li>

    <li className='nav-li'>
      <a href="#Contact" className='navlink'>Contact</a>
    </li>

  </ul>)
}

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg 
    bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href="/" className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
          Deon
          </a>
          <button onClick={() => setIsOpen(!isOpen)}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
          <img src={isOpen? "assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6'/>
          </button>
          <nav>
            <Navigation />
          </nav>
        </div>
      </div>
      </div>
  )
}

export default Navbar