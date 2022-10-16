import { useContext, useEffect } from 'react'
import { bgContext } from '../../App'
import ContactForm from './ContactForm'

type Props = {}

export default function ContactPage({}: Props) {
  const rotation = useContext(bgContext)
  useEffect(() => {
    rotation.setRotation(-3)
  }, [])
  const audio = new Audio("/audio/about_chord.flac");
  useEffect(() => {
    audio.play();
  }, []);
  return (
    <main id="main-content" className='flex flex-col gap-8 md:flex-row justify-between col-start-2 col-span-10 row-start-2'>
      <div id="contact-hero-left" className="w-full md:w-1/3 slide-left">
        <div className="text-6xl">Let’s get in touch!</div>
        <div className="text-xl opacity-80 mt-4">
          I am always open to new opportunities and collaborations. Feel free to contact me via email or LinkedIn.
          </div>
          </div>
          <div id="contact-hero-right" className="w-full md:w-96 slide-up">
            <ContactForm/>
            </div>
    </main>
  )
}