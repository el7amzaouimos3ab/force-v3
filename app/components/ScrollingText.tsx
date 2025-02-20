import React from 'react'

const ScrollingText: React.FC = () => {
  return (

    <section className='relative'  dir='ltr'> 


        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-black via-transparent to-transparent z-10" ></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
        <div className='bg-black flex overflow-hidden gap-40 py-20'>




        {/* Wrapping div for the animation */}
        <div className="animate-scroll-left-to-right flex gap-40">

            <div className=" flex gap-10">

                {/* First block of text */}
                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    فورس
                </p>
                
                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    بطاقم 
                </p>

                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    التقي
                </p>
            </div>

            <div className=" flex gap-10">

                {/* First block of text */}
                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    الان
                </p>
                
                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    بنا 
                </p>

                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    التقي
                </p>
            </div>


        </div>


        <div className="animate-scroll-left-to-right flex gap-40">

            <div className=" flex gap-10">

                {/* First block of text */}
                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    فورس
                </p>
                
                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    بطاقم 
                </p>

                <p className='max-w-none text-[#3DC1F0] font-extrabold text-7xl w-full'>
                    التقي
                </p>
            </div>

            <div className=" flex gap-10">

                {/* First block of text */}
                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    الان
                </p>
                
                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    بنا 
                </p>

                <p className='max-w-none text-[#CC4539] font-extrabold text-7xl w-full'>
                    التقي
                </p>
            </div>


        </div>
     


        </div>
    </section>
  )
}

export default ScrollingText;
