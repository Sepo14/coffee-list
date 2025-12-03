'use client';

import Image from "next/image";
import {useMediaQuery} from 'react-responsive';


export function Background() {
    
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="fixed -z-10 h-1/3 w-full">
            <Image src={isMobile ? "/bg-cafe-sm.jpg" : "/bg-cafe-lg.jpg"} alt="Background" layout="fill" />
        </div>
    )
}

export function MainBackground() {
    return (
        <div className="absolute top-10 left-1/2 -z-1">
            <Image 
            src="/vector.svg"
            height={200}
            width={200}
            alt="Background"/>
        </div>
    )
}