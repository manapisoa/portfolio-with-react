'use client'

import dynamic from 'next/dynamic'

// Composant client qui charge dynamiquement la scène 3D
const DynamicThreeScene = dynamic(
  () => import('./ThreeScene'),
  { 
    ssr: false,
    loading: () => (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
      }} />
    )
  }
)

export default function DynamicThreeSceneWrapper() {
  return <DynamicThreeScene />
}
