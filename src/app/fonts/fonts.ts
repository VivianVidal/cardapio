import {Poppins, Dancing_Script} from "next/font/google"


export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['400','500','600','700'] 
});

export const dancingScript = Dancing_Script({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dancing-script',
    weight: ['400','500','600','700'] 
});