import React from 'react'

interface ScheduleItem {
  time: string;
  name: string;
  details: string[];
}

interface ScheduleRowProps {
  item: ScheduleItem;
}

const ScheduleRow: React.FC<ScheduleRowProps> = ({ item }) => {
  return (
    <div className='flex items-start mb-6'>
      <div className='w-24 flex-shrink-0 text-[#FF69B4] font-semibold'>
        {item.time}
      </div>
      <div className='flex-grow'>
        <h3 className='text-lg font-semibold'>{item.name}</h3>
        {item.details.length > 0 && (
          <ul className='list-disc list-inside mt-2'>
            {item.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ScheduleRow