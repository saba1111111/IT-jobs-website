import Image from 'next/image';

import {BsLinkedin} from "react-icons/bs"
import {GrFacebook} from 'react-icons/gr'
function Footer() {
  return (
    <div className='w-[100%] min-h-[100px] border-t-[1px] border-r-gray-900 mt-[70px]  ' >
        <div className='flex justify-end mt-[30px] mr-[5%] '>
        <a href='https://www.linkedin.com/in/saba-pachulia-2bb368229/' target="_blank"> <BsLinkedin className='w-[40px] h-[40px] mr-[10px] cursor-pointer' /></a> 
        <a href='https://www.facebook.com/pachulia.saba' target="_blank">  <GrFacebook className='w-[40px] h-[40px] cursor-pointer'  /> </a> 
      </div>
    </div>
  )
}

export default Footer
