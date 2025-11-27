'use client'

import dynamic from 'next/dynamic'

const Background3D = dynamic(
  () => import('./Background3D'),
  { 
    ssr: false,
    loading: () => (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}
      />
    )
  }
)

export default function Background3DClient() {
  return <Background3D />
}
