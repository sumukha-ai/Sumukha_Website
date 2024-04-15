import styles from './App.module.css'
import { BrowserRouter,Route,Routes  } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'
import { TOS } from './components/TOS/TOS'
import { Privacy } from './components/Privacy/Privacy'




function App() {
  return (
    <div className={styles.App} >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/terms-of-services" element={<TOS/>} />
        <Route path="/privacy-policy" element ={<Privacy/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
