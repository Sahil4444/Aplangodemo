import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white w-full`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
          Home
        </a>
        <div>
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
          >
            Products
            <ChevronDown className={`h-5 w-5 transform ${productsOpen ? "rotate-180" : ""}`} />
          </button>
          {productsOpen && (
            <div className="pl-4">
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Product 1
              </a>
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Product 2
              </a>
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Product 3
              </a>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
          >
            Services
            <ChevronDown className={`h-5 w-5 transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4">
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Service 1
              </a>
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Service 2
              </a>
              <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-sm">
                Service 3
              </a>
            </div>
          )}
        </div>
        <a
          href="/about"
          className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-black hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </a>
        <div className="mt-4 flex flex-col gap-3 items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-30 mb-2">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium w-30">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileDrawer

