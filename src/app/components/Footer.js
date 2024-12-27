import React from 'react'
import { RiAppleLine } from 'react-icons/ri'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className="text-white bg-[#008ECC]">
      <footer className="footer p-10">
        <nav>
          <p className="text-3xl font-bold">MegaMart</p>
          <p>Contact Us</p>
          <div className="flex gap-2 items-center justify-center">
            <FaWhatsapp className="text-2xl" />
            <div>
              <p className="text-white">WhatsApp</p>
              <p>+880 111 222 3333</p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <IoCallOutline className="text-2xl" />
            <div>
              <p className="text-white">Call Us</p>
              <p>+880 111 222 3333</p>
            </div>
          </div>
          <p>Download App</p>
          <div className="flex gap-2">
            <div className="border p-2 flex items-center justify-center bg-black rounded-md gap-2">
              <RiAppleLine className="text-3xl" />
              <div>
                <p>Download on the</p>
                <p className="text-xl">App Store</p>
              </div>
            </div>
            <div className="border p-2 flex items-center justify-center bg-black rounded-md gap-2">
              <IoLogoGooglePlaystore className="text-3xl" />
              <div>
                <p>Download on the</p>
                <p className="text-xl">Play Store</p>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="underline underline-offset-8 text-xl">
            Most Popular Categories
          </h6>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a className="link link-hover">About us</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
            <li>
              <a className="link link-hover">Jobs</a>
            </li>
            <li>
              <a className="link link-hover">Press kit</a>
            </li>
            <li>
              <a className="link link-hover">Careers</a>
            </li>
            <li>
              <a className="link link-hover">Support</a>
            </li>
            <li>
              <a className="link link-hover">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="underline underline-offset-8 text-xl">
            Customer Services
          </h6>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a className="link link-hover">Press kit</a>
            </li>
            <li>
              <a className="link link-hover">Careers</a>
            </li>
            <li>
              <a className="link link-hover">Support</a>
            </li>
            <li>
              <a className="link link-hover">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </footer>
      <div className="bg-[#0077b6] text-center p-4">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME
          Industries Ltd
        </p>
      </div>
    </div>
  )
}

export default Footer
