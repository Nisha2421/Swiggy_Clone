import classNames from "classnames";
export const Button = ({ name, className, variant, textClassname ,AdditionalIcon}) => {
    console.log("textClassname",textClassname);
    
  return (
    <button
      className={classNames(
        className,
        "h-54px py-[12px] justify-center items-center font-Gilroy text-[16px] not-italic font-semibold leading-[22px] tracking-[-0.4px] cursor-pointer z-[100] gap-[4px] text-white font-Gilroy rounded-[12px] flex px-[12px] ",
        {
          "border outline-white border-solid": variant === "outline",
          "bg-black": variant === "filled"
        }
      )}
    >
      <div className={classNames(textClassname,'leading-[21px] font-extrabold flex')}>{name }{AdditionalIcon?<AdditionalIcon/>:<></>}</div>
    </button>
  );
};
