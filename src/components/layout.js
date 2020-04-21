import React  from 'react'
import Navbar from "./Navabar/Navbar.js"
  import {Wrapper} from "./Shared.js"
 import Parallax from 'react-springy-parallax'
 import Animated from 'animated/lib/targets/react-dom'
 import Easing from 'animated/lib/Easing'



import "./layout.css"
import campBG from "./../images/campBG.svg"
import campMBG from "./../images/campMBG.svg"
import campMG from "./../images/campMG.svg"
import campMFG from "./../images/campMFG.svg"
import campFG from "./../images/campFG.svg"



const BgLayer = (props) => {
  const {   image, offset, speed} = props;

  return (
    <div className="outerDiv"  >
    
   <Parallax.Layer offset= {offset}  speed={speed}  className="ParallaxDiv" >
                       <img src={image} style={{ minHeight: "200vh",  minWidth:"100vw"}} className="ImageBG"/> 
                     </Parallax.Layer>
      
    </div>
  )
}



const Layout = ({children}) => {
   
         
        return (
            <body   >
                 <Navbar style={{position:"sticky", top: "0"}} />
                 <Parallax  pages={4}    effect={(animation, toValue) =>  Animated.timing(animation, { toValue, duration: 0 })}  >
                 
                    <BgLayer   image={campBG} offset = " 0" speed="-0.75"/>
                    <BgLayer   image={campMBG} offset = " 0" speed="-0.7"/>
                    <BgLayer   image={campMG} offset = " 0" speed="-0.68"/>
                    <BgLayer   image={campMFG} offset = " 0" speed="-0.65"/>
                    <BgLayer   image={campFG} offset = " 0.1" speed="-0.6"/>
                    
                     <Parallax.Layer
                        offset={0}
                        speed={0.1}
                        >
                       {children}
                    </Parallax.Layer>
               </Parallax>
             
            
            
            
            
            </body>
            )
    }
 


export default Layout;

 