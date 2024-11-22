import React from 'react'
import s from './Projects.module.sass'
import { useNavigate } from 'react-router-dom'

function Projects() {
    const navigate = useNavigate()

    const projects = [
        {
            title: "инвестиции в строительство",
            img: "/images/projects/1.png"
        },
        {
            title: "Редизайн курсов для консалтинговой фирмы",
            img: "/images/projects/2.png"
        },
        {
            title: "Многостраничник для студии 3д печати",
            img: "/images/projects/3.png"
        },
        {
            title: "сайт для сервиса по ПОДБОРУ стоматологов",
            img: "/images/projects/4.png"
        },
        {
            title: "Лендинг для банкетного зала",
            img: "/images/projects/5.png"
        },
        {
            title: "Многостраничник для испытательной лаборатории",
            img: "/images/projects/6.png"
        },
    ]

  return (
    <div className={s.container} id='portfolio'>
        <div className={s.title}>Наши проекты</div>

        <div className={s.projects}>
            {
                projects.map((elem, index) => 
                    <div className={s.project} key={index} onClick={() => navigate(`/portfolio/${elem.title}`)}>
                        <img src={elem.img} alt="img" />
                        <h2 className={s.title}>{elem.title}</h2>
                    </div>
                )
            }
        </div>

        <div className={s.text}>Готовы изменить мир вокруг себя к лучшему? Свяжитесь с нами прямо сейчас и узнайте, как мы можем помочь вам достичь ваших целей!</div>
    </div>
  )
}

export default Projects
