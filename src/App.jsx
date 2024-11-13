// DO NOT DELETß

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://dog.ceo/api/breeds/image/random")
  const next_dog = () => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")
  return (
    <div>
      <header>Dogアプリ</header>
      <img src={dogUrl} alt='dog_img'></img>
      <button onClick={next_dog}>更新</button>
    </div>
    
  )
}
