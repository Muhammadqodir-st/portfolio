// next
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-gray-200 py-4">
            <div className="max-w-249.5 w-[90%] m-auto flex items-center justify-between">
                <p className="text-xl font-bold">Muhammadqodir</p>

                <ul className="flex items-center gap-8">
                    <li><Link className="text-gray-600 hover:text-gray-500 transition delay-75" href={'/'}>Home</Link></li>
                    <li><Link className="text-gray-600 hover:text-gray-500 transition delay-75" href={'/'}>About</Link></li>
                    <li><Link className="text-gray-600 hover:text-gray-500 transition delay-75" href={'/'}>Work</Link></li>
                    <li><Link className="text-gray-600 hover:text-gray-500 transition delay-75" href={'/'}>Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}