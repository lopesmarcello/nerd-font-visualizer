import { FontSelector } from "@/components/FontSelector";
import { GradientTitle } from "@/components/GradientTitle";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({
  subsets: [
    "latin"
  ]
})

export default function Home() {

  return (
    <div className={`flex flex-col items-center justify-between ${inter.className}`} >
      <GradientTitle />
      <FontSelector />
      <p className="text-muted text-center">All fonts are provided by
        {" "}
        <Link className="underline" href="https://fonts.google.com/" target="_blank">
          Google Fonts
        </Link>
      </p>
    </div>
  );
}
