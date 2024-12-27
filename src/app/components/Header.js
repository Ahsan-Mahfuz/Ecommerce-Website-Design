import { IoLocationOutline } from 'react-icons/io5'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BiSolidOffer } from 'react-icons/bi'
import { CgMenu } from 'react-icons/cg'
import { PiDotsThreeVertical } from 'react-icons/pi'
import { BsCartDash } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
const Header = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 border p-2 bg-gray-200 text-[14px]">
        <div className="mb-2 sm:mb-0">Welcome to worldwide Megamart!</div>
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-2 items-center">
          <span className="flex items-center">
            <IoLocationOutline />
            <span className="ml-1">Deliver to 423651</span>
          </span>
          <span className="flex items-center">
            <CiDeliveryTruck />
            <span className="ml-1">Track your order</span>
          </span>
          <span className="flex items-center">
            <BiSolidOffer className="text-gray-400" />
            <span className="ml-1">All Offers</span>
          </span>
        </div>
      </div>

      <div className="px-3 flex flex-col xl:flex-row justify-between items-center mt-5 gap-4 sm:gap-0">
        <div className="text-[#008ECC] font-bold flex items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <span className="text-2xl">MegaMart</span>
        </div>

        <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-[#008ECC] "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="w-full sm:w-[350px]"
            placeholder="Search essentials, groceries and more..."
          />
          <CgMenu className="text-[#008ECC] " />
        </label>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
          <div className="flex items-center gap-1">
            <RxPerson className="text-[#008ECC] " />
            <span>Sign Up/Sign In</span>
          </div>
          <div className="flex items-center gap-1">
            <BsCartDash className="text-[#008ECC] " />
            <span>Cart</span>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default Header
