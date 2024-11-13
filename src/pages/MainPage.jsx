import React from 'react'
import s from './MainPage.module.sass'

import Header from '../components/Header/Header'
import Advantages from '../components/Advantages/Advantages'

function MainPage() {
  return (
    <div className={s.container}>
        <Header></Header>
        <Advantages></Advantages>
    </div>
  )
}

export default MainPage
