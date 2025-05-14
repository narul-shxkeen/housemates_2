import { useState, useEffect } from 'react';

// Custom hook for managing animation timing
const useTextAnimation = (delay = 50) => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return animated;
};

// Main component with data-driven structure
export default function AnimatedTextHighlight() {
  const animated = useTextAnimation(1000);
  // Define the text structure with highlighted words
  const sentences = [
    [
      { text: "I was ", highlight: false },
      { text: "tired ", highlight: true },
      { text: "so I didn’t clean up after the party ", highlight: false },
    ],
    [
      { text: "I am sick ", highlight: false },
      { text: "of ", highlight: true },
      { text: "explaining the basic chores again ", highlight: false },
    ],
    [
      { text: "I am constantly ", highlight: false },
      { text: "finding ", highlight: true },
      { text: "other people’s socks on my bed ", highlight: false },
    ],
    [
      { text: "I never get ", highlight: false },
      { text: "the ", highlight: true },
      { text: "peace and quiet I need to recharge ", highlight: false },
    ],
    [
      { text: "They expect me to be ", highlight: false },
      { text: "perfect ", highlight: true },
      { text: "while they barely try ", highlight: false },
    ],
    [
      { text: "All I wanted was a decent ", highlight: false },
      { text: "housemate?", highlight: true }
    ]
  ];

  return (
    <div className='relative'>
    <div className="flex flex-col leading-14 justify-end items-start z-10">
    {sentences.map((sentence, idx) => (
      <div
        key={idx}
        className="whitespace-nowrap overflow-x-hidden text-ellipsis max-w-full overflow-y-visible"
      >
        {sentence.map((part, index) => (
         <span
         key={index}
         className={`
           transition-all duration-3000 ease-in-out monserrat-medium text-lg lg:text-4xl sm:text-xl md:text-3xl xl:text-5xl
         overflow-y-visible`}
         style={{
           color: part.highlight
             ? (animated ? '#BB4430' : '#ffffff')
             : '#ffffff',
           textShadow: '0px 0px 4px #BB4430',
           transition: 'color 1.5s ease'
         }}
       >
         {part.text}
       </span>
        ))}
      </div>
    ))}
  </div>
  </div>
  );
}