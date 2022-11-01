import React, { useContext, useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'react-feather'
import { audioContext } from '../App'

type Props = {}

export default function AudioSwitch({}: Props) {
    const audio = useContext(audioContext)
    useEffect(() => {
        
    }, [audio.mute])
  return (
<><button onClick={() => {
    audio.setMute(!audio.mute)
}}>{audio.mute ? <span className='opacity-60'><VolumeX/></span> : <Volume2/>}</button>
</>
  )
}