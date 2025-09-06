import React from 'react'
import CaseCard from './CaseCard';
import nafis from  '../../assets/nafis.png'
import rahat from '../../assets/rahat.png'

const Case = () => {
  return (
    <section className='py-[60px] lg:py-[120px]'>
        <div className='max-w-[1320px] mx-auto'>
            <div className='flex items-center px-3 pb-10 lg:pb-0 sm:pb-10 justify-between'>
                <div className='lg:pb-[60px]'>
                    <h4 className='text-[#7968EF] pb-[14px]'>Our works</h4>
                    <h3 className='text-[48px] font-semibold'>Our case </h3>
                </div>
                <div>

                <button className='border-1 py-3 px-6  lg:py-[10px] lg:px-[30px] rounded-[14px] text-[18px] font-semibold hover:text-white duration-300 hover:bg-[#6A55EA] border-black '>View all</button>
                </div>
            </div>

            <div className='lg:flex  lg:ml-0 md:ml-0 sm:ml-50  lg:justify-between  md:flex px-2  sm:gap-10  md:gap-8 md:justify-between'>
                <div className='lg:w-[30%] pb-4 md:w-[48%] w-[62%]'>
                     <CaseCard heading="Search marketer" pera="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."  src={rahat}/>
                </div>
                 <div className='lg:w-[30%] pb-4 md:w-[48%] w-[62%]'>
                     <CaseCard heading="Watching for trends" pera="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution." src={nafis}/>
                </div>
                 <div className='lg:w-[30%] pb-4 md:mx-auto  lg:mx-0 md:w-[48%] w-[62%]'>
                     <CaseCard heading="Cross over benifits" pera="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution." src={rahat}/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Case