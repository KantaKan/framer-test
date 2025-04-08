import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "motion/react"

function App() {


  return (
    <>
    <div className="container">

    <motion.div id="hello" whileHover={{scale:1.2,
      transition:{duration: 1}
    }}>
      Hello World
    </motion.div>
      </div>
    </>
  )
}

export default App
