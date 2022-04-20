import React from 'react'
import Avatar1 from  '../img/avatar-ali.png'
import Avatar2 from  '../img/avatar-anisha.png'
import Avatar3 from  '../img/avatar-richard.png'
import Avatar4 from  '../img/avatar-shanai.png'


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center">
                What's different about manage?
            </h2>
            {/* Testimonials Container */}
            <div className="flex flex-col mt-24 space-y-10 md:flex-row md:space-x-6 md:space-y-0">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray  md:w-1/3 ">
                    <img src={Avatar2} alt="" className='w-16 -mt-14' />
                    <h5 className=' text-lg font-bold'>Anisha Ali</h5>
                    <p className='text-sm max-w-md text-darkGrayishBlue'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga excepturi eius harum, error veniam nisi.</p>
                </div>
                {/* Testimonial 2 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src={Avatar3} alt="" className='w-16 -mt-14' />
                    <h5 className=' text-lg font-bold'>Anisha Ali</h5>
                    <p className='text-sm max-w-md text-darkGrayishBlue'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga excepturi eius harum, error veniam nisi.</p>
                </div>
                {/* Testimonial 3 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src={Avatar4} alt="" className='w-16 -mt-14' />
                    <h5 className=' text-lg font-bold'>Anisha Ali</h5>
                    <p className='text-sm max-w-md text-darkGrayishBlue'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga excepturi eius harum, error veniam nisi.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials