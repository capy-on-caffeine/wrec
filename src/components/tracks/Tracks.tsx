import React from 'react'
import TrackCard from './TrackCard';

const Tracks = () => {
  const cardData = [
    {
        name: "Visual and Signal Computing",
        img: "/images/signal.png",
        chair: "Dr. Indu Saini",
        topics: [
            "Signal Processing Algorithms and Architecture",
            "Pattern Recognition and Object Tracking",
            "Biomedical Signal and Image Processing",
            "Design and Implementation of Signal Processing",
            "Signal Processing for Communication and Networking",
            "Soft Computing and its Applications to Signal Processing",
            "Signal processing for Smart Systems",
            "Human-Computer Interface",
            "Signal Processing for Cyber Security",
            "Signal Processing for Big Data",
            "Internet of things and RFID",
            "Digital and Multirate Signal Processing",
            "Audio/Speech and Language Processing",
            "Machine Learning and Deep Learning for Signal Processing",
        ]
    },
    {
        name: "Futuristic Communication Systems",
        img: "/images/internet.png",
        chair: "Dr. Neetu Sood",
        topics: [
            "fc1", "fc2"
        ]
    },
    {
        name: "VLSI Design and Technology",
        img: "/images/transistor.jpg",
        chair: "Dr. Tarun Chaudhary",
        topics: [
            "vlsi1", "vlsi2"
        ]
    },
    {
        name: "Information Security",
        img: "/images/cloud.png",
        chair: "Dr. Urvashi",
        topics: [
            "is1", "is2"
        ]
    },
    {
        name: "Data Science for Sustainable Development",
        img: "/images/ds.png",
        chair: "Dr. Shveta Mahajan",
        topics: [
            "ds1", "ds2"
        ]
    }
  ];

  return (
    <div id='tracks' className='w-full h-screen bg-gradient-to-r from-[#FFE1EA] to-white flex flex-col justify-start items-center'>
        <h1 className='text-4xl mt-20 mb-10'>CONFERENCE TRACKS</h1>
        <div className='w-5/6 h-3/5 flex justify-center items-center flex-wrap gap-10'>
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