'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    // Vérification de l'environnement
    if (typeof window === 'undefined') return
    
    console.log('Initialisation de la scène 3D...')
    
    // Initialisation de la scène, de la caméra et du rendu
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    
    // Configuration du rendu avec alpha pour la transparence
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    
    if (!mountRef.current) {
      console.error('Conteneur non trouvé')
      return
    }
    
    // Configuration du rendu
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Évite le sur-échantillonnage
    
    // Nettoyage préalable
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild)
    }
    
    // Ajout du canvas au DOM
    mountRef.current.appendChild(renderer.domElement)
    
    // Configuration de la caméra
    camera.position.z = 5
    
    // Création d'une géométrie plus intéressante
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    
    // Matériau avec effet métallisé
    const material = new THREE.MeshStandardMaterial({
      color: 0x4f46e5, // Couleur indigo
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    
    // Ajout d'un éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)
    
    // Gestion du redimensionnement
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Animation
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      // Animation fluide
      mesh.rotation.x += 0.002
      mesh.rotation.y += 0.005
      
      renderer.render(scene, camera)
    }
    
    // Démarrer l'animation
    animate()
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Libération des ressources
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}
