import React from 'react'
import s from './Services.module.sass'



function Services() {

    const blocks = [
        {
            title: "Создание ботов",
            img: "/images/service_1.svg"
        },
        {
            title: "Создание дизайна",
            img: "/images/service_2.svg"
        },
        {
            title: "СоздАНИЕ сайтов",
            img: "/images/service_3.svg"
        },
        {
            title: "Оптимизация сайтов",
            img: "/images/service_4.svg"
        },
    ]

  return (
    <div className={s.container}>
      <div className={s.titleMob}>Широкий спектр услуг</div>
      <div className={s.parMob}>Мы поможем вам воспользоваться всей силой этих инструментов для достижения ваших целей.</div>
      <div className={s.blocks}>
            <div className={s.firstBlock}>
                <div className={s.title}>Широкий спектр услуг</div>
                <div className={s.par}>Мы поможем вам воспользоваться всей силой этих инструментов для достижения ваших целей.</div>
            </div>
                {
                    blocks.map((block, idx) => 
                        <div className={s.block} key={idx}>
                            <img src={block.img}  alt="image" />
                            <div className={s.title}>{block.title}</div>
                        </div>
                    )
                }

            <div className={s.lastBlock}>
                <img src="/icons/diagram.svg" alt="" />
                <div className={s.text}>
                    <div className={s.titleText}>75%</div>
                    <div className={s.parText}>проектов охватывают различные отрасли бизнеса клиентов.</div>
                </div>
                <div className={s.title}>75%</div>
                <div className={s.par}>проектов охватывают различные отрасли бизнеса клиентов.</div>
            </div>
      </div>
    </div>
  )
}

export default Services
