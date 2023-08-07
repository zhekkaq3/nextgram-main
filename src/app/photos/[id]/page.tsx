
import Frame from '@/src/components/frame/Frame'
import photos, { Photo } from '@/src/photos'

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = photos.find((p) => p.id === id)!

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  )
}
