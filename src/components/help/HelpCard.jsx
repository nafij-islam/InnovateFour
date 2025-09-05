import React from 'react'
// import aniicon from '../../assets/aniicon.png'

const HelpCard = ({className,cardtext,src,extraSrc}) => {
  return (
    <div className={`relative rounded-[14px] ease-in-out duration-300 group hover:bg-[#F8A64C]   pt-[38px] ${className}`}>
        <div className='flex justify-center'>
            <img src={src} alt="" />
        </div>
        <h3 className='text-center  pt-[30px] text-[24px] font-medium pb-[40px]'>{cardtext}</h3>
        <div className='absolute duration-500 left-[50%] group-hover:bottom-[-60px] group-hover:opacity-100 translate-x-[-50%] bottom-0 opacity-0 '>
            <img  src={extraSrc} alt="" />
        </div>
    </div>
  )
}

export default HelpCard