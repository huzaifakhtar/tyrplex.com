import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-4">
              {['Car Types', 'Bike Types', 'Tyre Pressure', 'Commercial Tyres', 'Accessories', 'More'].map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
              ))}
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
          </nav>
        </header>
  )
}

export default Header
