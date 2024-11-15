import React, { useState } from 'react'
import s from './MobileHeader.module.sass'

function MobileHeader() {

  const [menu, setMenu] = useState(false)

  return (
    <>
    {
      menu == true &&
      <div className={s.menu}>
          <img className={s.logo} src="/images/logo.svg" alt="" />
          <img
              className={s.closeBtn}
              src="/icons/Close Square.svg"
              alt="Закрыть"
              onClick={() => setMenu(false)}
          />
          <div className={s.navbar}>
                <a href="#aboutus" onClick={() => setMenu(false)}>О нас</a>
                <a href="#services" onClick={() => setMenu(false)}>Услуги</a>
                <a href="#portfolio" onClick={() => setMenu(false)}>Портфолио</a>
                <a href="#feedbacks" onClick={() => setMenu(false)}>Отзывы</a>
                <a href="#workParts" onClick={() => setMenu(false)}>Этапы работы</a>
          </div>
      </div>
    }
      <div className={s.container}>
          <img onClick={() => setMenu(true)} src="/icons/burger_menu.svg" alt="burger" className={s.burgerMenuBtn} />
          <img className={s.logo} src="/images/logo.svg" alt="logo" />
          <button className={s.feedbackBtn}>Обратная связь</button>
          <img className={s.phoneIcon} src="/icons/phone.svg" alt="phone" />
      </div>
    </>
  )
}

export default MobileHeader
