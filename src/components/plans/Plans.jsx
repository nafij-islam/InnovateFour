import React from 'react'
import PlanceCard from './PlanceCard';

const Plans = () => {
  return (
    <section>
        <div className='max-w-[1320px] mx-auto'>
            <div className='text-center pb-[60px]'>
                <h4 className='text-[#7968EF] text-[24px] font-medium pb-[14px]'>Our pricing</h4>
                <h3 className='text-[48px] font-semibold text-[#29313D]'>Premium optimization plans</h3>
            </div>
            <div>
                <div className='w-[24%]'>
                     <PlanceCard/>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Plans