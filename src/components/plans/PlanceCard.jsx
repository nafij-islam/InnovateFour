import React from "react";

const PlanceCard = ({
  bordercolorClassName,
  topborderClassName,
  headingTextOne,
  headingTextTwo,
  headingTextThree,
  headingoneClassName,
  headingtwoClassName,
  texttwo,
  textTwoClassName,
  textThree,
  textThreeClassName,
  textFour,
  textFourClassName,
  textFive,
  textFiveClassName,
  textSix,
  textSixClassName,
  btnText,
  btnClassName,
  textSeven,
  textSevenClassName,
}) => {
  return (
    <div className={`${bordercolorClassName}`}>
      <div
        className={`w-[95%] flex mx-auto h-[10px] rounded-[40px] ${topborderClassName}`}
      ></div>
      <h3
        className={`text-[24px] pl-3 pb-[73px]  pt-[24px] ${headingoneClassName}`}
      >
        {headingTextOne}
        <span className={`font-medium ${headingtwoClassName}`}>
          {headingTextTwo}
        </span>
        {headingTextThree}
      </h3>
      <h3
        className={`bg-[#F2F7FA] text-[24px]  py-[28px]  pl-[24px] ${textTwoClassName}`}
      >
        {texttwo}
      </h3>
      <h3 className={`text-[24px]  py-[28px]  pl-[24px] ${textThreeClassName}`}>
        {textThree}
      </h3>
      <h3
        className={`bg-[#F2F7FA] text-[24px] py-[28px]  pl-[24px] ${textFourClassName}`}
      >
        {textFour}
      </h3>
      <h3 className={`text-[24px]  py-[28px]  pl-[24px] ${textFiveClassName}`}>
        {textFive}
      </h3>
      <h3
        className={`bg-[#F2F7FA] text-[24px] py-[28px]  pl-[24px] ${textSixClassName}`}
      >
        {textSix}
      </h3>
      <h3 className={`text-[24px] py-[28px]  pl-[24px] ${textSevenClassName}`}>
        {textSeven}
      </h3>
      <button
        className={`w-full py-[38px]  text-white font-semibold ${btnClassName}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default PlanceCard;
