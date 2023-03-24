import './globals.css'
import Head from 'next/head';
import { Ubuntu } from "next/font/google"

const karla = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'Kabir\'s Website',
  description: 'Made with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  // console.log(montserrat)
  return (
    <html lang="en">
      <Head>
        {/* <title>Kabir's Website</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='h-screen flex justify-center items-center mx-8 my-4 '>
        <div id="text_stuff" className={`${karla.className}`}>
          {children}
        </div>
      </body>
      {/* // border border-black */}
    </html>
  )
}
