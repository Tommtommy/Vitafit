// src/components/Timeline.jsx
import React, { useEffect, useRef } from 'react';

const timelineData = [
  { year: '2004-2013', text: 'Тетрапак асептик үйлдвэрийг ашиглалтанд оруулсан' },
  { year: '2015-2016', text: 'Олон улсын стандартын тоног төхөөрөмжийг нэвтрүүлсэн' },
  { year: '2017-2018', text: 'ISO 22000:2005 стандартын бүтээгдэхүүн нэвтрүүлсэн' },
  { year: '2019-2020', text: 'Сарлагийн сүү боловсруулах үйлдвэрийг ашиглалтанд оруулсан' },
  { year: '2020-2023', text: 'Шинэ төсөл хөтөлбөрүүд хэрэгжүүлсэн' },
];

const Timeline = () => {
  const lineRef = useRef(null);
  const lastCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current && lastCardRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight * 0.5;
        const timelinePosition = lineRef.current.getBoundingClientRect().top + window.scrollY;
        const lastCardPosition = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;

        // Calculate distance, but stop the line at the last card
        const distance = Math.min(Math.max(0, scrollPosition - timelinePosition), lastCardPosition - timelinePosition);
        lineRef.current.style.height = `${distance}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center py-16">
      {/* Center Vertical Line with Smooth Scrolling Effect */}
      <div
        ref={lineRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 transition-all duration-500 ease-linear"
        style={{ height: '0px' }}
      ></div>

      <div className="relative z-10 w-full max-w-4xl space-y-12">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
            ref={index === timelineData.length - 1 ? lastCardRef : null} // Assign lastCardRef to the last item
          >
            {/* Timeline Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-sm w-full">
              <h3 className="text-2xl font-bold text-blue-600">{item.year}</h3>
              <p className="text-gray-700 mt-2">{item.text}</p>
            </div>
            {/* Circle Indicator */}
            <div
              className={`absolute w-4 h-4 rounded-full bg-green-500 border-2 border-white top-1/2 transform -translate-y-1/2 ${
                index % 2 === 0 ? '-left-6' : '-right-6'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
