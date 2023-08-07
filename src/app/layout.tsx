import './global.css'

export const metadata = {
  title: 'Gorilla Next Js',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
}

export default function Layout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html>
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
