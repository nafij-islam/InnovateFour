import React from 'react'
import HelpCard from './HelpCard';
import help1 from '../../assets/helpicon1.png'
import help2 from '../../assets/helpicon2.png'
import help3 from '../../assets/helpicon3.png'
import helpicon from '../../assets/aniicon.png'
import helptimeimg from '../../assets/helptimeimg.png'

const Help = () => {
  return (
   <section className='bg-[#F1FBFB] py-[120px]'>
       <div className='max-w-[1320px] mx-auto'>
          <div className='text-center'>
             <h4 className='text-[24px] font-medium pb-[14px] text-[#7968EF]'>Our process</h4>
             <h2 className='text-[48px] font-semibold pb-[60px]'>How can we help?</h2>
          </div>
          <div className='lg:flex lg:justify-between md:px-3 lg:px-0 sm:px-3 px-3  md:gap-5 md:flex lg:flex-nowrap md:flex-wrap   pb-[100px]'>
              <div className='lg:w-[24%] md:w-[48%]  lg:pb-0 md:pb-0 pb-7'>
                    <HelpCard extraSrc={helpicon} src={help1} cardtext="Real time analytics" className="bg-[#F8A64C]"/>
              </div>
                 <div className='lg:w-[24%]  md:w-[48%]  lg:pb-0 md:pb-0 pb-7'>
                    <HelpCard extraSrc={helpicon}  src={help2} cardtext="Social media stragedy" className="bg-[#F0EDFF]"/>
              </div>
               <div className='lg:w-[24%]  md:w-[48%]  lg:pb-0 md:pb-0 pb-7'>
                    <HelpCard extraSrc={helpicon} src={help3} cardtext="Media management" className="bg-[#E8FCF2]" />
              </div>
               <div className='lg:w-[24%]  md:w-[48%] lg:pb-0 md:pb-0 pb-7'>
                    <HelpCard extraSrc={helpicon} src={help1} cardtext="Reporting & analysis" className="bg-[#FEF6EC]"/>
              </div>
          </div>

          <div className='lg:flex lg:gap-10'>
              <div className='lg:w-[40%] sm:flex justify-center flex pb-10 sm:pb-10 sm:justify-center md:flex md:justify-center md:pb-10 lg:pl-20 lg:pt-10'> 
                  <img src={helptimeimg} alt="" />
              </div>
               <div className='lg:w-[50%] sm:text-center lg:text-start text-center md:text-center'> 
                    <h2 className='pb-[24px] text-[36px] font-semibold'>Real time analytics</h2>
                    <p className='text-[18px] pb-[48px] lg:w-[550px] font-normal leading-[200%]'>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.</p>
                    <button className='py-[30px] text-[18px] font-semibold hover:bg-transparent border-1 duration-300 hover:text-black hover:border-black text-white px-[30px] bg-[#6A55EA] rounded-[20px]'>Analyze website</button>
              </div>
          </div>

       </div>
   </section>
  )
}

export default Help