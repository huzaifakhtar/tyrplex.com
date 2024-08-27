"use client";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerSections = [
    { title: 'Who We Are', links: ['Are you a Tyre Dealer?', 'About Us', 'Our Mission'] },
    { title: 'Privacy & Terms', links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'] },
    { title: 'Connect With Us', links: ['Contact Us', 'Career', 'Support'] },
    { title: 'Policies', links: ['Shipping Policy', 'Return Policy', 'Warranty Information'] },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/TP-logo-mbl.png"
            alt="TyrePlex Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm">Your Trusted Tyre Partner</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 fade-in">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-teal-500 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center fade-in">
          <div className="flex justify-center space-x-6 mb-8">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            ©2024 TyrePros Technologies & Commerce Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;