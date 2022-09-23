import React from 'react'
import Socials from './Socials'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='col-start-0 col-span-12 row-start-4 self-end bg-slate-100/5 p-3'><Socials/></div>
  )
}