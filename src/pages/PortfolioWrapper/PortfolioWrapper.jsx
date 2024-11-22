import React from 'react'
import s from './PortfolioWrapper.module.sass'
import Form from '../../components/Form/Form'
import Reviews from '../../components/Reviews/Reviews'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import PortfolioWindows from '../../components/PortfolioWindows/PortfolioWindows'


function PortfolioWrapper() {
  return (
    <div className={s.container}>
        <Header></Header>
        <PortfolioWindows></PortfolioWindows>
        <Form/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default PortfolioWrapper
