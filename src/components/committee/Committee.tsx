"use client";
import React, { useState } from "react";

// Define the type for the orgmembers object
type OrgMembers = {
  chiefPatrons: string[];
  executiveGeneralChair: string[];
  programGeneralChair: string[];
  organisingSecretary: string[];
  advisoryCommittee: string[];
  technicalProgramCommittee: string[];
};

const Committee = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the active index
  const handleToggle = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Define the orgmembers data
  const orgmembers: OrgMembers = {
    chiefPatrons: ["Dr. B K Kanaujia, Professor, Director, NIT Jalandhar"],
    executiveGeneralChair: [
      "Dr. Mamta Khosla, Associate Professor, NIT Jalandhar",
      "Dr. Indu Saini, Associate Professor, NIT Jalandhar",
      "Dr. Neetu Sood, Associate Professor, NIT Jalandhar",
      "Dr. Deepti Kakkar, Associate Professor, NIT Jalandhar",
    ],
    programGeneralChair: [
      "Dr. Rajneesh Rani, Associate Professor, NIT Jalandhar",
      "Dr. Tarun Chaudhary, Assistant Professor, NIT Jalandhar",
      "Dr Nisha Chaurasia, Assistant Professor, NIT Jalandhar",
      "Dr Urvashi, Assistant Professor, NIT Jalandhar",
    ],
    organisingSecretary: [
      "Dr Shveta Mahajan, Assistant Professor, NIT Jalandhar",
      "Dr Shefali Arora, Assistant Professor, NIT Jalandhar",
      "Dr Jaspal Kaur Saini, Assistant Professor, NIT Jalandhar",
      "Dr Aruna Malik, Assistant Professor, NIT Jalandhar",
      "Dr Jagdeep Kaur, Assistant Professor, NIT Jalandhar",
    ],
    advisoryCommittee: [
      "Dr S. Indu, Professor, DTU, Delhi",
      "Dr Parul Garg, Professor, NSUT, Delhi",
      "Dr Savita Gupta, Professor, UIET, Panjab University, Chandigarh",
      "Dr Rajeevan Chandel, Professor, NIT Hamirpur",
    ],
    technicalProgramCommittee: [
      "Dr. Trapti Jain, Professor, IIT Indore",
      "Dr. Sumam David S, Professor, NIT Surathkal",
      "Dr. Divya Bansal, Professor, PEC Chandigarh",
      "Dr. Sujata Pal, Assistant Professor, IIT Ropar",
      "Dr. Karabi Biswas, Assistant Professor, IIT Kharagpur",
      "Ms. Sonia Dosanjh, Scientist F, CDAC Mohali",
      "Dr. Shilpi Gupta, Associate Professor, SVNIT, Surat",
      "Dr Meenakshi Sood, Associate Professor, NITTTR Chandigarh",
      "Dr. R.K.Jeyachitra, Associate Professor, NIT, Tiruchirappalli",
      "Dr. Vijaya Bhadauria, Professor, MNNIT Allahabad",
      "Dr. Amandeep Kaur, Assistant Professor, IIT Jodhpur",
      "Dr. Laxmi B, Associate Professor, NIT Warangal",
      "Dr Rajeevan Chandel, Professor, NIT Hamirpur",
      "Dr Arvinder Kaur, Professor, IPU Delhi",
      "Dr Alpana Aggarwal, Professor, Thapar University, Patiala",
      "Dr. Kirti Inamdar, Lecturer, SVNIT, Surat",
      "Dr. Smriti Agarwal, Assistant Professor, MNNIT Allahabad",
      "Dr Banani Basu, Assistant Professor, NIT Silchar",
      "Dr. Lintu Rajan, Assistant Professor, NIT Calicut",
      "Dr. Bindiya T. S., Assistant Professor, NIT Calicut",
      "Dr. Kalpana G Bhat, Assistant Professor, NITK Surathkal",
      "Dr. Vrinda Gupta, Associate Professor, NIT Kurukshetra",
      "Dr. Savita Gupta, Professor, Panjab University, Chandigarh",
      "Dr. Poonam Bansal, Professor, IGDTUW Delhi",
      "Dr S. Indu, Professor, DTU Delhi",
      "Dr Gurmeet Kaur, Professor, Punjabi University",
      "Dr Renu Dhir, Associate Professor, NIT Jalandhar",
      "Dr. Sonia, Assistant Professor, Punjabi University Patiala",
      "Dr. ILA Sharma, Assistant Professor, MNIT Jaipur",
      "Dr. Jasdeep Kaur Dhanoa, Professor, IGDTUW Delhi",
      "Dr Geeta Sikka, Associate Professor, NIT Jalandhar",
      "Dr Reecha Sharma, Assistant Professor, Punjabi University, Patiala",
      "Dr. Niyati Baliyan, Assistant Professor, IGDTUW Delhi",
      "Dr Manisha Bharti, Assistant Professor, NIT Delhi",
      "Dr Gargi Khanna, Associate Professor, NIT Hamirpur",
      "Dr. Bhawna, Assistant Professor, IGDTUW Delhi",
      "Dr Harmandar Kaur, Assistant Professor, GNDU RC, Jalandhar",
      "Dr Roop Pahuja, Associate Professor, NIT Jalandhar",
      "Dr. Richa Yadav, Assistant Professor, IGDTUW Delhi",
      "Dr. Nidhi Goel, Professor, IGDTUW Delhi",
      "Dr Poonam Sharma, SVNIT Nagpur",
      "Prof Mahua Bhattacharya, ABV-IIITM Gwalior",
      "Dr. Saumya Bhadauria, ABV-IIITM Gwalior",
      "Dr. Neerja Mittal Garg, Principal Scientist, CSIR-CSIO, Chandigarh",
      "Dr Punjan Dohare, Assistant Professor, MANIT Bhopal",
    ],
  };

  return (
    <div id='committee' className="w-full py-16 bg-white flex flex-col justify-start items-center">
      {/* Heading for the Committee Section */}
      <h1 className='text-4xl font-bold mb-10'>CONFERENCE COMMITTEE</h1>

      <div className="max-w-3xl w-full mx-auto p-4 bg-white rounded shadow-md">
        {Object.keys(orgmembers).map((key, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex justify-between items-center py-4 px-4 cursor-pointer ${
                activeIndex === index ? "bg-pink-100" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
              <span className="text-pink-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-4 pt-4">
                <ul>
                  {(orgmembers[key as keyof OrgMembers] as string[]).map(
                    (item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-gray-600">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
