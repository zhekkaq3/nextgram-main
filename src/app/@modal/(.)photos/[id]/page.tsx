import Frame from "@/src/components/frame/Frame"
import Modal from "@/src/components/modal/Modal"
import photos, { Photo } from "@/src/photos"

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  
  const photo: Photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
