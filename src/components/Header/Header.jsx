import React, { useState } from 'react'
import s from './Header.module.sass'
import MobileHeader from '../MobileHeader/MobileHeader'
import OrderPopup from '../OrderPopup/OrderPopup'

function Header() {

  const [popup, setPopup] = useState(false)
  

  return (
    <>
      {
        popup == true &&
        <OrderPopup onClose={() => setPopup(false)}/>
      }
        <div className={s.container}>
            <img className={s.logo} src="/images/logo.svg" alt="logo" />
            <nav className={s.navigation}>
                <a href="#aboutus">О нас</a>
                <a href="#services">Услуги</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#feedbacks">Отзывы</a>
                <a href="#workParts">Этапы работы</a>
            </nav>

            <button className={s.feedbackBtn} onClick={() => setPopup(true)}>Обратная связь</button>
        </div>

        <div className={s.mobileHeader}>
            <MobileHeader/>
        </div>
    </>
  )
}

export default Header
