import React, { useState } from 'react';
import Image from 'next/image';

function SelectOption({selectedStudyType}) {
  const Options = [
    {
      name: 'Exam',
      icon: '/exam_1.png',
    },
    {
      name: 'Job Interview',
      icon: '/job.png',
    },
    {
      name: 'Practice',
      icon: '/practice.png',
    },
    {
      name: 'Coding Prep',
      icon: '/code.png',
    },
    {
      name: 'Other',
      icon: '/knowledge.png',
    },
  ];

  const [SelectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        For which you want to create your personal study material?
      </h2>
      <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {Options.map((item, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:border-primary cursor-pointer ${
              SelectedOption === item.name ? 'border-primary' : ''
            }`}
            onClick={() => {setSelectedOption(item.name);selectedStudyType(item.name)}}
          >
            <Image src={item.icon} alt={item.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
