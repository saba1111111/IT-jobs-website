import logo from "../public/assets/jobs.png"
import Image from 'next/image';
import Link from "next/link"
// import open from "../public/assets/open.svg"
// import close from "../public/assets/close.svg"
import { Fragment, useState } from "react";
const Layout = () => {
  const [hamburrger,setHamburger] = useState(false);
  return (
    <div className={` ${hamburrger && 'mb-[201px] bg-black z-[200]'}`}>
    <div className={`border-b-[1px] flex justify-between pl-[2%] z-[200] bg-white ${hamburrger ? 'fixed top-0 w-[100%]' : 'static'}`} >
      <div className="w-[110px] h-[100px] animation cursor-pointer">
								<Image layout="fixed" width={110} height={100} src={logo} alt="logo" />
    </div>
            <div className="hidden justify-center items-center text-black font-bold w-[50%] text-[20px] lg:flex Secondanimation">
        <Link href="/">
        <p className="mr-[5%] hover:underline cursor-pointer">All jobs</p>
        </Link>
       <Link href="/AddJobs">
        <p className="mr-[5%] hover:underline cursor-pointer">Add New jobs</p>
        </Link>
        <Link href="/About">
        <p className=" hover:underline cursor-pointer">About the site</p>
        </Link>
        </div>
        
        <div onClick={() => {setHamburger(!hamburrger); window.scrollTo(0, 0)}} className="w-[90px] h-[100px] cursor-pointer bg-black grid place-content-center lg:hidden">
        <div
						className={`w-[35px] h-[4px] mb-2 bg-white ${
							hamburrger ? 'rotate-45 translate-x-[3px] translate-y-[9px]' : ''
						} ease-in-out duration-500`}
					></div>
					<div
						className={`w-[35px] h-[4px] mb-2 bg-white ease-in-out duration-500 ${
							hamburrger ? 'opacity-0' : 'opacity-100'
						}`}
					></div>
					<div
						className={`w-[35px] h-[4px] bg-white ${
							hamburrger ? 'rotate-[-45deg] translate-x-[2px] translate-y-[-14px]' : ''
						} ease-in-out duration-500`}
					></div>
            </div>
    </div>
     
      <div style={{height: hamburrger ? 'calc(100vh - 100px)' : '0%'}} className="fixed top-[100px] left-0 w-[100%] h-[100%] bg-gray-300 animation-hamb  ease-in-out duration-500 z-[100]">
          <div className=" flex flex-col  items-start text-black font-bold w-[100%] h-[50%] text-[20px] p-[30px] ease-in-out duration-500" style={{opacity: hamburrger ? '1' : '0'}}>

        <Link href="/">
        <p onClick={() => setHamburger(false)} className="mr-[5%] hover:underline cursor-pointer">All jobs</p>
        </Link>
        <Link href="/AddJobs">
        <p onClick={() => setHamburger(false)} className="cursor-pointer hover:underline mr-[5%] mt-[20px]">Add New jobs</p>
        </Link>
        <Link href="/About">
        <p onClick={() => setHamburger(false)} className="cursor-pointer hover:underline mt-[20px]">About the site</p>
        </Link>

        </div>
      </div>
    
    </div>
  )
}

export default Layout
