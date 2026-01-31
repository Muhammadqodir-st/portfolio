// lucide
import { Github, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-4 bg-gray-100">
            <div className="max-w-249.5 w-[90%] m-auto flex items-center justify-between">
                <p className="text-gray-600">© 2026 / Muhammadqodir Ma'murjonov</p>

                <div className="flex items-center gap-4">
                    <Link href={'https://github.com/Muhammadqodir-st'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="GitHub"><Github size={23} /></Link>
                    <Link href={'https://t.me/mukhamadqodir'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="Telegram"><Send size={23} /></Link>
                    <Link href={'https://mamurjonov.muhammadqodir01@gmail.com'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="Mail"><Mail size={23} /></Link>
                </div>
            </div>
        </footer>
    )
}