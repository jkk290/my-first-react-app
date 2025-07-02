import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { MyFavs } from './MyFavs.jsx'
import { Test } from './Test.jsx'
import { Button } from './button.jsx'
import { Person } from './person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greeting />
    <MyFavs />
    <Test />
    <Button text='Click Me!' color='blue' fontSize={12}/>
    <Button text="Don't Click Me!" color='Red' fontSize={4}/> */}
    <Person />
  </StrictMode>,
)
