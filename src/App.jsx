import './App.css'
import { Canvas, useFrame,useThree } from '@react-three/fiber'
import { Shape, ShapeGeometry, MeshBasicMaterial } from 'three';
import {Box,Sparkles, CameraControls, Environment, PerspectiveCamera, Sky,MeshPortalMaterial,Text, RoundedBox} from '@react-three/drei'
import { Ocean } from './Ocean'
import { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import * as THREE from 'three'
import MainCar from './MainCar'
import { Mountains } from './Mountains'
import { Background } from './Background'
function App() {
  const camera=useRef()
  const portal1=useRef()
  const portal2=useRef()
  const portal3=useRef()
  const portal4=useRef()
  const portal5=useRef()
  const portal6=useRef()
  const control=useRef()
  
  const [entered,setEntered]=useState(true)
  
  const [current,setCurrent]=useState(1)
      const pos1=[-62,-18.5,65,0]
      const pos2=[-51,-18.5,65,-30]
      const pos3=[-48,-18.5,84,-135]
      const pos4=[-60,-18.5,90,180]
      const pos5=[-72,-18.5,84,135]
      const pos6=[-73,-18.5,66,30]

      
  const right=()=>{
      if (current===1){
        const positions=[pos2,pos3,pos4,pos5,pos6,pos1]
        loopThroughPositions(positions)
        setCurrent(()=>6)
      }

      if (current===2){
        const positions=[pos1,pos2,pos3,pos4,pos5,pos6]
        loopThroughPositions(positions)
        setCurrent(()=>current-1)
      }
      if (current===3){
        const positions=[pos6,pos1,pos2,pos3,pos4,pos5]
        loopThroughPositions(positions)
        setCurrent(()=>current-1)
      }
      if (current===4){
        const positions=[pos5,pos6,pos1,pos2,pos3,pos4]
        loopThroughPositions(positions)
        setCurrent(()=>current-1)
      }
      if (current===5){
        const positions=[pos4,pos5,pos6,pos1,pos2,pos3]
        loopThroughPositions(positions)
        setCurrent(()=>current-1)
      }
      if (current===6){
        const positions=[pos3,pos4,pos5,pos6,pos1,pos2]
        loopThroughPositions(positions)
        setCurrent(()=>current-1)
      }

      
      
      
  }
  
  const left=()=>{
    if (current===1){
      const positions=[pos6,pos1,pos2,pos3,pos4,pos5]
       
      loopThroughPositions(positions)
      setCurrent(()=>current+1)
    }

    if (current===2){
      const positions=[pos5,pos6,pos1,pos2,pos3,pos4]
      loopThroughPositions(positions)
      setCurrent(()=>current+1)
    }

    if (current===3){
      const positions=[pos4,pos5,pos6,pos1,pos2,pos3]
      loopThroughPositions(positions)
      setCurrent(()=>current+1)
    }

    if (current===4){
      const positions=[pos3,pos4,pos5,pos6,pos1,pos2]
      loopThroughPositions(positions)
      setCurrent(()=>current+1)
    }

    if (current===5){
      const positions=[pos2,pos3,pos4,pos5,pos6,pos1]
      loopThroughPositions(positions)
      setCurrent(()=>current+1)
    }

    if (current===6){
      const positions=[pos1,pos2,pos3,pos4,pos5,pos6]
      loopThroughPositions(positions)
      setCurrent(()=>1)
    }
    
  }
  const loopThroughPositions=(positions)=>{
    const portals=[portal1,portal2,portal3,portal4,portal5,portal6]
    for (let i=0; i<=5;i++){
    changePosition(portals[i],positions[i])
    rotatePortal(portals[i],positions[i][3])
    }
  }
  const changePosition=(portal,pos,portalToRotate,degree)=>{
    
    gsap.to(portal.current.position,{x:pos[0]})
    gsap.to(portal.current.position,{y:pos[1]})
    gsap.to(portal.current.position,{z:pos[2]})
  }
  const rotatePortal=(portalToRotate,degree)=>{
    gsap.to(portalToRotate.current.rotation,{y:degree*(Math.PI/180)})
  }
  //
  return (
    <>  <h1 className='heading'>Heading one goes here</h1>
        <h2 className='subheading'>Sub heading one goes here</h2>
        <h1 className='title' >Experience Luxury of portal {current}</h1>
        <h2 className='title2'>Explore a taste of sophistication with your favourite Spritzer.</h2>
            <img src='right-arrow.png' className='btn1' onClick={right} ></img>
            <img src='right-arrow.png' className='btn2' onClick={left} ></img>
            <h1 className='current' > {current}/6</h1>
        
        
     <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>
      <Canvas style={{background:'linear-gradient(90deg, rgba(245,182,168,1) 0%, rgba(241,121,96,1) 52%, rgba(249,213,206,1) 100%)'}}   >
        <PerspectiveCamera   ref={camera} position={[60,15,-73]} rotation={[0,0,0]}>
          <CameraControls minAzimuthAngle={-5*(Math.PI/180)} maxAzimuthAngle={5*(Math.PI/180)} minPolarAngle={90*(Math.PI/180)} maxPolarAngle={0*(Math.PI/180)} truckSpeed={0} maxDistance={5} minDistance={5} ref={control} />


          <RoundedRectangle scale={[1,1,1]} position={pos1} rotation={pos1[3]} reference={portal1} portalNum={1} color={'hotpink'}></RoundedRectangle>
          <RoundedRectangle scale={[1,1,1]} position={pos2} rotation={pos2[3]} reference={portal2} portalNum={2} color={'dodgerblue'}></RoundedRectangle>
          <RoundedRectangle scale={[1,1,1]} position={pos3} rotation={pos3[3]} reference={portal3} portalNum={3} color={'red'}></RoundedRectangle>
          <RoundedRectangle scale={[1,1,1]} position={pos4} rotation={pos4[3]} reference={portal4} portalNum={4} color={'skyblue'}></RoundedRectangle>
          <RoundedRectangle scale={[1,1,1]} position={pos5} rotation={pos5[3]} reference={portal5} portalNum={5} color={'teal'}></RoundedRectangle>
          <RoundedRectangle scale={[1,1,1]} position={pos6} rotation={pos6[3]} reference={portal6} portalNum={6} color={'yellow'}></RoundedRectangle>

        <Sparkles position={[-60,-15,60]} size={15} scale={22} count={200} speed={1} color={'white'} />
        </PerspectiveCamera>
        
      
      
      </Canvas>
     </div>
    </>
  )
}

function RoundedRectangle({scale,position,rotation,color,reference,portalNum}) {
  let x = 0;
  let y = 0;
  let width = 5;
  let height = 10;
  let radius = 2.5;

  let shape = new Shape();
  shape.moveTo(x, y);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);
  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y);
  shape.lineTo(x, y);

  let geometry = new ShapeGeometry(shape);
    

  return <mesh ref={reference}  geometry={geometry} scale={scale} position={position} rotation={[0,rotation*(Math.PI/180),0]} >
      <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={0}>
              <color attach="background" args={[color]} />
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {portalNum}</Text>
              <MainCar position={[0,3,0]} scale={[1,1,1]}/>
              <Environment preset='city'/>
            </MeshPortalMaterial>
      </mesh>;
}


export default App
