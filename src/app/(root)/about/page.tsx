import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="w-full py-10 bg-gray-200">
                <p className="text-center text-4xl font-semibold">ABOUT ME</p>
            </div>

            <div className="max-w-159.5 py-8 m-auto flex flex-col gap-5">
                <p className="text-gray-600 font-semibold">I am Muhammadqodir, a frontend developer from Uzbekistan. I currently live in the Andijan region of Uzbekistan.</p>

                {/* about IT Park */}
                <div className="flex flex-col gap-5">
                    <Image className="w-full" src="/assets/Itpark.jpg" alt="IT PARK" width={500} height={500} />
                    <p className="text-gray-600 font-semibold">I graduated from the frontend course at IT PARK School. Despite my young age, I have gained enough knowledge. Currently, I teach frontend courses to children at the school where I graduated.</p>
                </div>
            </div>
        </div>
    )
}