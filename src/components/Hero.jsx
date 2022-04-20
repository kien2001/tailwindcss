import React from 'react'
import Intro from '../img/illustration-intro.svg'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container flex flex-col-reverse
             items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0 ">
                {/* Left item */}
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2 justify-center items-center md:items-start ">
                    <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
                        Bring everyone together to build better products
                    </h1>
                    <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium id alias voluptates? Quibusdam, soluta nulla! Quidem fugiat fugit ipsam ipsa?
                    </p>
                    <a href="#" className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:self-baseline'>Get Started</a>

                </div>
                {/* Image */}
                <div className='md:w-1/2'>
                    <img src={Intro} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero