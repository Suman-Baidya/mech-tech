import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-primary flex flex-col justify-center items-center">
        <h1 className='text-5xl font-bold text-white'>Welcome to the Mechanic Service</h1>
        <p className='text-white'>Your trusted partner for all your vehicle repair needs. We offer a wide range of services to meet your needs.</p>

        <Button className='mt-6' variant="secondary">Get Started</Button>
        <Button className='mt-6' variant="secondary">Contact Us</Button>

    </section>
  )
}

export default HeroSection
