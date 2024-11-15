import React, { useEffect } from 'react'
import s from './Popup.module.sass'

function Popup({ type, onClose }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [])

  let title = "";
  let description = "";
  let img = "";

  switch(type) {
    case "Создание ботов":
      title = "Создание ботов";
      description = "Разрабатываем интеллектуальных ботов для автоматизации бизнес-процессов и повышения эффективности взаимодействия с клиентами.";
      img = "/popup/btn.png"
      break;
    case "Создание сайтов":
      title = "Создание сайтов";
      description = "Разрабатываем современные и удобные веб-сайты, которые не только привлекают посетителей, но и конвертируют их в клиентов.";
      img = "/popup/Coursor.png"
      break;
    case "Оптимизация сайтов":
      title = "Оптимизация сайтов";
      description = "Улучшаем производительность и видимость вашего сайта в поисковых системах, чтобы привлечь больше трафика и увеличить конверсию.";
      img = "/popup/sait.png"
      break;
    case "Создание дизайна":
      title = "Создание дизайна";
      description = "Предлагаем креативные и функциональные дизайн-решения, которые помогают брендам выделиться и привлечь внимание целевой аудитории.";
      img = "/popup/sharik.png"
      break;
    default:
      title = "Услуга";
      description = "Подробное описание услуги.";
      img = "/popup/btn.png"
      break;
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
            <div className={s.left}>
                <div className={s.title}>{title}</div>
                <div className={s.par}>{description}</div>
                <button>Заказать</button>
            </div>
            <img className={s.right} src={img} alt="" />
        </div>
    </div>
  )
}

export default Popup;
