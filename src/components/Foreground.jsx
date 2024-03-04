import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref=useRef(null);
    const data=[
        {
            desc:"dihfsjdhf sejfhesjf shfhesduf hdufh udsf",
            filesize:".9mb",
            close:true,
            tag:{ isOpen:false, tagTitle:"Download Now", tagColor:"green"}
        },
        {
            desc:"dihfsjdhf sejfhesjf shfhesduf hdufh udsf",
            filesize:".9mb",
            close:false,
            tag:{ isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        },
        {
            desc:"dihfsjdhf sejfhesjf shfhesduf hdufh udsf",
            filesize:".9mb",
            close:true,
            tag:{ isOpen:false, tagTitle:"Download Now", tagColor:"green"}
        }

    ]

  return (
    <div ref={ref} className='fixed top-0 left-0  z-[3] w-full h-full flex gap-10  flex-wrap p-5'>
       {data.map((item,i)=>(
        <>
        <Card data={item} referance={ref} id={i}/>
        </>
       ))}
    </div>
  )
}

export default Foreground