import React from 'react'
import trafficimg from '../../assets/rafficimg.png'
import './traffic.css'


const Traffic = () => {
  return (
    <section className='lg:py-[111px] py-10'>
        <div className='max-w-[1320px] mx-auto'>
            <div className='flex justify-between flex-wrap'>
                <div className='lg:w-[48%] tra-text pb-10 lg:pb-0 sm:text-center lg:text-start md:text-center'>
                    <h4 className='text-[#7968EF] text-[24px] font-medium pb-[10px]'>Core feature</h4>
                    <h3 className='text-[48px] font-semibold pb-[24px] text-[#29313D]'>Get more traffic</h3>
                    <p className='text-[18px] font-normal lg:w-[550px]  md:pb-10 lg:pb-0 leading-[190%] lg:leading-[200%]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process</p>
                </div>
                <div className='lg:w-[48%]'>
                    <img src={trafficimg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Traffic