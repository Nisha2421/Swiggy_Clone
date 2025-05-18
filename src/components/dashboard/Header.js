import { Button } from "../shared/Button";
const AdditonalBtnIcon = () => {
  return (
    <div className="rotate-[-45deg]">
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      aria-label="rating-up-down-icon"
      aria-hidden="false"
      strokecolor="#FFFFFF"
      fillcolor="#FFFFFF"
    >
      <path
        d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
        fill="#FFFFFF"
        fill-opacity="0.92"
      ></path>
    </svg>
    </div>
  );
};
export const Header = () => {
  return (
    <div className="dashboard-header flex ">
      <div className="w-[80%] flex justify-between items-center">
        <a href="/" className="h-[48px] w-[160px]">
          <img
            alt=""
            class=""
            height="100%"
            loading="lazy"
            width="100%"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          ></img>
        </a>
        <div className="gap-[32px] flex justify-center items-center">
          <a className="decoration-none text-white font-Gilroy text-[16px] not-italic font-semibold leading-[21px] tracking-[-0.4px] cursor-pointer z-[100]">
            Swiggy Corporate
          </a>
          <a className="decoration-none text-white font-Gilroy text-[16px] not-italic font-semibold leading-[21px] tracking-[-0.4px] cursor-pointer z-[100]">
            Partner with us
          </a>
          <Button
            name={"Get the App"}
            variant="outline"
            textClassname={""}
            AdditionalIcon={AdditonalBtnIcon}
          />
          <Button
            name={"Sign in"}
            variant="filled"
            textClassname="px-[2rem] py-[0.2rem]"
          />
        </div>
      </div>
    </div>
  );
};
