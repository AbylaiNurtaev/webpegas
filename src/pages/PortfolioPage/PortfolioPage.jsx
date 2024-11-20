import React, { useEffect } from 'react'
import s from './PortfolioPage.module.sass'
import Feedback from '../../components/Feedback/Feedback'
import Form from '../../components/Form/Form'
import Footer from '../../components/Footer/Footer'
import Reviews from '../../components/Reviews/Reviews'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import PortfolioImage from '../../components/PortfolioImage/PortfolioImage'
import OtherWorks from '../../components/OtherWorks/OtherWorks'

function PortfolioPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={s.container}>
        <Header/>
        <PortfolioImage/>
        <OtherWorks></OtherWorks>
        <Form/>
        <Reviews/>
        <Footer/>

    </div>
  )
}

export default PortfolioPage
