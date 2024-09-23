"use client"
import React, { useState } from 'react'
import DayButton from './DayButton'
import ScheduleRow from './ScheduleRow'

interface ScheduleItem {
  time: string;
  name: string;
  details: string[];
}

interface ScheduleData {
  [key: string]: ScheduleItem[];
}

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>('day1');

  const schedule: ScheduleData = {
    day1: [
      {
        time: "10:00 AM",
        name: "Inauguration",
        details: []
      },
      {
        time: "11:30 AM",
        name: "Plenary Talk Dr. Mini Shaji Thomas",
        details: []
      },
      {
        time: "02:30 PM",
        name: "Paper Presentation:",
        details: [
          "Session 1",
          "Session 2",
          "Session 3"
        ]
      }
    ],
    day2: [
      {
        time: "10:00 AM",
        name: "Inauguration",
        details: []
      },
      {
        time: "11:30 AM",
        name: "Plenary Talk Dr. Mini Shaji Thomas",
        details: []
      },
      {
        time: "02:30 PM",
        name: "Paper Presentation:",
        details: [
          "Session 1",
          "Session 2",
          "Session 3"
        ]
      }
    ],
    day3: [
      {
        time: "10:00 AM",
        name: "Inauguration",
        details: []
      },
      {
        time: "11:30 AM",
        name: "Plenary Talk Dr. Mini Shaji Thomas",
        details: []
      },
      {
        time: "02:30 PM",
        name: "Paper Presentation:",
        details: [
          "Session 1",
          "Session 2",
          "Session 3"
        ]
      }
    ]
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-[#FFE1EA] to-white flex flex-col items-center p-8'>
      <h1 className='text-4xl font-bold mt-12 mb-10'>EVENT SCHEDULE</h1>
      <div className='flex space-x-4 mb-8'>
        {Object.keys(schedule).map((day) => (
          <DayButton 
            key={day}
            isActive={activeDay === day}
            onClick={() => setActiveDay(day)}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </DayButton>
        ))}
      </div>
      <div className='w-full max-w-3xl bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Program Schedule:</h2>
        {schedule[activeDay].map((item, index) => (
          <ScheduleRow key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Schedule