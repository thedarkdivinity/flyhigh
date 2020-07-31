import React,{useEffect} from 'react'
import Common from './components/layout/Common'

import Objectives from './components/layout/Objectives';
import Showcase from './components/layout/Showcase'
import CommonData from './mapedData/CommonData';
import Aos from "aos";
import "../node_modules/aos/dist/aos";
import "../node_modules/aos/dist/aos.css";


const App = () => {

useEffect(()=>Aos.init({duration:'1600'}),[]);

  return (
    <>
     <Showcase/>
     
     {CommonData.map((sect)=>{
       return(
         <Common key={sect.id} heading={sect.title}   para={sect.para}  imgsrc={sect.imgsrc}/>
       )
     })}
     <Objectives/>
     
     
     
    
     
    </>
  )
}

export default App
