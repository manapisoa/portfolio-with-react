'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const canvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialisation de la scène Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000)
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })
    
    renderer.setSize(dimensions.width, dimensions.height)
    
    // Création d'un cube simple
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      wireframe: true
    })
    
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    
    camera.position.z = 5
    
    // Gestion du redimensionnement
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setDimensions({ width, height })
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation
    let animationFrameId
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [dimensions])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 0.5
    }}>
      <canvas 
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  )
}
