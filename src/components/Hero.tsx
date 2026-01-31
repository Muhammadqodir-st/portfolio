// next
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-full flex items-center justify-between py-2">
            <div className="flex flex-col items-start gap-3">
                <p className="text-lg font-bold">HELLO</p>
                <p className="text-5xl font-bold">I'm <span className="text-orange-500">Muhammadqodir</span></p>
                <p className="text-xl text-orange-500 font-semibold">Frontend developer</p>
                <p className="max-w-120">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi enim tenetur, explicabo nobis temporibus dolore omnis autem earum amet?</p>
                <div className="flex items-center gap-5">
                    <button className="py-2 px-5 rounded-md bg-orange-500 text-white hover:bg-orange-400 cursor-pointer transition-all">About me</button>
                    <button className="py-2 px-5 rounded-md border border-orange-500 text-orange-500 cursor-pointer">About me</button>
                </div>
            </div>

            <div>
                <Image className="w-70 h-70 rounded-full object-cover" src="/assets/hero-image.jpg" alt="hero image" width={300} height={300} />
            </div>
        </div>
    )
}