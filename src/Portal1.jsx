import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera,CameraControls, Environment, Html, Image, Circle, Box, Gltf, useGLTF, DragControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { useDrag } from 'react-use-gesture'
export default function Portal1(){
    const isMobile=window.matchMedia("only screen and (max-width: 767px)").matches
    
    const [isPlaying,setisPlaying] =useState(true)
    const audio=useRef()
    const [curentscreen,setcurrentscreen] = useState('1')
    const line1=useRef()
    let animation=null
    useEffect(()=>{
        playinganimation()
        //audio.current.play()
        
        //gsap.to('.line1',{height:'90%',repeat:-1})
        //gsap.to('.line1',{height:'0%',repeat:-1,delay:1})

        //tl.to('.line1',{height:'80%',duration:0.5})
        //tl.to('.line1',{height:'0%',duration:0.5})
        //tl.to('.line2',{height:'60%',duration:0.5})
        //tl.to('.line2',{height:'0%',duration:0.5})
        //tl.to('.line3',{height:'90%',duration:0.5})
        //tl.to('.line3',{height:'0%',duration:0.5})


    },[])
    //audio.play()

    const camera=useRef()
    const [btn,setbtn]=useState(true)
    const [bottlescreen,setbottlescreen] = useState(false)
    const [currentPhase,setCurrentPhase] = useState('enterScreen')
    const [audiobtntext,setaudiobtntext] = useState('Mute')
    const [entered,setentered]=useState(false)
    const [currentName,setCurrentName]=useState('Ruby Apple')

    const pos1=isMobile?[-12,0,-5]:[-40,5,10]
    const pos2=isMobile?[0,-5,15]:[0,5,10]
    const pos3=isMobile?[12,5,-5]:[40,5,10]

    const strawberryBottlePos=isMobile?[-12,1.5,-5]:[-39,6.2,11]
    const appleBottlePos=isMobile?[0,-3,15]:[0,6.5,11]
    const LitchiBottlePos=isMobile?[12,7,-5]:[39,6.8,11]

    const appleimage=useRef()
    const strawberryimage=useRef()
    const litchiimage=useRef()

    const appleref=useRef()
    const strawberryref=useRef()
    const litchiref=useRef()

    const appleBottle=useRef()
    const strawberryBottle=useRef()
    const litchiBottle=useRef()

    const touchpoint1=isMobile?[-20,-2,20]:[-40,8,11]
    const touchpoint2=isMobile?[-16.9,-7,20]:[-36,2,11]
    const touchpoint3=isMobile?[-24.6,-5,20]:[-46,4,11]
    const touchpoint4=isMobile?[0,-2,20]:[-0,8,11]
    const touchpoint5=isMobile?[-2.5,-7.5,20]:[4,5,11]
    const touchpoint6=isMobile?[2.5,-8,20]:[-4,4,11]
    const touchpoint7=isMobile?[20,-2,20]:[40,8,11]
    const touchpoint8=isMobile?[16.3,-6.5,20]:[44,5,11]
    const touchpoint9=isMobile?[22.7,-5.8,20]:[36,4,11]
    
    
    const [hovering,setHovering]=useState(false)

    const rotateBottle=()=>{
        if (hovering){

        }
    }
    
    const enter=()=>{
        if (isMobile){
            gsap.to(camera.current.position,{z:-35})
            gsap.to(camera.current.position,{y:3})
            gsap.to(camera.current.position,{x:20})
            //gsap.to(strawberryBottle.current.position,{z:15})

            gsap.to(strawberryref.current.position,{x:-8})
            gsap.to(strawberryref.current.position,{y:-5})
            gsap.to(strawberryref.current.position,{z:20})


            gsap.to(strawberryimage.current.position,{z:15})
            gsap.to(strawberryimage.current.position,{y:-5})
            gsap.to(strawberryimage.current.position,{x:-20})

            gsap.to(litchiref.current.position,{z:20})
            gsap.to(litchiref.current.position,{y:-10})
            gsap.to(litchiref.current.position,{x:8})

            gsap.to(litchiimage.current.position,{z:15})
            gsap.to(litchiimage.current.position,{y:-5})
            gsap.to(litchiimage.current.position,{x:20})



            //gsap.to(strawberryimage.current.position,{z:-5})
            setCurrentPhase("pickScreen")
            setentered(true)
        }
        else{
            gsap.to(camera.current.position,{z:-17})
            gsap.to(camera.current.position,{y:-3})
            gsap.to(camera.current.position,{x:40})
            
            gsap.to(strawberryref.current.position,{z:0})
            gsap.to(strawberryref.current.position,{y:0})
            gsap.to(strawberryref.current.position,{x:-1})

            gsap.to(litchiref.current.position,{z:0})
            gsap.to(litchiref.current.position,{y:0})
            gsap.to(litchiref.current.position,{x:1})
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
            gsap.to(camera.current.position,{z:-35})
            gsap.to(camera.current.position,{y:3})
            gsap.to(camera.current.position,{x:20})
            gsap.to('.blackline1',{width:"0%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"-1%"})
            setCurrentName('Ruby Apple')

            setcurrentscreen('1')
        }
        else{
            gsap.to(camera.current.position,{x:40})
            gsap.to('.blackline1',{width:"0%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"0%"})
            setCurrentName('Ruby Apple')
            setcurrentscreen('1')
            
        }
        

    }
    const screen2=()=>{
        if(isMobile){
            gsap.to(camera.current.position,{z:-35})
            gsap.to(camera.current.position,{y:3})
            gsap.to(camera.current.position,{x:0})
            gsap.to('.blackline1',{width:"30%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"41%"})
            setcurrentscreen('2')
            setCurrentName('Strawberry Rogue')

        }
        else{
            gsap.to(camera.current.position,{x:0})
            gsap.to('.blackline1',{width:"37%"})
            gsap.to('.blackline2',{width:"0%"})
            gsap.to('.sliderimg',{left:"45%"})
            setCurrentName('Strawberry Rogue')
            setcurrentscreen('2')

        }
        


    }
    const screen3=()=>{
        if(isMobile){
            gsap.to(camera.current.position,{z:-35})
            gsap.to(camera.current.position,{y:3})
            gsap.to(camera.current.position,{x:-20})
            gsap.to('.blackline1',{width:"30%"})
            gsap.to('.blackline2',{width:"30%"})
            gsap.to('.sliderimg',{left:"83%"})
            setCurrentName('Litchi Seeche')

            setcurrentscreen('3')
        }
        else{
            gsap.to(camera.current.position,{x:-40})
            gsap.to('.blackline1',{width:"37%"})
            gsap.to('.blackline2',{width:"40%"})
            gsap.to('.sliderimg',{left:"94%"})
            setCurrentName('Litchi Seeche')
        setcurrentscreen('3')
        }
        


    }
    //const tl=gsap.to('.line2',{height90^})
    const playinganimation=()=>{
        gsap.to('.line1',{height:'90%',repeat:-1})

    }
    const stopganimation=()=>{
        gsap.to('.line1',{height:'50%',})

    }
    const handleAudio = () => {
        if (isPlaying){
            //audio.current.pause()
           //gsap.to('.line1',{height:'30%'})
            stopganimation()
            setisPlaying(false)
            
        }
        if (!isPlaying){
            //audio.current.play()
            playinganimation()
            setisPlaying(true)

        }
    }
    
    return(
        <div style={{height:'100dvh',width:'100dvw',display:'flex',justifyContent:"center",alignItems:"center"}}>
        <audio src='bgmusic.mp3' ref={audio}></audio>
        {entered &&   <h2 className='name'>{currentName}</h2>}
        {!entered && !isMobile &&<img className='logo' src='slider.png'></img>}
        {!entered && !isMobile &&<h2 className='welcome'>WELCOME TO THE</h2>}
        {!entered && !isMobile &&<h2 className='spritzer'>Spritzer-Verse</h2>}
        
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

        {curentscreen==='1'&& !isMobile && <img src='bottle.png' className='bottle'></img>}
        {curentscreen==='2'&& !isMobile && <img src='bottle3.png' className='bottle'></img>}
        {curentscreen==='3'&& !isMobile && <img src='bottle2.png' className='bottle'></img>}


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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MJt_Z11Ug8E?si=wopCpaXnbXOeo409&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>}

        {currentPhase==='videoScreen' && <button onClick={closevideo} className='vidbtn'>X</button>}

        {<button className='returnbtn'><Link style={{textDecoration:"none",color:"white"}} to={'/'}>Return to Home</Link></button>}
        
        {<div onClick={handleAudio} className='audiobtn'>
            <div className='line1' ref={line1}></div>
            <div className='line2'></div>
            <div className='line3'></div>
         </div>}
         

        
        
            <Canvas  style={{backgroundImage:isMobile?'url("mobilebackground.jpeg")':'url("desktopbackground_cleanup.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}    >
                <PerspectiveCamera   ref={camera} position={[0,-7,-45]} rotation={[0,0,0]}>
                    <CameraControls minAzimuthAngle={0*(Math.PI/180)} maxAzimuthAngle={0*(Math.PI/180)} minPolarAngle={90*(Math.PI/180)} maxPolarAngle={0*(Math.PI/180)} truckSpeed={0} maxDistance={5} minDistance={5} />
                    
                    
                    
                    <Image ref={strawberryimage}transparent scale={[15,13,13]} position={pos1} url='/world 1.png'></Image>
                    <Image ref={appleimage} transparent scale={[15,13,13]} position={pos2} url='/world 2.png'></Image>
                    <Image ref={litchiimage} transparent scale={[15,13,13]} position={pos3} url='/world 3.png'></Image>

                    
                    <Apple isMobile={isMobile}  appleref={appleref} scale={[0.6,0.6,0.6]} position={appleBottlePos}/>
                    <Strawberry isMobile={isMobile}  strawberryref={strawberryref}  scale={[0.6,0.6,0.6]} position={strawberryBottlePos}/>
                    <Litchi isMobile={isMobile}  litchiref={litchiref} scale={[0.6,0.6,0.6]} position={LitchiBottlePos}/>

                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={touchpoint1}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={touchpoint2}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={touchpoint3}/>}

                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={touchpoint4}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={touchpoint5}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={touchpoint6}/>}

                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openbottle} position={touchpoint7}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openvideo} position={touchpoint8}/>}
                    {entered &&currentPhase==='pickScreen' && <TouchPoint clicked={openplaylist} position={touchpoint9}/>}


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



        {curentscreen==='1'&& !isMobile && <img src='bottle.png' className='bottle'></img>}
        {curentscreen==='2'&& !isMobile && <img src='bottle3.png' className='bottle'></img>}
        {curentscreen==='3'&& !isMobile && <img src='bottle2.png' className='bottle'></img>}
*/

const Apple=(props)=>{

    const bottle=useRef()
    useFrame(()=>{
        bottle.current.rotation.y+=0.02
    })
    const { scene } = useGLTF("Strawberry Bottle.glb");
    const bind = useDrag(({ down, movement: [mx, my], first }) => {
        if (!props.isMobile){

            if (first) 
            {
                setOriginalPosition(bottle.current.position.clone());
            }       
            gsap.to(bottle.current.position, {
            x: down ? mx / 100 : 0,
            y: down ? (-my / 100)+6.5 : 6.5, // Use '-my' for the y-coordinate
            duration: down ? 0 : 1,
        });
    }
    });
    return (
        
        <group ref={props.appleref}  >
          <primitive ref={bottle} {...bind()} onMouseEnter={()=>{console.log('sss')}} object={scene} {...props} />
        </group>
        
      );
}

const Strawberry=(props)=>{
    const { scene } = useGLTF("Apple Bottle.glb");
    const bottle2=useRef()
    useFrame(()=>{
        bottle2.current.rotation.y+=0.02
    })
    const bind = useDrag(({ down, movement: [mx, my], first }) => {
        if (!props.isMobile){

            if (first) 
            {
                setOriginalPosition(bottle2.current.position.clone());
            }       
            gsap.to(bottle2.current.position, {
            x: down ? (mx / 100) -39: -39,
            y: down ? (-my / 100)+6.2 : 6.2, // Use '-my' for the y-coordinate
            duration: down ? 0 : 1,
        });
    }
    });
    return (
        <group ref={props.strawberryref} >
          <primitive {...bind()} ref={bottle2} object={scene} {...props} />
        </group>
      );
}

const Litchi=(props)=>{
    const { scene } = useGLTF("Litchi Bottle.glb");
    const bottle3=useRef()
    useFrame(()=>{
        bottle3.current.rotation.y+=0.02
    })
    const bind = useDrag(({ down, movement: [mx, my], first }) => {
        if (!props.isMobile){

            if (first) 
            {
                setOriginalPosition(bottle3.current.position.clone());
            }       
            gsap.to(bottle3.current.position, {
            x: down ? (mx / 100) +39: +39,
            y: down ? (-my / 100)+6.8 : 6.8, // Use '-my' for the y-coordinate
            duration: down ? 0 : 1,
        });
    }
    });
    return (
        <group ref={props.litchiref}>
          <primitive {...bind()} ref={bottle3} object={scene} {...props} />
        </group>
      );
}