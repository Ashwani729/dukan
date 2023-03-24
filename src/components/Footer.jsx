import React,{Fragment} from 'react'

import { India, Logo } from './SVGs'
import { footers1,  footers2, social } from "../data";

const Footer = () => {
    
  return (
    <div className=' h-[344px] bg-[#1A181E] mt-20'>
        <div className='flex justify-between  w-[1120px] mx-auto'>
            <div className='pt-[64px]'>
                <Logo/>
            </div>
            <div className='  pl-[132px] pt-[64px] w-[800px] Info'>
                <div className='grid grid-cols-4 pb-8 '>
                    {footers1.map((title)=>(
                        <div className=''><p className='  text-lg text-[#FFFFFF]'>{title.title}</p></div>
                    ))}
                   
                    
                </div>
                <div className='grid grid-cols-4'>
                {footers2.map((title)=>(
                        <div className=''><p className='text-lg text-[#FFFFFF]'>{title.title==="Jobs"?<Fragment><div className='flex'><p className='text-lg text-[#FFFFFF]'>Jobs</p>  <p className="flex items-center justify-center w-6 h-6 text-sm text-[#1A181E] rounded-full  bg-white">
                        3
                      </p></div></Fragment>:title.title}</p></div>
                    ))}
                </div>
            </div>
            <div className='flex-rows ppr-[15px] pt-[64px] pb-8'>
            {social.map((title)=>(
                        <div className='pb-8 '><p className='text-lg text-[#FFFFFF]'>{title.title}</p></div>
                    ))}
            </div>
        </div>
        <hr className="text-[#FFFFFF] w-[1120px] mx-auto relative " />
        <div className='  flex w-[1120px] justify-between mx-auto mt-6 mb-6'>
            <div className=''><p className='text-[#FFFFFF]  text-sm'> Dukaan 2020, All rights reserved</p></div>
            <p className='text-sm flex text-[#FFFFFF]'>Made in  &nbsp; <India/> </p>
        </div>
        
      
    </div>
  )
}

export default Footer
