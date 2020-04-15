import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from "./Navabar/Navbar.js"
import { animated, useSpring } from 'react-spring';
import '@stripe/stripe-js' // https://github.com/stripe/stripe-js#import-as-a-side-effect


const calc = o => `translateY(${o * 0.1}px)`;

const Layout = ({children}) => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <body ref={ref}>
          <div
          style={{
            background: "#123456",
            position: "relative",
            width: "100vw",
            height: "400px"
          }}>
              <animated.div
            style={{
              background: "#654321",
              position: "absolute",
              width: "100%",
              height: "100px",
              top: 0,
              left: 0,
              transform: offset.interpolate(calc)
            }}
          >{children}</animated.div>
          </div>
        
        </body>
      
  );
};

export default Layout