import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from 'react-icons/sl';
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <div className='main max-w-6xl mx-auto py-6'>
      <div className="flex flex-wrap lg:grid grid-cols-1 text-center md:grid-cols-3 place-content-center place-items-center gap-3 px-3 ">
        <div className='copy-right'>
            <ul className=' flex flex-wrap m-3 gap-2 justify-center items-center '>
                <li>Privacy Policy</li><div className="text-[#ACACAC]">|</div>
                <li> Terms And Condition </li><div className="text-[#ACACAC]">|</div>
                <li> Contact Us</li>
            </ul>
        </div>
        <div className='copy-right-center'>
            <ul className='flex justify-between items-center gap-2'>
                <li className='border border-border-color rounded-full p-3'><FiFacebook className='w-auto h-5'/></li>
                <li className='border border-border-color rounded-full p-3'><SlSocialTwitter className="w-auto h-5" /></li>
                <li className='border border-border-color rounded-full p-3'><RiInstagramLine className="w-auto h-5" /></li>
                <li className='border border-border-color rounded-full p-3'><SlSocialLinkedin className="w-auto h-5" /></li>
            </ul>
        </div>
        <div>
            <p className='text-sm text-[#ACACAC] tracking-wide'>Copyright All rights reserved © 
            2024
            Doob React Template.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
