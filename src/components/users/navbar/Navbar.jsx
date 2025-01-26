import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import Dropdown from "./Dropdown"
import MobileDrawer from "./MobileDrawer"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="/" className="text-gray-800 hover:text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <Dropdown title="Products" items={["Product 1", "Product 2", "Product 3"]} />
                <Dropdown title="Solutions" items={["Solutions 1", "Solutions 2", "Solutions 3"]} />
                <a
                  href="/about"
                  className="text-gray-800 hover:text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-gray-800 hover:text-black hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mr-2">
              Login
            </button>
            <button className="bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Register
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}

export default Navbar

