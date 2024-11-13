import React from 'react'
import s from './Header.module.sass'
import MobileHeader from '../MobileHeader/MobileHeader'

function Header() {
  return (
    <>
        <div className={s.container}>
            <img className={s.logo} src="/images/logo.svg" alt="logo" />
            <nav className={s.navigation}>
                <a href="#aboutus">О нас</a>
                <a href="#services">Услуги</a>
                <a href="#portfolio">Портфолио</a>
                <a href="#feedbacks">Отзывы</a>
                <a href="#workParts">Этапы работы</a>
            </nav>

            <button className={s.feedbackBtn}>Обратная связь</button>
        </div>

        <div className={s.mobileHeader}>
            <MobileHeader/>
        </div>
    </>
  )
}

export default Header
