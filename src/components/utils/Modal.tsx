import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  chair: string;
  topics: string[];
}

const Modal = ({ isOpen, onClose, name, chair, topics }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <h3 className="text-xl font-bold">Chair - { chair }</h3>
        <h3 className="text-base text-gray-700 mt-4 mb-2">Topics:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="text-gray-700">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal