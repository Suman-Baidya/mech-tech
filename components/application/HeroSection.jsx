import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-primary flex flex-col justify-center items-center text-white">
        <h1 className='text-5xl font-bold'>Welcome to the Mechanic Service</h1>
        <p className='text-md'>Your trusted partner for all your vehicle repair needs. We offer a wide range of services to meet your needs.</p>

        <Button className='mt-6' variant="secondary">Contact Us</Button>

        <Link href="/about">Go to About Page</Link>

        

    </section>
  )
}

export default HeroSection
