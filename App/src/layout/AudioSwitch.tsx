import React, { useContext, useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'react-feather'
import { audioContext } from '../App'

type Props = {}

export default function AudioSwitch({}: Props) {
    const audio = useContext(audioContext)
    useEffect(() => {
        
    }, [audio.mute])
  return (
<><button className='border-b-2 p-2' onClick={() => {
    audio.setMute(!audio.mute)
}}>{audio.mute ? <span className='opacity-60'><VolumeX/></span> : <Volume2/>}</button>
</>
  )
}