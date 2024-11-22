import React, { useState } from 'react'
import s from './MobileHeader.module.sass'
import OrderPopup from '../OrderPopup/OrderPopup'

function MobileHeader() {

  const [menu, setMenu] = useState(false)
  const [popup, setPopup] = useState(false)
  return (
    <>

{
        popup == true &&
        <OrderPopup onClose={() => setPopup(false)}/>
      }
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
          <nav className={s.navbar}>
                <a href="/#aboutus" onClick={() => setMenu(false)}>О нас</a>
                <a href="/#services" onClick={() => setMenu(false)}>Услуги</a>
                <a href="/portfolio" onClick={() => setMenu(false)}>Портфолио</a>
                <a href="/#feedbacks" onClick={() => setMenu(false)}>Отзывы</a>
                <a href="/#workParts" onClick={() => setMenu(false)}>Этапы работы</a>
          </nav>
      </div>
    }
      <div className={s.container}>
          <img onClick={() => setMenu(true)} src="/icons/burger_menu.svg" alt="burger" className={s.burgerMenuBtn} />
          <img className={s.logo} src="/images/logo.svg" alt="logo" />
          <button className={s.feedbackBtn} onClick={() => setPopup(true)}>Обратная связь</button>
          <img className={s.phoneIcon} onClick={() => setPopup(true)} src="/icons/phone.svg" alt="phone" />
      </div>
    </>
  )
}

export default MobileHeader
