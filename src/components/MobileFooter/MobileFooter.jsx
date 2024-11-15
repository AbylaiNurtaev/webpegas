import React from 'react'
import s from './MobileFooter.module.sass'

function MobileFooter() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    

  return (
    <div className={s.container}>
        <img className={s.logo} src="/images/white_logo.svg" alt="" />

        <div className={s.main}>
            <div className={s.left}>
                <div className={s.info}>
                    <p className={s.time}>Ежедневно с 9:00 до 20:00</p>
                    <a className={s.phone} href='tel:+79522517323'>8 (952) 251-73-23</a>
                    <p className={s.email}><b>Электронная почта:</b><br/>
                    infowebpegas@gmail.com</p>
                    <p className={s.email} style={{cursor: 'pointer'}} onClick={() => window.open("https://t.me/webpeegas")}><b>Telegram:</b><br/>
                    t.me/webpeegas</p>
                </div>

                <button onClick={scrollToTop}>
                    <img src="/icons/top.svg" alt="" />
                    <p>Наверх</p>
                </button>
            </div>

            <div className={s.right}>   
                <div className={s.nav}>
                    <a href="">О нас</a>
                    <a href="">Услуги</a>
                    <a href="">Портфолио</a>
                    <a href="">Отзывы</a>
                    <a href="">Этапы работы</a>
                </div>
                <div className={s.texts}>
                    <div className={s.accepting}>Согласие на обработку данных</div>
                    <div className={s.policy}>Политика конфиденциальности</div>
                </div>
            </div>
        </div>

        <div className={s.mobileButton} onClick={scrollToTop}>
            <img src="/icons/top.svg" alt="" />
            <p>Наверх</p>
        </div>

        <img className={s.bottomLogo} src="/icons/footerIcon.svg" alt="" />
</div>  
  )
}

export default MobileFooter
