import { StaticImageData } from "next/image";

export interface CardProps {
    title: string;
    subtitle: string;
    btnText: string;
    number: string;
    img: string | StaticImageData;
    btn2Text?: string;
}