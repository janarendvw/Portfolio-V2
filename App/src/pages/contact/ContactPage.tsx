import React from 'react'
import ContactForm from './ContactForm'

type Props = {}

export default function ContactPage({}: Props) {
  return (
    <div className='flex justify-between col-start-2 col-span-10 row-start-2'>
      <div id="contact-hero-left" className="w-1/3 slide-left">
        <div className="text-6xl">Let’s get in touch!</div>
        <div className="text-xl opacity-80 mt-4">
          I am always open to new opportunities and collaborations. Feel free to contact me via email or LinkedIn.
          </div>
          </div>
          <div id="contact-hero-right" className="w-96 slide-up">
            <ContactForm/>
            </div>
    </div>
  )
}