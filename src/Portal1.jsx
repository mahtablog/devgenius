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
    const [curentscreen,setcurrentscreen] = useState('1')
    useEffect(()=>{
        //audio.current.play()

    },[])
    //audio.play()
    const camera=useRef()
    const [btn,setbtn]=useState(true)
    const [bottlescreen,setbottlescreen] = useState(false)
    const [currentPhase,setCurrentPhase] = useState('enterScreen')
    const [audiobtntext,setaudiobtntext] = useState('Mute')
    const [entered,setentered]=useState(false)
    const enter=()=>{
        gsap.to(camera.current.position,{z:-20})
        gsap.to(camera.current.position,{y:-5})
        gsap.to(camera.current.position,{x:40})
        setCurrentPhase("pickScreen")
        setentered(true)
    }
    const openbottle=()=>{
        
        gsap.to(".bottlescreen",{width:"75dvw"})
        gsap.to(".bottle",{width:"15dvw"})
        gsap.to(".bottle",{height:"70dvh"})
        gsap.to('.slider',{height:'0dvh'})
        gsap.to('.slider',{width:'0dvw'})
        setCurrentPhase('bottleScreen')
    }
    const closebottle=()=>{
        console.log('clickeds')
        //setbottlescreen(false)
        gsap.to(".bottlescreen",{width:"0dvw"})
        gsap.to(".bottle",{width:"0dvw"})
        gsap.to(".bottle",{height:"0dvh"})
        gsap.to('.slider',{height:'10dvh'})
        gsap.to('.slider',{width:'30dvw'})


        setCurrentPhase('pickScreen')

    }
    const openplaylist=()=>{
            gsap.to('.lyricscreen',{height:'40dvh'})
            gsap.to('.lyricscreen',{width:'30dvw'})
            gsap.to('.slider',{height:'0dvh'})
        gsap.to('.slider',{width:'0dvw'})
            setCurrentPhase('lyricsScreen')
    }
    const closeplaylist=()=>{
            gsap.to('.lyricscreen',{height:'0dvh'})
            gsap.to('.lyricscreen',{width:'0dvw'})
            
            gsap.to('.slider',{height:'10dvh'})
        gsap.to('.slider',{width:'30dvw'})
            setCurrentPhase('pickScreen')
    }
    const openvideo=()=>{
        gsap.to('.videoscreen',{height:'75dvh'})
        gsap.to('.videoscreen',{width:'90dvw'})
        gsap.to('.slider',{height:'0dvh'})
        gsap.to('.slider',{width:'0dvw'})
        setCurrentPhase('videoScreen')

    }
    const closevideo=()=>{
        gsap.to('.videoscreen',{height:'0dvh'})
        gsap.to('.videoscreen',{width:'0dvw'})
        gsap.to('.slider',{height:'10dvh'})
        gsap.to('.slider',{width:'30dvw'})
        setCurrentPhase('pickScreen')
    }

    const screen1=()=>{
        gsap.to(camera.current.position,{x:40})
        gsap.to('.blackline1',{width:"0%"})
        gsap.to('.blackline2',{width:"0%"})
        gsap.to('.sliderimg',{left:"0%"})
        setcurrentscreen('1')

    }
    const screen2=()=>{
        gsap.to(camera.current.position,{x:0})
        gsap.to('.blackline1',{width:"37%"})
        gsap.to('.blackline2',{width:"0%"})
        gsap.to('.sliderimg',{left:"45%"})
        setcurrentscreen('2')


    }
    const screen3=()=>{
        gsap.to(camera.current.position,{x:-40})
        gsap.to('.blackline1',{width:"37%"})
        gsap.to('.blackline2',{width:"40%"})
        gsap.to('.sliderimg',{left:"94%"})
        setcurrentscreen('3')


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
        {entered &&  <div className='slider'>
            
            <div className='whiteline1'></div>
            <div className='blackline1'></div>
            <div className='whiteline2'></div>
            <div className='blackline2'></div>
            <img src='slider.png' className='sliderimg'></img>
            {curentscreen!=='1' && <button onClick={screen1} className='sliderbtn1'> </button>}
            {curentscreen!=='2' && <button onClick={screen2} className='sliderbtn2'> </button>}
            {curentscreen!=='3' &&<button onClick={screen3} className='sliderbtn3'> </button>}
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
        
        {<img src='sound-bars.png' onClick={handleAudio} className='audiobtn'></img>}

        {curentscreen==='1'&&<img src='bottle.png' className='bottle'></img>}
        {curentscreen==='2'&&<img src='bottle3.jpeg' className='bottle'></img>}
        {curentscreen==='3'&&<img src='bottle2.jpeg' className='bottle'></img>}
        
            <Canvas style={{backgroundImage:'url("bg.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}   >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls  />
                    
                    
                    
                    <Image scale={[15,13,13]} position={[-40,5,10]} url='/world 1.png'></Image>
                    <Image scale={[15,13,13]} position={[0,5,10]} url='/world 2.png'></Image>
                    <Image scale={[15,13,13]} position={[40,5,10]} url='/world 3.png'></Image>
                    
                    {entered && currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={[-40,8,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={[-36,2,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={[-46,4,11]}/>}

                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={[-0,8,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={[4,5,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={[-4,4,11]}/>}

                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={[40,8,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={[44,5,11]}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={[36,4,11]}/>}


                </PerspectiveCamera>
                <Environment preset='city'/>
            </Canvas>
        </div>
    )
}

const TouchPoint=({position,clicked})=>{
    return (
    <group onClick={clicked}>
        <mesh visible position={position} rotation={[0, 0, 0]} castShadow scale={[0.2,0.2,0.2]}>
            <ringGeometry   args={[3.8, 4, 28]} />
            <meshBasicMaterial attach="material" color="white" />
        </mesh>
        <mesh visible position={position} rotation={[0, 0, 0]} castShadow scale={[0.3,0.3,0.3]}>
            <ringGeometry   args={[3.8, 4, 28]} />
            <meshBasicMaterial attach="material" color="white" />
        </mesh>
        <Circle material-color={'white'} scale={[0.1,0.1,0.1]} position={position}></Circle>
        <Circle visible={false} scale={[1.2,1.2,1.2]} material-color={'black'} position={position}></Circle>
    </group>
    )
}
/*

        <Bar rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[-35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>

*/