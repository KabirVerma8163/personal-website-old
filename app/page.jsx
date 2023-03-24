"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TypeWriter from './TypeWriter' 
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
  return (
    <main className="h-screen w-screen flex flex-col my-8 mx-12 py-8 px-16">
      <div id="introduction" className="flex flex-col flex-4 py-4 px-4">
        <div id="header" className="flex flex-col py-2 pb-4">
          <h1 className="text-8xl font-bold">Hi, my name is <span className="text-white">Kabir</span></h1>
          <h2 className="text-6xl font-bold">I'm a <TypeWriter strings={strings} colorClass="text-white" /></h2>
        </div>
        <div id="intro-para">
          <p className="text-4xl font-medium text-discordBlue">I'm a student at the University of Waterloo studying Computer Science and Mathematics. I'm passionate about building things that make a difference in the world. I'm currently looking for a co-op position for Summer 2023.</p>
          <p className="text-4xl font-medium text-discordBlue">I love coding and problem-solving. I have worked on many Full-Stack projects before and am currently working my Data Science and Firmware skills. 
          <Link className="text-diffGreen" href="/my-resume"> My Resume!</Link></p>
        </div>

      </div>

      <div id="links" className="flex flex-row flex-2 py-4 px-4 text-white">
        <Card cardId="Github" cardLink="https://github.com/KabirVerma8163" cardImage="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg" cardName="My Github" colorClass="text-white"/>
        {/* <div className="text-white">
        WHAT THE FUCKING FUCK
        </div> */}
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        <Card cardId="" cardLink="" cardImage="/coming_soon.jpg" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/>
        {/* <Card cardId="" cardLink="" cardImage="" cardName="Coming soon" colorClass="bg-grey-500 text-grey-500"/> */}
      </div>
    </main>
  )
}
