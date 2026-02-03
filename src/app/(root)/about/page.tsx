// next
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title:"About me"
}

export default function Page() {
    return (
        <div>
            <div className="w-full py-10 bg-gray-200">
                <p className="text-center text-4xl font-semibold">ABOUT ME</p>
            </div>

            <div className="max-w-159.5 py-8 m-auto flex flex-col gap-5">
                <p className="text-gray-600 font-semibold">Hello, my name is Muhammadqodir, a Software Engineer from Uzbekistan.</p>

                {/* about IT Park */}
                <div className="flex flex-col gap-5">
                    <Image className="w-full" src="/assets/Itpark.jpg" alt="IT PARK" width={500} height={500} />
                    <p className="text-gray-600 font-semibold">I completed a frontend course at IT PARK School.</p>
                </div>
            </div>
        </div>
    )
}