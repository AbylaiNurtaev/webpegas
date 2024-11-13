import React from 'react'
import s from './MobileHeader.module.sass'

function MobileHeader() {
  return (
    <div className={s.container}>
        <img src="/icons/burger_menu.svg" alt="burger" className={s.burgerMenuBtn} />
        <img className={s.logo} src="/images/logo.svg" alt="logo" />
        <button className={s.feedbackBtn}>Обратная связь</button>
        <img className={s.phoneIcon} src="/icons/phone.svg" alt="phone" />
    </div>
  )
}

export default MobileHeader
