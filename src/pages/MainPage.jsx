import React from 'react'
import s from './MainPage.module.sass'

import Header from '../components/Header/Header'
import Advantages from '../components/Advantages/Advantages'
import Services from '../components/Services/Services'
import Approach from '../components/Approach/Approach'
import Projects from '../components/Projects/Projects'
import Proccess from '../components/Proccess/Proccess'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import Reviews from '../components/Reviews/Reviews'

function MainPage() {
  return (
    <div className={s.container}>
        <Header></Header>
        <Advantages></Advantages>
        <Services></Services>
        <Approach></Approach>
        <Projects></Projects>
        <Reviews></Reviews>
        <Proccess></Proccess>
        <Form></Form>
        <Footer></Footer>
    </div>
  )
}

export default MainPage
