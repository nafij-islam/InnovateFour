import React from 'react'
import logo2 from '../../assets/Logo2.png'



export const Footer = () => {
  return (
    <section className='md:px-3'>
        <div className='max-w-[1320px] mx-auto'> 
            <div className='lg:flex lg:justify-between md:flex flex sm:block justify-between pb-[80px]'>
                <div className='lg:w-[45%]'>   
                    <img src={logo2} alt="" />
                    <p className='pt-[44px] lg:w-[420px] md:w-[300px] sm:w-[460px]  text-[18px] font-normal'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-[24px] font-semibold text-[#29313D] pb-[48px]'>Features</h3>
                    <ul>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Home</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>About</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Benifit</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Pricing</li>
                        <li className='text-[20px] font-semibold  text-[#29313D]'>Blog</li>
                    </ul>
                </div>
                <div className='lg:w-[20%]'>
                    <h3 className='text-[24px] font-semibold text-[#29313D] pb-[48px]'>Products</h3>
                    <ul>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Task Management</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Company growth</li>
                        <li className='text-[20px] font-semibold pb-[30px] text-[#29313D]'>Time tracking</li>
                    </ul>

                </div>
                <div className='lg:w-[20%]'>
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
        </div>
    </section>
  )
}
