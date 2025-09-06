import React from 'react'
import logo2 from '../../assets/Logo2.png'



export const Footer = () => {
  return (
    <section className='px-2 py-8'>
        <div className='max-w-[1320px] mx-auto'> 
            <div className='lg:flex lg:justify-between md:flex  flex-wrap  sm:flex sm:flex-wrap  pb-[80px]'>
                <div className='lg:w-[45%] md:w-[30%] sm:w-[40%] w-[50%] lg:pb-0 sm:pb-0 md:pb-0 pb-5'>   
                    <img src={logo2} alt="" />
                    <p className='pt-[44px] lg:w-[420px]  sm:w-[220px]  text-[18px] font-normal'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className='lg:w-[15%] sm:w-[30%] md:w-[20%] w-[40%%]  '>
                    <h3 className='text-[24px] font-semibold text-[#29313D] pb-[48px]'>Features</h3>
                    <ul>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Home</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>About</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Benifit</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Pricing</li>
                        <li className='text-[20px] font-semibold  text-[#29313D]'>Blog</li>
                    </ul>
                </div>
                <div className='lg:w-[20%] sm:w-[30%] md:w-[25%] w-[60%]'>
                    <h3 className='text-[24px] font-semibold text-[#29313D] pb-[48px]'>Products</h3>
                    <ul>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Task Management</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Company growth</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Time tracking</li>
                    </ul>

                </div>
                <div className='lg:w-[20%] md:w-[15%] w-[40%]'>
                    <h3 className='text-[24px] font-semibold text-[#29313D] pb-[48px]'>Support</h3>
                    <ul>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Customer service</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Accessibility</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Contact us</li>
                    </ul>

                </div>

            </div>
            <div>
                
            </div>
            <div className='flex justify-between'>
                <h4>@20201 Innovate.All rights reserved.</h4>

                <div className='flex lg:gap-8 md:gap-6 sm:gap-4 gap-4'>
                    <h4>Privacy policy</h4>
                    <h4>Terms & condition</h4>

                </div>

            </div>
        </div>
    </section>
  )
}
