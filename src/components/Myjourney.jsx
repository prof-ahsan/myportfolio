import React from 'react'

const Myjourney = () => {
  return (
    <div className='px-6 md:px-12'>
      <div>
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'>My Journey</h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 items-start mt-10'>
            <div>
                <div smooth={true} duration={500} className="text-xl font-bold text-[var(--color-brand-heading)] cursor-pointer">
                          <span className=" p-3 rounded-md  m-2 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] text-[var(--color-brand-heading)]">1</span>
                </div>
                
            </div>
            <div className='p-1'>
                <h3 className=' text-lg sm:text-2xl text-white '>Started Learning Web Development</h3>
                <a className=' text-sm sm:text-md'>2022 - Present</a>
                <p className='p-1 text-sm sm:text-md'>Began my journey into web development, learning HTML, CSS, and JavaScript fundamentals. Quickly fell in love with creating interactive user interfaces.</p>
            </div>
        </div>
           <div className='flex flex-col sm:flex-row gap-3 items-start mt-10'>
            <div>
                <div smooth={true} duration={500} className="text-xl font-bold text-[var(--color-brand-heading)] cursor-pointer">
                          <span className=" p-3 rounded-md  m-2 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] text-[var(--color-brand-heading)]">2</span>
                </div>
                
            </div>
            <div className='p-1'>
                <h3 className=' text-lg sm:text-2xl text-white '>Mastered React & Modern Frameworks</h3>
                <a className=' text-sm sm:text-md'>2023</a>
                <p className='p-1 text-sm sm:text-md'>Dove deep into React and modern JavaScript frameworks. Started building complex applications and learned about state management, hooks, and component architecture.</p>
            </div>
        </div>
           <div className='flex flex-col sm:flex-row gap-3 items-start mt-10'>
            <div>
                <div smooth={true} duration={500} className="text-xl font-bold text-[var(--color-brand-heading)] cursor-pointer">
                          <span className=" p-3 rounded-md  m-2 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] text-[var(--color-brand-heading)]">3</span>
                </div>
                
            </div>
            <div className='p-1'>
                <h3 className=' text-lg sm:text-2xl text-white '>UI/UX Design with Figma</h3>
                <a className=' text-sm sm:text-md'>2025</a>
                <p className='p-1 text-sm sm:text-md'>Expanded my skill set to include UI/UX design using Figma. Now I can design and develop complete web applications from concept to deployment.</p>
            </div>
        </div>
           <div className='flex flex-col sm:flex-row gap-3 items-start mt-10'>
            <div>
                <div smooth={true} duration={500} className="text-xl font-bold text-[var(--color-brand-heading)] cursor-pointer">
                          <span className=" p-3 rounded-md  m-2 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)] text-[var(--color-brand-heading)]">4</span>
                </div>
                
            </div>
            <div className='p-1'>
                <h3 className=' text-lg sm:text-2xl text-white '>Building Real-World Projects</h3>
                <a className=' text-sm sm:text-md'>Present</a>
                {/* <p className='p-1 text-sm sm:text-md'>Began my journey into web development, learning HTML, CSS, and JavaScript fundamentals. Quickly fell in love with creating interactive user interfaces.</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Myjourney
