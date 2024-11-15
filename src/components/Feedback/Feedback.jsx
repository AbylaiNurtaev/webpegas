import React from 'react'
import s from './Feedback.module.sass'

function Feedback({img, name, work, par, onClose}) {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

  return (
    <div className={s.container}>
    <div className={s.overlay} onClick={onClose}></div>
    <div className={s.popup}>
        <img className={s.logo} src="/images/logo.svg" alt="" />
        <img
            className={s.closeBtn}
            src="/icons/Close Square.svg"
            alt="Закрыть"
            onClick={onClose}
        />
        <div className={s.top}>

            <img className={s.right} src={img} alt="" />
            <div className={s.left}>
                <div className={s.title}>{name}</div>
                <div className={s.work}>{work}</div>
                <div className={s.citationWrapper}>
                    <img src="/popup/citation.svg" alt="" />
                </div>
                <div className={s.par}>{par}</div>
                
            </div>
        </div>

        <div className={s.mobileCitation}>
        <div className={s.citationWrapper}>
                <img src="/popup/citation.svg" alt="" />
            </div>
            <div className={s.par}>{par}</div>
            <div className={s.mobileBtn} onClick={() => {onClose(); scrollToTop()}}>На главную</div>
        </div>
    </div>
</div>
  )
}

export default Feedback
