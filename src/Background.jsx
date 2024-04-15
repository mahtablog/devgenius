import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Background(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Background.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.105}>
          <group name="Root">
            <group
              name="Camera"
              position={[0.989, -0.821, 0.732]}
              rotation={[2.65, -0.579, 2.549]}
              scale={-0.849}
            />
            <group
              name="Icosahedron_65"
              position={[0.1, -0.048, 0.097]}
              rotation={[0, 0, -Math.PI]}
              scale={-0.849}>
              <mesh
                name="Icosahedron_65_0"
                castShadow
                receiveShadow
                geometry={nodes.Icosahedron_65_0.geometry}
                material={materials.Default}
              />
            </group>
            <group
              name="Lamp"
              position={[0.584, 0.072, 0.799]}
              rotation={[-0.742, 0.117, -2.329]}
              scale={-0.849}>
              <group name="Lamp_1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Background.glb')