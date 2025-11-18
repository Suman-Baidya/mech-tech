import React from 'react'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-primary flex flex-col justify-center items-center p-8 text-white">
      <h1 className='text-6xl'>This is About Page</h1>
        <p>Welcome to the About Section of our Mechanic Service application. We are dedicated to providing top-notch vehicle repair services to our valued customers. Our team of experienced mechanics is here to ensure your vehicle is running smoothly and safely.</p>

        <Link href="/">Go to Home Page</Link>
    </section>
  )
}

export default AboutSection
