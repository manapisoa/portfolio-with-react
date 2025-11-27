'use client'

import dynamic from 'next/dynamic'

// Composant de chargement visible
const LoadingFallback = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div className="text-muted-foreground">Chargement de la scène 3D...</div>
  </div>
)

// Chargement dynamique du composant 3D
const Background3D = dynamic(
  () => import('./Background3D'),
  { 
    ssr: false,
    loading: () => <LoadingFallback />
  }
)

export default function Background3DWrapper() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Background3D />
    </div>
  )
}
