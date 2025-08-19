import React, { useState } from "react";
import { motion } from "motion/react";
import { FloatingNav } from "../components/FloatingNav";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#home" className="navlink">
          home
        </a>
      </li>

      <li className="nav-li">
        <a href="#about" className="navlink">
          About
        </a>
      </li>

      <li className="nav-li">
        <a href="#work" className="navlink">
          Work
        </a>
      </li>

      <li className="nav-li">
        <a href="#Contact" className="navlink">
          Contact
        </a>
      </li>
    </ul>
  );
}

const navItems = [ 
  { name: "Home", link: "#home", icon: "🏠" },
  { name: "About", link: "#about", icon: "ℹ️" },
  { name: "Work", link: "#work", icon: "💼" },
  { name: "Contact", link: "#contact", icon: "✉️" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed inset-x-0 z-20 w-full backdrop-blur-lg 
    bg-primary/40"
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-5 sm:py-3">
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold transition-colors text-neutral-400
           hover:text-white"
          >
            <img
              src="/assets/logos/logo.png"
              className="h-9 w-9 object-c"
              alt="logo"
            />
            Deon
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

       {/* FloatingNav appears on scroll */}
       <FloatingNav navItems={navItems}/>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
