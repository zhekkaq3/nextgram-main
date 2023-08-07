import { StaticImageData } from 'next/image'
import gorilla1 from './picture/gorilla.jpg'
import gorilla2 from './picture/gorilla2.jpg'
import gorilla3 from './picture/gorilla3.jpg'
import gorilla4 from './picture/gorilla5.webp'
import gorilla5 from './picture/gorilla6.jpg'
import gorilla6 from './picture/gorilla7.jpg'
import gorilla7 from './picture/gorilla8.jpg'




export type Photo = {
  id: string
  name: string
  href: string
  username: string
  imageSrc: StaticImageData
}

const photos: Photo[] = [
  {
    id: '1',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla1,
  },
  {
    id: '2',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla2,
  },
  {
    id: '3',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla3,
  },
  {
    id: '4',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla4,
  },
  {
    id: '5',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla5,
  },
  {
    id: '6',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla6,
  },
  {
    id: '7',
    name: 'Kevin Canlas',
    href: '/',
    username: '@zhekkaq3',
    imageSrc: gorilla7,
  },
  
];

export default photos;
