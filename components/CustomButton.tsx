import { CustomButtonProps } from "@/types";

const CustomButton = ({ isDisabled, btnColor, btnType, title, handleClick }): CustomButtonProps => (
    <button
        disabled={isDisabled}
        className={btnColor}
        type={btnType}
        onClick={handleClick}
    >{title}</button>
)


export default CustomButton;