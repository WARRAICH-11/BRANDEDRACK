// Replace existing Lenix placeholder with a lightweight Three.js pastel scene
// Creates soft, rotating geometry with gentle pastel lights and subtle post-transform animations
import React, { useEffect, useRef } from 'react'

export default function LenixCanvas(){
  const mountRef = useRef(null)

  useEffect(() => {
    let mounted = true
    let renderer, scene, camera, frameId

    async function init(){
      const THREE = await import('three')
      if (!mounted) return

      const { Scene, PerspectiveCamera, WebGLRenderer, Color, AmbientLight, PointLight, Mesh, MeshStandardMaterial, SphereGeometry, TorusKnotGeometry } = THREE

      scene = new Scene()
      scene.background = new Color('#fcfdff')

      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      camera = new PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 6)

      renderer = new WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mountRef.current.appendChild(renderer.domElement)

      const ambient = new AmbientLight(0xffffff, 0.6)
      scene.add(ambient)

      const p1 = new PointLight(0xffd1dc, 0.8)
      p1.position.set(5, 3, 5)
      scene.add(p1)

      const p2 = new PointLight(0xd8f3ff, 0.7)
      p2.position.set(-5, -3, 5)
      scene.add(p2)

      const softMat = new MeshStandardMaterial({
        color: 0xfadadd,
        metalness: 0.2,
        roughness: 0.6,
        transparent: true,
        opacity: 0.95
      })

      const geo1 = new TorusKnotGeometry(0.9, 0.28, 128, 32)
      const mesh1 = new Mesh(geo1, softMat)
      mesh1.position.set(-1.2, 0, 0)
      scene.add(mesh1)

      const geo2 = new SphereGeometry(0.9, 64, 64)
      const mat2 = softMat.clone()
      mat2.color = new Color('#e0f7fa')
      const mesh2 = new Mesh(geo2, mat2)
      mesh2.position.set(1.2, 0, 0)
      scene.add(mesh2)

      function onResize(){
        if (!mountRef.current) return
        const w = mountRef.current.clientWidth
        const h = mountRef.current.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }

      window.addEventListener('resize', onResize)

      let t = 0
      function animate(){
        t += 0.01
        mesh1.rotation.x = 0.4 * Math.sin(t)
        mesh1.rotation.y = t * 0.2
        mesh2.rotation.y = -t * 0.3
        mesh2.position.y = Math.sin(t * 0.6) * 0.15

        renderer.render(scene, camera)
        frameId = requestAnimationFrame(animate)
      }
      animate()

      // cleanup
      return () => {
        cancelAnimationFrame(frameId)
        window.removeEventListener('resize', onResize)
        if (renderer) {
          renderer.dispose()
          renderer.forceContextLoss && renderer.forceContextLoss()
          const canvas = renderer.domElement
          canvas && canvas.remove()
        }
      }
    }

    const cleanupPromise = init()

    return () => {
      mounted = false
      // If the init returned a cleanup function, allow it to run from closure
    }
  }, [])

  return (
    <div ref={mountRef} className="w-full h-96 rounded-lg overflow-hidden shadow-lg" style={{minHeight: 240}}></div>
  )
}
