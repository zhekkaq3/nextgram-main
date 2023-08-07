import swagPhotos from '../photos'
import { FrameList } from '../components/frameList/FrameList'
import LogoIcon from '../picture/logo.svg'

export default function Home() {

  return (
    <main className="container mx-auto">
      <header className="flex items-center justify-center">
        <div className="logo">
          <LogoIcon />
        </div>
        <h1 className="text-center text-4xl font-bold m-10">GORILLAZ</h1>
      </header>
      <div></div>
      <FrameList photos={swagPhotos} />
    </main>
  )
}
