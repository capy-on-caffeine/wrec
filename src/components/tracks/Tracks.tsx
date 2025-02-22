import React from "react";
import TrackCard from "./TrackCard";

const Tracks = () => {
  const cardData = [
    {
      name: "Healthcare Analytics",
      img: "/images/signal.png",
      chair: "Dr. Indu Saini",
      topics: [],
    },
    {
      name: "Futuristic Communication Systems",
      img: "/images/internet.png",
      chair: "Dr. Neetu Sood",
      topics: [],
    },
    {
      name: "VLSI Design and Technology",
      img: "/images/transistor.jpg",
      chair: "Dr. Tarun Chaudhary",
      topics: [],
    },
    {
      name: "Information Security",
      img: "/images/cloud.png",
      chair: "Dr. Urvashi",
      topics: [],
    },
    {
      name: "Data Science for Sustainable Development",
      img: "/images/ds.png",
      chair: "Dr. Shveta Mahajan",
      topics: [],
    },
  ];

  const specialTrack = {
    name: "Emerging Frontiers in VLSI",
    img: "/images/special_track_img.png",
    chair: "Dr. Neha Paras",
    designation: "Assistant Professor",
    affiliation: "Jawaharlal Nehru University (Special Centre for Nanoscience)",
  };

  return (
    <div
      id="tracks"
      className="w-full min-h-screen bg-gradient-to-r from-[#FFE1EA] to-white flex flex-col justify-start items-center"
    >
      <h1 className="text-4xl mt-20 mb-10">CONFERENCE TRACKS</h1>
      <div className="w-full min-h-screen lg:w-5/6 lg:h-2/5 flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-10">
        {cardData.map((data, index) => (
          <TrackCard key={index} {...data} />
        ))}
      </div>

      {/* Special Track Section */}
      <h1 className="text-3xl mt-20 mb-5">Special Tracks</h1>
      <div className="w-full lg:w-5/6 flex flex-col items-center">
        <TrackCard
          name={specialTrack.name}
          img={specialTrack.img}
          chair={specialTrack.chair}
          topics={[
            `Designation: ${specialTrack.designation}`,
            `Affiliation: ${specialTrack.affiliation}`,
          ]}
        />
      </div>
    </div>
  );
};

export default Tracks;
