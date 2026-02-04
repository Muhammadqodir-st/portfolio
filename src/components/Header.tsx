"use client"

import { Menu, X } from "lucide-react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {

    // path
    const pathname = usePathname()

    // state
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className={`w-full py-6 sticky top-0 bg-white/20 backdrop-blur-xs ${open ? 'shadow-2xs' : 'shadow-none'}`}>
            <div className="max-w-249.5 w-[90%] m-auto flex items-center justify-between">
                <p className="text-2xl font-bold"><Link href={'/'}>Muhammadqodir</Link></p>

                <ul className="flex items-center gap-7 max-[650px]:hidden">
                    <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/' ? "text-gray-800" : "text-gray-500"}`} href={'/'}>Home</Link></li>
                    <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/about' ? "text-gray-800" : "text-gray-500"}`} href={'/about'}>About</Link></li>
                </ul>

                <button onClick={() => setOpen(true)} className={`min-[650px]:hidden ${open ? 'hidden' : 'block'}`}><Menu size={28} strokeWidth={1.30} /></button>
                <button onClick={() => setOpen(false)} className={`min-[650px]:hidden ${!open ? 'hidden' : 'block'}`}><X size={28} strokeWidth={1.30} /></button>
            </div>

            {open &&
                <div className="w-full absolute top-full shadow-md">
                    <ul className="w-[90%] py-3 flex flex-col items-start gap-3 m-auto">
                        <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/' ? "text-gray-800" : "text-gray-500"}`} href={'/'}>Home</Link></li>
                        <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/about' ? "text-gray-800" : "text-gray-500"}`} href={'/about'}>About</Link></li>
                    </ul>
                </div>
            }
        </header>
    )
}