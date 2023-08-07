'use client'
import { Photo } from "@/src/photos"
import Link from "next/link"
import Image from 'next/image'
// import { useGlitch, GlitchHandle } from 'react-powerglitch'


const FrameList = ({ photos }: { photos: Photo[] }) => {
  // const glitch: GlitchHandle = useGlitch();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-2 m-10">
      {photos.map(({ id, imageSrc }) => (
        <Link key={id} href={`/photos/${id}`}>
          <Image
            alt="GorillaZ"
            src={imageSrc}
            height={500}
            width={500}
            className="w-full object-cover aspect-square"
          />
        </Link>
      ))}
    </div>
  )
}

export { FrameList }