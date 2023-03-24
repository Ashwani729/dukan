import React from 'react'
import { Logo } from './SVGs'
import { footers1,  footers2, social } from "../data";

const Footer = () => {
    
  return (
    <div className='flex h-[283px] bg-[#1A181E] mt-20'>
        <div className='flex justify-between  w-[1120px] mx-auto'>
            <div className='pt-[64px]'>
                <Logo/>
            </div>
            <div className='  pl-[132px] pt-[64px] w-[800px] Info'>
                <div className='grid grid-cols-4 pb-8 '>
                    {footers1.map((title)=>(
                        <div><p className=' text-[#FFFFFF]'>{title.title}</p></div>
                    ))}
                   
                    
                </div>
                <div className='grid grid-cols-4'>
                {footers2.map((title)=>(
                        <div><p className=' text-[#FFFFFF]'>{title.title}</p></div>
                    ))}
                </div>
            </div>
            <div className='flex-rows ppr-[15px] pt-[64px] pb-8'>
            {social.map((title)=>(
                        <div><p className=' text-[#FFFFFF]'>{title.title}</p></div>
                    ))}
            </div>
        </div>
      
    </div>
  )
}

export default Footer
