import React from 'react'

const CaseCard = ({src,heading,pera}) => {
  return (
    <div>
        <div>
            <img className='lg:w-[450px] lg:h-[330px]' src={src} alt="" />
        </div>
        <div>
            <h3 className='text-[28px] font-medium pt-[24px] pb-[14px]'>{heading}</h3>
            <p className='text-[18px] font-normal'>{pera}</p>
        </div>
    </div>
  )
}

export default CaseCard