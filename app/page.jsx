"use client"

import { Inter } from 'next/font/google'
import TypeWriter from './typewriter' 
import Link from 'next/link'
import Card from './card'

const strings = [
  'Student',
  'Developer',
  'Collaborator'
  // 'Communicator',
]

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let main_smCSS = "flex-5 pb-2 sm:mb-2 sm:mx-2 "
  let main_lgCSS = "lg:flex-5 lg:my-1 lg:mx-12 lg:py-4 lg:px-16 lg:px-4"
  return (
    <main className="h-screen w-screen flex flex-col lg:m-0 m-2">
      <div id="introduction" className={`flex flex-col ${main_lgCSS} ${main_smCSS}`}>
        <div id="header" className="flex flex-col py-2 pb-4">
          <h1 className="lg:text-8xl md:text-4xl text-3xl font-bold">Hi, my name is <span className="text-white">Kabir</span></h1>
          <h2 className="lg:text-6xl md:text-3xl lg:pt-2 lg:pl-1 pt-3 text-2xl font-bold">I'm a <TypeWriter strings={strings} colorClass="text-white" /></h2>
        </div>
        <div id="intro-para" className="lg:text-4xl lg:mt-4 font-medium text-discordBlue">
          <p className='lg:mx-4 lg:mt-4 lg:mb-1 mx-1 leading-normal '>As a Computer Science student @ UWaterloo I want to build technology that has an impact. I love networking, coding and problem-solving. Having worked on many Full-Stack projects, I am currently exploring Data Science and Firmware. I'm looking for a co-op position for Summer 2023. 
          <Link className="text-diffGreen" href="/my-resume"> My Resume!</Link></p>
        </div>

      </div>

      <div id="links" className="flex flex-row flex-4 lg:pt-7 lg:px-14 lg:mx-10 text-white">
        <Card cardId="Github" cardLink="https://github.com/KabirVerma8163" cardImage="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg" cardName="My Github" colorClass="text-white"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        {/* <Card cardId="" cardLink="" cardImage="" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/> */}
      </div>
    </main>
  )
}
