import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ocean(props) {
  const { nodes, materials } = useGLTF('/ocean.glb')
  return (
    <group position={[10,-10,0]} scale={[0.01,0.01,0.01]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['rastMat.010']}
          position={[-20913.553, -17843.867, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/ocean.glb')