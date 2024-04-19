import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera,CameraControls, Environment, Html, Image, Circle, Box } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Bar } from './Bar'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
export default function Portal1(){
    const [isPlaying,setisPlaying] =useState(true)
    const audio=useRef()
    useEffect(()=>{
        audio.current.play()

    },[])
    //audio.play()
    const camera=useRef()
    const [btn,setbtn]=useState(true)
    const [bottlescreen,setbottlescreen] = useState(false)
    const [currentPhase,setCurrentPhase] = useState('enterScreen')
    const [audiobtntext,setaudiobtntext] = useState('Mute')
    const enter=()=>{
        gsap.to(camera.current.position,{z:-20})
        gsap.to(camera.current.position,{y:-5})
        gsap.to(camera.current.position,{x:40})
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
            gsap.to('.lyricscreen',{height:'40dvh'})
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
    const openvideo=()=>{
        gsap.to('.videoscreen',{height:'75dvh'})
        gsap.to('.videoscreen',{width:'90dvw'})
        setCurrentPhase('videoScreen')

    }
    const closevideo=()=>{
        gsap.to('.videoscreen',{height:'0dvh'})
        gsap.to('.videoscreen',{width:'0dvw'})
        setCurrentPhase('pickScreen')
    }

    const screen1=()=>{
        gsap.to(camera.current.position,{x:40})
        gsap.to('.blackline',{width:"0%"})
    }
    const screen2=()=>{
        gsap.to(camera.current.position,{x:0})
        gsap.to('.blackline',{width:"50%"})
    }
    const screen3=()=>{
        gsap.to(camera.current.position,{x:-40})
        gsap.to('.blackline',{width:"100%"})
    }
    const handleAudio = () => {
        if (isPlaying){
            audio.current.pause()
            setisPlaying(false)
        }
        if (!isPlaying){
            audio.current.play()
            setisPlaying(true)

        }
    }
    return(
        <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>
        <audio src='bgmusic.mp3' ref={audio}></audio>
        {currentPhase==='enterScreen' && <button onClick={enter} className='enterbtn' >Enter journey</button>}
        {currentPhase==='pickScreen' &&  <div className='slider'>
            <div className='whiteline'></div>
            <div className='blackline'></div>
            <button onClick={screen1} className='sliderbtn'> </button>
            <button onClick={screen2} className='sliderbtn'> </button>
            <button onClick={screen3} className='sliderbtn'> </button>
            </div>}
        {  <div className='bottlescreen'>
            <button onClick={closebottle} style={{top:"10%",position:"absolute",height:"4dvh",width:"2dvw",right:'10%',border:'0px',backgroundColor:"black",color:"white",borderRadius:"50%",cursor:"pointer"}}>X</button>
            <h1 style={{fontSize:'4vh'}}>BRUTAL FRUIT SPRITZER RUBY APPLE</h1>
            <p1 style={{fontSize:'3vh'}}>Ruby Apple is an exquisite infusion citrus and apple flavouring with a hint of grapefruit. The balance of sweet and zesty is complemented by delicate notes of fruit, spice and honey providing a gorgeous depth of citrus.</p1>
            <div className='stats'>
                <div className='statsboxes'> <h2>5,00</h2> <p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2></div>
                <div className='statsboxes'><h2>5,00</h2><p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2></div>
                <div className='statsboxes'><h2>5,00</h2><p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2></div>
                <div className='statsboxes'><h2>5,00</h2><p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2></div>
                <div className='statsboxes'> <h2>5,00</h2><p2 style={{fontSize:"2vh"}} >Alcohol by volume</p2></div>
            </div>
       </div>}

       {<div className='lyricscreen'>
        <div className='top'>
            <h2>Spotify Playlist</h2>
            <button onClick={closeplaylist} style={{height:'3vh',width:"1.5vw",border:'1px solid gray',borderRadius:"50%",right:"10%",position:'absolute',cursor:"pointer"}}>X</button>
        </div>
        <div className='mid'>
            <p2 style={{marginLeft:"1dvw",marginRight:"1dvw",fontSize:"2dvh"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero, velit voluptates laboriosam ratione nemo explicabo eius quia modi accusantium eos exercitationem est eligendi. Nobis repellat eveniet ad beatae quas?</p2>
        </div>
        </div>}

        {<div className='videoscreen'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MJt_Z11Ug8E?si=wopCpaXnbXOeo409&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>}

        {currentPhase==='videoScreen' && <button onClick={closevideo} className='vidbtn'>X</button>}
        {<button className='returnbtn'><Link style={{textDecoration:"none",color:"white"}} to={'/'}>Return to Home</Link></button>}
        
        {<button onClick={handleAudio} className='audiobtn'>{isPlaying?"Mute":"Play"}</button>}
            <Canvas style={{backgroundImage:'url("bg.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}   >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls  />
                    
                    
                    
                    <Image scale={[15,13,13]} position={[-40,5,10]} url='/world 1.png'></Image>
                    <Image scale={[15,13,13]} position={[0,5,10]} url='/world 2.png'></Image>
                    <Image scale={[15,13,13]} position={[40,5,10]} url='/world 3.png'></Image>
                    
                    <TouchPoint clicked={openbottle} position={[-40,8,11]}/>
                    <TouchPoint clicked={openvideo} position={[-36,2,11]}/>
                    <TouchPoint clicked={openplaylist} position={[-46,4,11]}/>

                    <TouchPoint clicked={openbottle} position={[-0,8,11]}/>
                    <TouchPoint clicked={openvideo} position={[4,5,11]}/>
                    <TouchPoint clicked={openplaylist} position={[-4,4,11]}/>

                    <TouchPoint clicked={openbottle} position={[40,8,11]}/>
                    <TouchPoint clicked={openvideo} position={[44,5,11]}/>
                    <TouchPoint clicked={openplaylist} position={[36,4,11]}/>


                </PerspectiveCamera>
                <Environment preset='city'/>
            </Canvas>
        </div>
    )
}

const TouchPoint=({position,clicked})=>{
    return (
    <group onClick={clicked}>
        <mesh visible position={position} rotation={[0, 0, 0]} castShadow scale={[0.3,0.3,0.3]}>
            <ringGeometry   args={[3.8, 4, 28]} />
            <meshBasicMaterial attach="material" color="black" />
        </mesh>
        <Circle material-color={'black'} scale={[0.2,0.2,0.2]} position={position}></Circle>
        <Circle visible={false} scale={[1.2,1.2,1.2]} material-color={'black'} position={position}></Circle>
    </group>
    )
}
/*

        <Bar rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[-35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>

*/