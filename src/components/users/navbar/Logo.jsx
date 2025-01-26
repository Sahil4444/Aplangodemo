import React from "react"
import logo from "../../../assets/logo.png"

const Logo = () => {
  return (
    <a href="/" className="flex-shrink-0">
      <img className="h-9 w-auto" src={logo} alt="Your Company" />
    </a>
  )
}

export default Logo

