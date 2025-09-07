import React from 'react'
// import aniicon from '../../assets/aniicon.png'

const HelpCard = ({hoverclassName,cardtext,src,overclassName}) => {
  return (
    <div className={`relative rounded-[14px] ease-in-out duration-300 group z-10 pt-[38px] ${hoverclassName}`}>
        <div className='flex justify-center'>
            <img src={src} alt="" />
        </div>
        <h3 className='text-center  pt-[30px]  duration-300 text-[24px] font-medium pb-[40px]'>{cardtext}</h3>
       <div className={`w-[60px] sm:hidden lg:block h-[60px] bottom-3 opacity-0 duration-300 -z-1 group-hover:bottom-[-25px] group-hover:opacity-100 absolute  left-[50%] translate-x-[-50%]  rotate-45 ${overclassName} `}></div>
    </div>
  )
}

export default HelpCard