import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera,CameraControls, Environment, Html, Image } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Bar } from './Bar'
import gsap from 'gsap'
export default function Portal1(){
    const camera=useRef()
    const [btn,setbtn]=useState(true)
    const [bottlescreen,setbottlescreen] = useState(false)
    const [currentPhase,setCurrentPhase] = useState('enterScreen')
    const enter=()=>{
        gsap.to(camera.current.position,{z:-20})
        gsap.to(camera.current.position,{y:-5})
        gsap.to(camera.current.position,{x:35})
        setCurrentPhase("pickScreen")
    }
    const openbottle=()=>{
        
        gsap.to(".bottlescreen",{width:"75dvw"})
        setCurrentPhase('bottleScreen')
    }
    const closebottle=()=>{
        console.log('clickeds')
        //setbottlescreen(false)
        gsap.to(".bottlescreen",{width:"0dvw"})
        setCurrentPhase('pickScreen')

    }
    const openplaylist=()=>{
            gsap.to('.lyricscreen',{height:'35dvh'})
            gsap.to('.lyricscreen',{width:'30dvw'})
            console.log('clicked')
            setCurrentPhase('lyricsScreen')
    }
    const closeplaylist=()=>{
            gsap.to('.lyricscreen',{height:'0dvh'})
            gsap.to('.lyricscreen',{width:'0dvw'})
            console.log('closed')
            setCurrentPhase('pickScreen')
    }
    return(
        <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>

        {currentPhase==='enterScreen' && <button onClick={enter} className='enterbtn' >Enter journey</button>}
        {currentPhase==='pickScreen' &&  <div className='slider'>
            <button onClick={()=>{gsap.to(camera.current.position,{x:35})}} className='sliderbtn'> scene 1</button>
            <button onClick={()=>{gsap.to(camera.current.position,{x:0})}} className='sliderbtn'> scene 2</button>
            <button onClick={()=>{gsap.to(camera.current.position,{x:-35})}} className='sliderbtn'> scene 3</button>
            </div>}
        {  <div className='bottlescreen'>
            <button onClick={closebottle} style={{top:"15%",position:"absolute",height:"5dvh",width:"10dvw"}}>Go back</button>
            <h1 style={{fontSize:'4vh'}}>BRUTAL FRUIT SPRITZER RUBY APPLE</h1>
            <p1 style={{fontSize:'3vh'}}>Ruby Apple is an exquisite infusion citrus and apple flavouring with a hint of grapefruit. The balance of sweet and zesty is complemented by delicate notes of fruit, spice and honey providing a gorgeous depth of citrus.</p1>
            <div className='stats'>
                
                    <div className='statsboxes'>
                        <h2>5,00</h2>
                        <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2>
                    </div>
                    <div className='statsboxes'>
                        <h2>5,00</h2>
                        <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2>
                    </div>
                    <div className='statsboxes'>
                        <h2>5,00</h2>
                        <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2>
                    </div>
                    <div className='statsboxes'>
                        <h2>5,00</h2>
                        <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2>
                    </div>
                    <div className='statsboxes'>
                        <h2>5,00</h2>
                        <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2>
                    </div>
               
                
            </div>
       </div>}

       { <div className='lyricscreen'>
        <div className='top'>
            <h2>Spotify Playlist</h2>
            <button onClick={closeplaylist} style={{height:'3vh',width:"5vw"}}>Go back</button>
        </div>
        <div className='mid'>
            <p2 style={{}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero, velit voluptates laboriosam ratione nemo explicabo eius quia modi accusantium eos exercitationem est eligendi. Nobis repellat eveniet ad beatae quas?</p2>
        </div>
       </div>

       }
            <Canvas style={{background:'linear-gradient(90deg, rgba(245,182,168,1) 0%, rgba(241,121,96,1) 52%, rgba(249,213,206,1) 100%)'}}   >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls  />
                    <Bar rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
                    <Bar position={[35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
                    <Bar position={[-35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
                    <Image onClick={openbottle} scale={[3,3,3]} position={[-35,8,10]}  url='/circle.png' ></Image>
                    <Image onClick={openplaylist} scale={[3,3,3]} position={[-40,6,10]}  url='/circle.png' ></Image>
                    <Image scale={[3,3,3]} position={[-32,4,10]}  url='/circle.png' ></Image>

                    <Html position={[0,10,0]}><h1>Hello</h1></Html>
                </PerspectiveCamera>
                <Environment preset='city'/>
            </Canvas>
        </div>
    )
}