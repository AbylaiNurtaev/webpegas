import React from 'react'
import s from './Projects.module.sass'

function Projects() {

    const projects = [
        {
            title: "инвестиции в строительство",
            img: "/images/projects/1.png"
        },
        {
            title: "Курс по криптовалюте",
            img: "/images/projects/2.png"
        },
        {
            title: "Многостраничник для студии 3д печати",
            img: "/images/projects/3.png"
        },
        {
            title: "Страница курсов",
            img: "/images/projects/4.png"
        },
        {
            title: "Лендинг для сервиса по выбору стоматологов",
            img: "/images/projects/5.png"
        },
        {
            title: "Многостраничник  для испытательной лаборатории",
            img: "/images/projects/6.png"
        },
    ]

  return (
    <div className={s.container} id='portfolio'>
        <div className={s.title}>Наши проекты</div>

        <div className={s.projects}>
            {
                projects.map((elem, index) => 
                    <div className={s.project} key={index}>
                        <img src={elem.img} alt="img" />
                        <div className={s.title}>{elem.title}</div>
                    </div>
                )
            }
        </div>

        <div className={s.text}>Готовы изменить мир вокруг себя к лучшему? Свяжитесь с нами прямо сейчас и узнайте, как мы можем помочь вам достичь ваших целей!</div>
    </div>
  )
}

export default Projects
