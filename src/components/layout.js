import React  from 'react'
import Navbar from "./Navabar/Navbar.js"
 import Parallax from 'react-springy-parallax'
 import Animated from 'animated/lib/targets/react-dom'
 import Easing from 'animated/lib/Easing'

import "./layout.css"
import bgSVG from "./../images/bg.svg"
const Layout = ({children}) => {
   
         
        return (
            <body style={{overflow: "hidden"}} >
                 <Navbar style={{position:"sticky", top: "0"}} />
           
           
                 <Parallax  pages={4}   
    effect={(animation, toValue) =>
    Animated.timing(animation, { toValue, duration: 0 })}
        >
          
                    <Parallax.Layer
                            tension={0}
                            offset={0}
                            speed={-0.7}
                           style={{ position: 'absolute' }}
                            >
                   
                         <img src={bgSVG} style={{ maxHeight: "200vh", winWidth:"100vw"}}/>
                   
                     </Parallax.Layer>
                     
                     
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

 