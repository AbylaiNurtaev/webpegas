import React from 'react'
import s from './MainPage.module.sass'

import Header from '../components/Header/Header'
import Advantages from '../components/Advantages/Advantages'
import Services from '../components/Services/Services'
import Approach from '../components/Approach/Approach'
function MainPage() {
  return (
    <div className={s.container}>
        <Header></Header>
        <Advantages></Advantages>
        <Services></Services>
        <Approach></Approach>
    </div>
  )
}

export default MainPage
