import { useEffect, useMemo, useRef, useState } from 'react'

import './App.css'
import Calculator from './Component/Calculator/Calculator'


function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  )
}

export default App