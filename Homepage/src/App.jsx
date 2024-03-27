import { Contact } from "./components/Contact/Contact";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Integrations } from "./components/Integrations/Integrations";
import { About } from "./components/About/About";
import { Features } from "./components/Features/Features";
import { Product } from "./components/Product/Product";




function App() {
  return (
    <div className={styles.App} >
      <Navbar />
      <Hero /> 
      < About id="about"/>
      < Features/>
      <Integrations/>
      <Product/>
      <Contact />
    </div>
  )
}

export default App
