import React from 'react'

interface DayButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const DayButton: React.FC<DayButtonProps> = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${
        isActive
          ? 'bg-[#FF69B4] text-white'
          : 'bg-white text-[#FF69B4] border-2 border-[#FF69B4]'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default DayButton