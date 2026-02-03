"use client"

// next
import Image from "next/image"

// react
import { useState } from "react"
import ButtonLoader from "./loaders/ButtonLoader"


export default function ImageLoader({ className, src, alt, width, height }: { className: string, src: string, alt: string, width: number, height: number }) {

    const [imageLoader, setImageLoader] = useState(true)

    return (
        <div>
            {imageLoader &&
                <div className="w-full h-full absolute top-0 flex items-center justify-center">
                    <ButtonLoader />
                </div>
            }

            <Image className={className} src={src} alt={alt} width={width} height={height} loading="lazy" onLoad={() => setImageLoader(false)} />
        </div>
    )
}