import React from 'react'

const ScrollingText: React.FC = () => {
  return (

    <section className='relative'  dir='ltr'> 


        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#070A0B] via-transparent to-transparent z-10" ></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#070A0B] via-transparent to-transparent z-10"></div>
        <div className='bg-[#070A0B] flex overflow-hidden gap-40 py-20'>




        {/* Wrapping div for the animation */}
        <div className="animate-scroll-left-to-right flex gap-40">

            <div className=" flex gap-10">

                {/* First block of text */}

                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    سما
                </p>

                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    وابداعنا
                </p>
                
                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    ...حدود    
                </p>

                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    للعالم  
                </p>
            </div>
        </div>


        <div className="animate-scroll-left-to-right flex gap-40">

            <div className=" flex gap-10">

                {/* First block of text */}
                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    سما
                </p>

                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    وابداعنا
                </p>
                
                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    ...حدود    
                </p>

                <p className='max-w-none text-white font-extrabold text-7xl w-full'>
                    للعالم  
                </p>
            </div>


        </div>
     


        </div>
    </section>
  )
}

export default ScrollingText;
