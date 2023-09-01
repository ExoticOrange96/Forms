import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Computer Society of India - VIT</title>
        <meta name='CSI-VIT' content='The largest association of computer professionals in India, composed of skilled designers, developers, and tech enthusiasts. Our workshops, conferences, events, and competitions drive technological innovation.' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <Form />
    </div>
  )
}
