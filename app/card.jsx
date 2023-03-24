import Link from "next/link"
import Image from "next/image"
import { Lato } from "next/font/google"

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Card({ cardId, cardLink, cardImage, cardName, colorClass }) {
  return (
  <div className="">
  <Link href={cardLink}>
  <div id={cardId} className={"h-full w-full border-none " + colorClass + " "}>
    <div className="cardIcon">
      <Image
        src={cardImage}
        alt={cardName}
        width={500}
        height={500}
        // layout="responsive"
        priority 
      />
    </div>
    <div className="cardText flex justify-center items-center">
      <h1 className={`${lato.className} text-xl p-2`}>
        {cardName}
      </h1>
    </div>
  </div>
  </Link>
  </div>
  )
}