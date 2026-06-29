import React from 'react'
import { useState } from 'react'
import { Heropage } from '../pages/Heropage'
export const Hero = () => {
    const [crypto,setCrypto] = useState(null);
  return (
    <div className="min-h-screen flex  text-white bg-gray-950">
      <Heropage setCrypto={setCrypto} />
    </div>
  )
}
