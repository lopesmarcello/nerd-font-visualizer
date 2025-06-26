"use client"
import MacOSTerminal from "@/components/MacOsTerminal";
import { Combobox } from "@/components/ui/combobox";
import {
    Roboto_Mono,
    Inconsolata,
    Source_Code_Pro,
    JetBrains_Mono,
    Anonymous_Pro,
    Space_Mono,
    Martian_Mono,
    Fira_Code,
    Noto_Sans_Mono,
    Courier_Prime,
} from "next/font/google"
import { useState } from "react";

const robotoMono = Roboto_Mono({
    subsets: ['latin']
})

const inconsolata = Inconsolata({
    subsets: ['latin']
})

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin']
})

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})

const anonymousPro = Anonymous_Pro({
    weight: ['400'],
    subsets: ['latin']
})

const spaceMono = Space_Mono({
    weight: ['400'],
    subsets: ['latin']
})

const martianMono = Martian_Mono({
    subsets: ['latin']
})

const firaCode = Fira_Code({
    subsets: ['latin']
})

const notoSansMono = Noto_Sans_Mono({
    subsets: ['latin']
})

const courierPrime = Courier_Prime({
    weight: ['400'],
    subsets: ['latin']
})

export function FontSelector() {
    const [selectedFontClassName, setSelectedFontClassName] = useState(inconsolata.className)

    const options = [
        {
            label: "Roboto Mono",
            value: robotoMono.className
        },
        {
            label: "Inconsolata",
            value: inconsolata.className
        },
        {
            label: "Source Code Pro",
            value: sourceCodePro.className
        },
        {
            label: "JetBrains Mono",
            value: jetBrainsMono.className
        },
        {
            label: "Anonymous Pro",
            value: anonymousPro.className
        },
        {
            label: "Space Mono",
            value: spaceMono.className
        },
        {
            label: "Martian Mono",
            value: martianMono.className
        },
        {
            label: "Fira Code",
            value: firaCode.className
        },
        {
            label: "Noto Sans Mono",
            value: notoSansMono.className
        },
        {
            label: "Courier Prime",
            value: courierPrime.className
        },
    ]
    return (

        <>
            <div className="w-full flex items-center justify-center gap-4 pt-24">
                <p className="text-sm text-white/75">Select a font: </p>
                <Combobox options={options} value={selectedFontClassName} setValue={setSelectedFontClassName} />
            </div>
            <MacOSTerminal fontClassName={selectedFontClassName} />
        </>
    )
}