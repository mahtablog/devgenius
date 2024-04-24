import './App.css'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera,CameraControls, Environment, Html, Image, Circle, Box } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Bar } from './Bar'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
export default function Portal1(){
    const isMobile=window.matchMedia("only screen and (max-width: 767px)").matches
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

    const pos1=isMobile?[-9,2,-15]:[-40,5,10]
    const pos2=isMobile?[0,-10,5]:[0,5,10]
    const pos3=isMobile?[12,5,-25]:[40,5,10]
    
    console.log(pos1,'lmao')
    const enter=()=>{
        if (isMobile){
            gsap.to(camera.current.position,{z:-25})
            gsap.to(camera.current.position,{y:10})
            gsap.to(camera.current.position,{x:0})
            setCurrentPhase("pickScreen")
            setentered(true)
        }
        else{
            gsap.to(camera.current.position,{z:-20})
            gsap.to(camera.current.position,{y:-5})
            gsap.to(camera.current.position,{x:40})
            setCurrentPhase("pickScreen")
            setentered(true)
        }
        
    }
    const openbottle=()=>{
        
        if (isMobile){
            gsap.to('.returnbtn',{height:'0dvh'})
            gsap.to('.returnbtn',{width:'0dvw'})
        }
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
        if (isMobile)
        {
            gsap.to('.slider',{width:'70dvw'})
            gsap.to('.returnbtn',{height:'5dvh'})
            gsap.to('.returnbtn',{width:'40dvw'})
    }
        else gsap.to('.slider',{width:'30dvw'})
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
        
        if (isMobile){
            gsap.to('.slider',{width:'70dvw'})
        }else {
            gsap.to('.slider',{width:'30dvw'})

        }
            gsap.to('.lyricscreen',{height:'0dvh'})
            gsap.to('.lyricscreen',{width:'0dvw'})
            
            gsap.to('.slider',{height:'10dvh'})
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
        if (isMobile){
            gsap.to('.slider',{width:'70dvw'})
        }else {
            gsap.to('.slider',{width:'30dvw'})

        }
        gsap.to('.videoscreen',{height:'0dvh'})
        gsap.to('.videoscreen',{width:'0dvw'})
        gsap.to('.slider',{height:'10dvh'})
        setCurrentPhase('pickScreen')
    }

    const screen1=()=>{
        if (isMobile){
            gsap.to(camera.current.position,{z:-25})
            gsap.to(camera.current.position,{y:10})
            gsap.to(camera.current.position,{x:0})
            gsap.to('.blackline1',{width:"0%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"-1%"})
            setcurrentscreen('1')
        }
        else{
            gsap.to(camera.current.position,{x:40})
            gsap.to('.blackline1',{width:"0%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"0%"})
            setcurrentscreen('1')
        }
        

    }
    const screen2=()=>{
        if(isMobile){
            gsap.to(camera.current.position,{z:-3})
            gsap.to(camera.current.position,{y:-5})
            gsap.to(camera.current.position,{x:9})
            gsap.to('.blackline1',{width:"30%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"41%"})
            setcurrentscreen('2')
        }
        else{
            gsap.to(camera.current.position,{x:0})
            gsap.to('.blackline1',{width:"37%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"45%"})
            setcurrentscreen('2')
        }
        


    }
    const screen3=()=>{
        if(isMobile){
            gsap.to(camera.current.position,{z:5})
            gsap.to(camera.current.position,{y:-5})
            gsap.to(camera.current.position,{x:-12})
            gsap.to('.blackline1',{width:"30%"})
            gsap.to('.blackline2',{width:"30%"})
            gsap.to('.sliderimg',{left:"83%"})
            setcurrentscreen('3')
        }
        else{
            gsap.to(camera.current.position,{x:-40})
            gsap.to('.blackline1',{width:"37%"})
            gsap.to('.blackline2',{width:"40%"})
            gsap.to('.sliderimg',{left:"94%"})
        setcurrentscreen('3')
        }
        


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
        {!entered &&<img className='logo' src='slider.png'></img>}
        {!entered &&<h2 className='welcome'>WELCOME TO THE</h2>}
        {!entered &&<h2 className='spritzer'>Spritzer-Verse</h2>}
        
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


        {curentscreen==='1' && <BottleScreen currentScreen={currentPhase} isMobile={isMobile} closeBottle={closebottle} title={'BRUTAL FRUIT SPRITZER RUBY APPLE'} paragraph={'Ruby Apple is an exquisite infusion citrus and apple flavouring with a hint of grapefruit. The balance of sweet and zesty is complemented by delicate notes of fruit, spice and honey providing a gorgeous depth of citrus.'}/> }
        {curentscreen==='2' && <BottleScreen currentScreen={currentPhase} isMobile={isMobile} closeBottle={closebottle} title={'BRUTAL FRUIT SPRITZER STRAWBERRY ROUGE'} paragraph={'Strawberry Rouge is a drink complemented by a fruity blend of wild strawberry and crisp apple flavouring that offers a slightly more sweet than sour taste. The liquid has hints of floral botanicals and cotton candy which provides depth and complexity.'}/> }
        {curentscreen==='3' && <BottleScreen currentScreen={currentPhase} isMobile={isMobile} closeBottle={closebottle} title={'BRUTAL FRUIT SPRITZER LITCHI SEECHE'} paragraph={'Litchi Seche is a sophisticated drink complemented by an infusion of litchi and apple flavouring. The liquid is prepped with hints of white blossom and peach to create a perfect sparkling blend of golden demi-sec refreshment. '}/> }

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

        {curentscreen==='1'&& !isMobile && <img src='bottle.png' className='bottle'></img>}
        {curentscreen==='2'&& !isMobile && <img src='bottle3.png' className='bottle'></img>}
        {curentscreen==='3'&& !isMobile && <img src='bottle2.png' className='bottle'></img>}
        
            <Canvas style={{backgroundImage:'url("bg.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}   >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls  />
                    
                    
                    
                    <Image transparent scale={[15,13,13]} position={pos1} url='/world 1.png'></Image>
                    <Image transparent scale={[15,13,13]} position={pos2} url='/world 2.png'></Image>
                    <Image transparent scale={[15,13,13]} position={pos3} url='/world 3.png'></Image>
                    
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


const BottleScreen=({closeBottle,title,paragraph,isMobile,currentScreen})=>{
    return(
        <>
        {isMobile  && currentScreen==='bottleScreen' && <button onClick={closeBottle} className='closebtnmobile'>X</button>}
        <div className='bottlescreen'>
        {!isMobile && <button onClick={closeBottle} className='closebtn'>X</button>}
        
        <h1>{title}</h1>
        <p1 >{paragraph}</p1>
        <img src='sliderbg.png' className='bottlelogobg'></img>
        {!isMobile && <div className='stats'>
            <div className='innertop'>
                <div className='innertopbox'><h2>5,00</h2></div>
                <div className='innertopbox'><h2>7,00</h2></div>
                <div className='innertopbox'><h2>63,00</h2></div>
                <div className='innertopbox'><h2>263,00</h2></div>
                <div className='innertopbox'><h2>6,80</h2></div>
            </div>
            <div className='innerbottom'>
                <div className='innerbottombox'><p2 style={{fontSize:"2.1vh"}} >Alcohol by volume</p2></div>
                <div className='innerbottombox'><p2 style={{fontSize:"2.1vh"}} >CarboHydrates G/100ml</p2></div>
                <div className='innerbottombox'><p2 style={{fontSize:"2.1vh"}} >Energy Kcal/100ml</p2></div>
                <div className='innerbottombox'><p2 style={{fontSize:"2.1vh"}} >Energy Kj</p2></div>
                <div className='innerbottombox'><p2 style={{fontSize:"2.1vh"}} >Sugar G/100</p2></div>
            </div>
        </div>}

        {isMobile && 
        <div className='statsmobile'>
            <div className='innerstatsmobile' >
                <div className='i2m'>
                    <div className='i2mbox'><h2>5,00</h2></div>
                    <div className='i2mbox'><h2>7,00</h2></div>
                    <div className='i2mbox'><h2>63,00</h2></div>
                </div>
                <div className='i2m'>
                    <div className='i2mbox'><p2>Alcohol by volume</p2></div>
                    <div className='i2mbox'><p2>CarboHydrates G/100ml</p2></div>
                    <div className='i2mbox'><p2>Energy Kcal/100ml</p2></div>
                </div>
            </div>
            <div className='innerstatsmobile2' >
                <div className='i2m2'>
                 <div className='i2mbox2'><h2>263,00</h2></div>
                 <div className='i2mbox2'><h2>6,80</h2></div>

                </div>
                <div className='i2m2'>
                 <div className='i2mbox2'><p2  >Energy Kj</p2></div>
                 <div className='i2mbox2'><p2  >Sugar G/100</p2></div>

                </div>
            </div>
        </div>

        }
   </div>
   </>
    )
}
/*

        <Bar rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>
        <Bar position={[-35,0,0]} rotation={[0,0*(Math.PI/180),0]} scale={[0.20,0.20,0.20]}/>

        <div className='statsboxes'>  </div>
            <div className='statsboxes'></div>
            <div className='statsboxes'></div>
            <div className='statsboxes'></div>
            <div className='statsboxes'> </div>

*/