import './App.css'
import { useState } from 'react'
import { AddCategory } from './components/AddCategorie'


function App() {
  const [categories, setCategories] = useState(['One punch man', 'Dragon ball'])

  function onAddCategorie() {
    const cat = 'Dani flow'

    setCategories(a => [...a, cat])
  }

  return (
    <>
      <h1>GifApp</h1>
      <div>
        <AddCategory />
        <button onClick={onAddCategorie}>Agregar</button>
      </div>
      <dir>{categories.map((x, index) =>(
        <p key={index}>{index + 1}.- {x}</p>
      ))}</dir>
    </>
  )
}

export default App
