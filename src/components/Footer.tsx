// lucide
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full py-6">
            <div className="max-w-249.5 w-[90%] m-auto flex items-center justify-between">
                <p className="text-gray-600">© 2026 / Muhammadqodir</p>

                <div className="flex items-center gap-4">
                    <Link href={'https://github.com/Muhammadqodir-st'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="GitHub"><Image className="w-7 h-7" src="/assets/git.svg" alt="gitHub" width={100} height={100}/></Link>
                    <Link href={'https://t.me/mukhamadqodir'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="Telegram"><Image className="w-7 h-7" src="/assets/tg.svg" alt="telegram" width={100} height={100}/></Link>
                    <Link href={'https://mamurjonov.muhammadqodir01@gmail.com'} className="py-1 px-1 cursor-pointer rounded-lg text-gray-600" title="Mail"><Image className="w-7 h-7" src="/assets/mail.svg" alt="mail" width={100} height={100}/></Link>
                </div>
            </div>
        </footer>
    )
}