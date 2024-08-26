import React from 'react'

function Footer() {
  return (
       <footer className="bg-gray-100 mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <h3 className="font-bold mb-2">Who We Are</h3>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Are you a Tyre Dealer?</a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Privacy Policy</h3>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Terms of use</a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact Us</h3>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Career</a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Shipping & Return Policy</h3>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
              ©2024 TyrePros Technologies & Commerce Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </footer>
  )
}

export default Footer
