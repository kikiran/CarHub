import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    isDisabled: boolean;
    btnColor: string;
}

export interface CarProps {
    city_mpg?: number;
    class?: string;
    combination_mpg?: number;
    cylinders?: number;
    displacement?: number;
    drive?: string;
    fuel_type: string;
    highway_mpg?: number;
    make: string;
    model: string;
    transmission?: string;
    year: number;
}