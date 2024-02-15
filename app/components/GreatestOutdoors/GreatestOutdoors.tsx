import Image from "next/image"

type GreatestOutdoorsProps = {
    img: string, 
    title: string, 
    desc: string, 
    linkText: string
}

const GreatestOutdoors = ({img, title, desc, linkText}: GreatestOutdoorsProps) => {
  return (
    <div className="container">
        <div className="relative h-96 mi-w-[300px]">
            <Image src={img} alt="greatestOutdoors-image"/>
        </div>
    </div>
  )
}

export default GreatestOutdoors