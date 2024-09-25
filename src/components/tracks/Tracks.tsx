import React from 'react'
import TrackCard from './TrackCard';

const Tracks = () => {
  const cardData = [
    {
        name: "Signal/Image Processing and Applications",
        img: "/images/signal.png"
    },
    {
        name: "Futuristic Communication System",
        img: "/images/internet.png"
    },
    {
        name: "VLSI Design and Technology",
        img: "/images/transistor.jpg"
    },
    {
        name: "Computational Technologies",
        img: "/images/cloud.png"
    }
  ];

  return (
    <div id='tracks' className='w-full h-screen bg-gradient-to-r from-[#FFE1EA] to-white flex flex-col justify-start items-center'>
        <h1 className='text-4xl mt-20 mb-10'>CONFERENCE TRACKS</h1>
        <div className='w-2/3 h-3/5 flex justify-center items-center flex-wrap gap-10'>
            {
                cardData.map((data, index) => {
                    return <TrackCard key={index} {...data} />
                })
            }
        </div>
    </div>
  )
}

export default Tracks