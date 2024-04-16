import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera,CameraControls, Environment, Html } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Bar } from './Bar'
import gsap from 'gsap'
export default function Portal1(){
    const camera=useRef()
    const [btn,setbtn]=useState(true)
    const enter=()=>{
        setbtn(false)
        gsap.to(camera.current.position,{z:-25})
        gsap.to(camera.current.position,{y:-5})
        gsap.to(camera.current.position,{x:35})
    }
    return(
        <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>

        {btn && <button onClick={enter} className='enterbtn' >Enter journey</button>}
        {!btn && <div className='slider'>
            <button onClick={()=>{gsap.to(camera.current.position,{x:35})}} className='sliderbtn'> scene 1</button>
            <button onClick={()=>{gsap.to(camera.current.position,{x:0})}} className='sliderbtn'> scene 2</button>
            <button onClick={()=>{gsap.to(camera.current.position,{x:-35})}} className='sliderbtn'> scene 3</button>
            </div>}
            <Canvas style={{background:'linear-gradient(90deg, rgba(245,182,168,1) 0%, rgba(241,121,96,1) 52%, rgba(249,213,206,1) 100%)'}}   >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls  />
                    <Bar rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
                    <Bar position={[35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
                    <Bar position={[-35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>

                    <Html position={[0,10,0]}><h1>Hello</h1></Html>
                </PerspectiveCamera>
                <Environment preset='city'/>
            </Canvas>
        </div>
    )
}