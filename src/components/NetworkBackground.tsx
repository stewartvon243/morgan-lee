import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function PointsField() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 1500
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorA = new THREE.Color().setHSL(0.72, 1.0, 0.6) // uses hue near primary
    const colorB = new THREE.Color().setHSL(0.55, 1.0, 0.6)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 8
      positions[i3 + 1] = (Math.random() - 0.5) * 8
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      const t = Math.random()
      const c = colorA.clone().lerp(colorB, t)
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.03
    pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={positions.length / 3} />
        <bufferAttribute attach="attributes-color" array={colors} itemSize={3} count={colors.length / 3} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.02} sizeAttenuation depthWrite={false} opacity={0.9} transparent />
    </points>
  )
}

export default function NetworkBackground() {
  function DevEnv() {
    const groupRef = useRef<THREE.Group>(null)
    useFrame(({ clock }) => {
      const g = groupRef.current
      if (!g) return
      const t = clock.getElapsedTime()
      g.rotation.y = Math.sin(t * 0.15) * 0.2
    })
    return (
      <group ref={groupRef}>
        <ambientLight intensity={0.25} />
        <pointLight position={[2, 2, 3]} intensity={0.5} color={new THREE.Color().setHSL(0.58, 1.0, 0.6)} />
        {/* Floating glass/code panels */}
        <mesh position={[-1.6, 0.5, 0]}>
          <planeGeometry args={[1.8, 1]} />
          <meshStandardMaterial color={new THREE.Color().setHSL(0.72, 0.6, 0.35)} metalness={0.3} roughness={0.2} transparent opacity={0.35} />
        </mesh>
        <mesh position={[0.9, -0.2, 0.2]}>
          <boxGeometry args={[1.0, 0.6, 0.04]} />
          <meshStandardMaterial color={new THREE.Color().setHSL(0.55, 0.5, 0.2)} emissive={new THREE.Color().setHSL(0.55, 1.0, 0.6)} emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[1.5, 0.9, -0.3]}>
          <torusKnotGeometry args={[0.25, 0.06, 64, 8]} />
          <meshStandardMaterial color={new THREE.Color().setHSL(0.58, 1.0, 0.5)} metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Subtle wireframe grid floor */}
        <mesh rotation-x={-Math.PI / 2} position={[0, -2.4, 0]}>
          <planeGeometry args={[40, 40, 40, 40]} />
          <meshBasicMaterial color={'#ffffff'} wireframe opacity={0.04} transparent />
        </mesh>
      </group>
    )
  }

  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <fog attach="fog" args={[new THREE.Color('black'), 8, 16]} />
        <DevEnv />
        <PointsField />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
    </div>
  )
}
