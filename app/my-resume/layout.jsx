import './../globals.css'
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
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${karla.className} h-screen flex justify-center items-center mx-8 my-4`}>
        {children}
      </body>
      {/* // border border-black */}
    </html>
  )
}
