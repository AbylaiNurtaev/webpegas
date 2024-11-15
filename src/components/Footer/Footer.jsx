import React from 'react'
import s from './Footer.module.sass'
import MobileFooter from '../MobileFooter/MobileFooter'

function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
  return (
    <>
        <div className={s.container}>
            <div className={s.top}>
                <img src="/images/white_logo.svg" style={{cursor: 'pointer'}} onClick={scrollToTop} alt="" />
                <div className={s.right}>
                    <div className={s.nav}>
                        <a href="#aboutus">О нас</a>
                        <a href="#services">Услуги</a>
                        <a href="#portfolio">Портфолио</a>
                        <a href="#feedbacks">Отзывы</a>
                        <a href="#workParts">Этапы работы</a>
                    </div>
                    <div className={s.info}>
                        <p className={s.time}>Ежедневно с 9:00 до 20:00</p>
                        <p className={s.phone}>8 (800) 000-00-00</p>
                        <p className={s.email}><b>Электронная почта:</b><br/>
                        info@sitename.ru</p>
                    </div>
                    <button onClick={scrollToTop}>
                        <img src="/icons/top.svg" alt="" />
                        <p>Наверх</p>
                    </button>
                </div>
            </div>

            <div className={s.bottom}>
                <img src="/icons/footerIcon.svg" alt="" />
                <div className={s.right}>
                    <div className={s.texts}>
                        <div className={s.accepting}>Согласие на обработку данных</div>
                        <div className={s.policy}>Политика конфиденциальности</div>
                    </div>
                    
                    <button className={s.mobileBtn} onClick={scrollToTop}>
                            <img src="/icons/top.svg" alt="" />
                            <p>Наверх</p>
                    </button>
                </div>
            </div>
        </div>  

        <div className={s.mobileFooter}>
            <MobileFooter></MobileFooter>
        </div>
    
    </>
  )
}

export default Footer
