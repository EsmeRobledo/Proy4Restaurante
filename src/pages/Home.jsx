import React, {useState} from 'react'
import Aboutus from '../components/Aboutus/Aboutus'
import Footer from '../components/Footer/Footer'
import PresentationHome from '../components/PresentationHome/PresentationHome'
import Services from '../components/Services/Services'
import { Navigation } from '../routes/Navigation'
import { Sidebar } from '../routes/Sidebar/Sidebar'
import {homeObjOne} from '../components/Aboutus/Data'
import {productData} from '../components/Menu/Data'
import Menu from '../components/Menu/Menu'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }  
  return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navigation toggle={toggle} />  
          <PresentationHome />
          <Menu data={productData}/>
          <Aboutus {...homeObjOne}/>
          <Services/>
          <Footer />
        </>
    )
}

export default Home;
