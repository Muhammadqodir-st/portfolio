"use client"

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    // path
    const pathname = usePathname()

    return (
        <header className="w-full py-6 sticky top-0 bg-white/20 backdrop-blur-xs">
            <div className="max-w-249.5 w-[90%] m-auto flex items-center justify-between">
                <p className="text-2xl font-bold"><Link href={'/'}>Muhammadqodir</Link></p>

                <ul className="flex items-center gap-7">
                    <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/' ? "text-gray-800" : "text-gray-500"}`} href={'/'}>Home</Link></li>
                    <li><Link className={`text-gray-600 hover:text-gray-500 transition delay-75 text-lg ${pathname === '/about' ? "text-gray-800" : "text-gray-500"}`} href={'/about'}>About</Link></li>
                </ul>
            </div>
        </header>
    )
}