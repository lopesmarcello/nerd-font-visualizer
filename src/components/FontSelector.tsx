"use client"

import MacOSTerminal from "@/components/MacOsTerminal";
import { Combobox } from "@/components/ui/combobox";
import { NerdFont } from "@/types";
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
import Link from "next/link";
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
    const [selectedFont, setSelectedFont] = useState<NerdFont>({
        label: "Roboto Mono",
        className: robotoMono.className,
        url: "https://fonts.google.com/specimen/Roboto+Mono"
    })

    const options: NerdFont[] = [
        {
            label: "Roboto Mono",
            className: robotoMono.className,
            url: "https://fonts.google.com/specimen/Roboto+Mono"
        },
        {
            label: "Inconsolata",
            className: inconsolata.className,
            url: "https://fonts.google.com/specimen/Inconsolata"
        },
        {
            label: "Source Code Pro",
            className: sourceCodePro.className,
            url: "https://fonts.google.com/specimen/Source+Code+Pro"
        },
        {
            label: "JetBrains Mono",
            className: jetBrainsMono.className,
            url: "https://fonts.google.com/specimen/JetBrains+Mono"
        },
        {
            label: "Anonymous Pro",
            className: anonymousPro.className,
            url: "https://fonts.google.com/specimen/Anonymous+Pro"
        },
        {
            label: "Space Mono",
            className: spaceMono.className,
            url: "https://fonts.google.com/specimen/Space+Mono"
        },
        {
            label: "Martian Mono",
            className: martianMono.className,
            url: "https://fonts.google.com/specimen/Martian+Mono"
        },
        {
            label: "Fira Code",
            className: firaCode.className,
            url: "https://fonts.google.com/specimen/Fira+Code"
        },
        {
            label: "Noto Sans Mono",
            className: notoSansMono.className,
            url: "https://fonts.google.com/specimen/Noto+Sans+Mono"
        },
        {
            label: "Courier Prime",
            className: courierPrime.className,
            url: "https://fonts.google.com/specimen/Courier+Prime"
        },
    ]

    return (
        <>
            <div className="w-full flex items-center justify-center gap-4 pt-24">
                <p className="text-sm text-white/75">Select a font: </p>
                <Combobox options={options} value={selectedFont} setValue={setSelectedFont} />
            </div>

            <MacOSTerminal fontClassName={selectedFont.className} />

            <Link
                className="group relative inline-block text-sm font-medium text-zinc-800 focus:ring-3 focus:outline-hidden my-8"
                href={selectedFont.url}
                target="_blank"
            >
                <span className="absolute inset-0 border border-current"></span>
                <span
                    className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                >
                    Check{" "}
                    <span className="font-bold">
                        {selectedFont.label}
                    </span>
                    {" "}
                    on Google Fonts
                </span>
            </Link>
        </>
    )
}