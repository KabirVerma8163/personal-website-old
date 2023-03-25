"use client"

import { Inter } from 'next/font/google'
import TypeWriter from './typewriter' 
import Link from 'next/link'
import Card from './card'

const strings = [
  'Student',
  'Developer',
  'Communicator',
  'Collaborator',
]

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let main_smCSS = "sm:my-1 sm:mx-2"
  let main_lgCSS = "lg:my-2 lg:mx-12 lg:py-4 lg:px-16"
  return (
    <main className="h-screen w-screen flex flex-col ">
      <div id="introduction" className={`flex flex-col flex-6 px-4 ${main_lgCSS} ${main_smCSS}`}>
        <div id="header" className="flex flex-col py-2 pb-4">
          <h1 className="lg:text-8xl md:text-4xl text-3xl font-bold">Hi, my name is <span className="text-white">Kabir</span></h1>
          <h2 className="lg:text-6xl md:text-3xl text-2xl font-bold">I'm a <TypeWriter strings={strings} colorClass="text-white" /></h2>
        </div>
        <div id="intro-para" className="lg:text-4xl lg:mt-2 font-medium lg:text-justify text-discordBlue">
          <p >I'm a student at the University of Waterloo studying Computer Science and Mathematics. I'm passionate about building things that make a difference in the world. I'm currently looking for a co-op position for Summer 2023.</p>
          <p >I love coding and problem-solving. I have worked on many Full-Stack projects before and am currently working my Data Science and Firmware skills. 
          <Link className="text-diffGreen" href="/my-resume"> My Resume!</Link></p>
        </div>

      </div>

      <div id="links" className="flex flex-row flex-4 lg:px-8 text-white">
        <Card cardId="Github" cardLink="https://github.com/KabirVerma8163" cardImage="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg" cardName="My Github" colorClass="text-white"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        {/* <Card cardId="" cardLink="" cardImage="" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/> */}
      </div>
    </main>
  )
}
