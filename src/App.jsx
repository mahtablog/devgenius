import './App.css'
import { Canvas, useFrame,useThree } from '@react-three/fiber'
import { Shape, ShapeGeometry } from 'three';
import {Box,Sparkles, CameraControls, Environment, PerspectiveCamera, Sky,MeshPortalMaterial,Text, RoundedBox, Html, useTexture, Image} from '@react-three/drei'
import { Children, useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import * as THREE from 'three'
import _ from 'lodash';
import { Link, Route, Routes } from 'react-router-dom';
 function App() {

  const camera=useRef()
  const portal1=useRef()
  const portal2=useRef()
  const portal3=useRef()
  const portal4=useRef()
  const portal5=useRef()
  const portal6=useRef()
  const control=useRef()
  const [circle,setCircle]=useState(true)
  const [overlay,setOverlay]=useState(true)
  const [scene1,setScene1]=useState(0)
  const [scene2,setScene2]=useState(0)
  const [scene3,setScene3]=useState(0)
  const [scene4,setScene4]=useState(0)
  const [scene5,setScene5]=useState(0)
  const [scene6,setScene6]=useState(0)
  const [current,setCurrent]=useState(1)
      const pos1=[-62.5,-18.5,65,0]
      const pos2=[-52,-18.5,65,-30]
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
    gsap.to(".container",{opacity:0,duration:0.5})
    _.delay(()=>{gsap.to(".container",{opacity:1,duration:1})},500)
  }
  const changePosition=(portal,pos,portalToRotate,degree)=>{
    
    gsap.to(portal.current.position,{x:pos[0]})
    gsap.to(portal.current.position,{y:pos[1]})
    gsap.to(portal.current.position,{z:pos[2]})
  }
  const rotatePortal=(portalToRotate,degree)=>{
    gsap.to(portalToRotate.current.rotation,{y:degree*(Math.PI/180)})
  }
  const clicked=()=>{
    if (current ===1) {
      zoomCamera()
      changeScene(setScene1)
    }
    if (current ===2) {
      zoomCamera()
      changeScene(setScene2)
    }
    if (current ===3) {
    zoomCamera()
    changeScene(3)
    }
    if (current ===4) {
      zoomCamera()
      changeScene(setScene4)
      }
      if (current ===5) {
        zoomCamera()
        changeScene(setScene5)
        }
        if (current ===6) {
          zoomCamera()
          changeScene(setScene6)
      }
  }
const zoomCamera=()=>{
  gsap.to(camera.current.position,{z:-66,duration:1.5})
}
const changeScene=(setScene)=>{
  _.delay(()=>{
    setScene(1)
    setOverlay(false)
  },1500)
}
  //minAzimuthAngle={-5*(Math.PI/180)} maxAzimuthAngle={5*(Math.PI/180)} minPolarAngle={90*(Math.PI/180)} maxPolarAngle={0*(Math.PI/180)} truckSpeed={0} maxDistance={5} minDistance={5} ref={control}
  return (
    <>
    
      <Routes>
        <Route path='/Portal1'></Route>
        <Route path='/Portal2'></Route>
        <Route path='/Portal3'></Route>
        <Route path='/Portal4'></Route>
        <Route path='/Portal5'></Route>
        <Route path='/Portal6'></Route>
      </Routes>
    
    
    
      {overlay && <h1 className='heading'>Heading one goes here</h1>}
        {overlay && <h2 className='subheading'>Sub heading one goes here</h2>}
        {overlay && <h1 className='title' >Experience Luxury of portal {current}</h1>}
        {overlay && <h2 className='title2'>Explore a taste of sophistication with your favourite Spritzer.</h2>}
        {overlay && <img src='right-arrow.png' className='btn1' onClick={right} ></img>}
        {overlay && <img src='right-arrow.png' className='btn2' onClick={left} ></img>}
        {overlay && <h1 className='current' > {current}/6</h1>}
       <Link to={'Portal1'}> <div class="container">
          <div class="dot"></div>
          <div class="outline-circle"></div>
          <div class="outline-circle"></div>
        </div>
        </Link>

        
     <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>
      <Canvas style={{backgroundImage:'url("bg.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}   >
        <PerspectiveCamera   ref={camera} position={[60,15,-73]} rotation={[0,0,0]}>
          <CameraControls  />
            
         
          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos1} rotation={pos1[3]} reference={portal1} portalNum={1} >
            <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene2}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {1}</Text>
              <Image scale={[5,10,5]} position={[2.5,5,0]} url='portal2.jpeg'></Image>
              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>

          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos2} rotation={pos2[3]} reference={portal2} portalNum={2} color={'dodgerblue'}>
          <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene2}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {2}</Text>
              <Image scale={[5,10,5]} position={[2.5,5,0]} url='portal1pic.jpeg'></Image>
              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>
          
          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos3} rotation={pos3[3]} reference={portal3} portalNum={3} color={'red'}>
          <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene3}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {3}</Text>
              <Image scale={[5,10,5]} position={[2.5,5,0]} url='portal2.jpeg'></Image>

              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>
          
          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos4} rotation={pos4[3]} reference={portal4} portalNum={4} color={'skyblue'}>
          <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene4}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {4}</Text>
              <Image scale={[5,10,5]} position={[2.5,5,0]} url='portal2.jpeg'></Image>

              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>
          
          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos5} rotation={pos5[3]} reference={portal5} portalNum={5} color={'teal'}>
          <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene5}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {5}</Text>
              <Image scale={[5,10,5]} position={[2.5,5,0]} url='portal2.jpeg'></Image>

              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>
          <RoundedRectangle clicked={clicked} current={current} scale={[1,1,1]} position={pos6} rotation={pos6[3]} reference={portal6} portalNum={6} color={'yellow'}>
          <MeshPortalMaterial attach='material' resolution={2} side={THREE.DoubleSide} blend={scene6}>
              <Text position={[2.5,6.5,1]} fontSize={0.8} an >Portal {6}</Text>
              <Image scale={[6,10,5]} position={[2.5,5,0]} url='portal6pic.jpeg'></Image>

              <Environment preset='city'/>
            </MeshPortalMaterial>
          </RoundedRectangle>
          
        <Sparkles position={[-60,-15,60]} size={15} scale={22} count={200} speed={1} color={'white'} />
        </PerspectiveCamera>
        
      
      
      </Canvas>
     </div>
    </>
  )
}
function RoundedRectangle({scale,position,rotation,color,reference,portalNum,children,clicked}) {
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
  
  

  return <mesh onClick={clicked}  ref={reference}  geometry={geometry} scale={scale} position={position} rotation={[0,rotation*(Math.PI/180),0]} >
      {children}
      </mesh>;
}


export default App
