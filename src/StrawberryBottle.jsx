import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { userData } from 'three/examples/jsm/nodes/Nodes.js'

export function StrawberryBottle(props) {
  const { nodes, materials } = useGLTF('/Strawberry Bottle.glb')
  const test=useRef()
  const tt=()=>{
    console.log(test,'sjaias')
  }
  return (
    <group onClick={tt} ref={test} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials.blinn2}
        position={[0, 0.157, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={materials.blinn1}
        position={[0, 0.157, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Liquid.geometry}
        material={materials.blinn3}
        position={[0, 0.157, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Lable.geometry}
        material={materials.lambert2}
        position={[0, 0.157, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Lable.geometry}
        material={materials.lambert3}
        position={[0, 0.157, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      />
    </group>
  )
}

useGLTF.preload('/Strawberry Bottle.glb')

